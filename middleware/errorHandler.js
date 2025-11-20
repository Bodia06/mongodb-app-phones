const createHttpError = require('http-errors');

module.exports.mongooseErrorHandler = (err, req, res, next) => {
  if (!err || !err.name) {
    return next(err);
  }

  if (err.name === 'CastError') {
    return next(createHttpError(400, `Invalid ${err.path}: ${err.value}`));
  }

  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map(e => e.message);
    return next(createHttpError(400, messages.join(', ')));
  }

  if (err.code === 11000) {
    const field = Object.keys(err.keyPattern)[0];
    return next(createHttpError(409, `${field} is already taken`));
  }

  if (err.name === 'MongoError') {
    return next(createHttpError(500, 'Database error'));
  }

  return next(err);
};

module.exports.errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return;
  }

  const status = err.status ?? 500;

  res.status(status).send({
    errors: [
      {
        status,
        title: err.message ?? 'Server Error',
      },
    ],
  });
};
