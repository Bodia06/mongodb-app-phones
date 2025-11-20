const createHttpError = require('http-errors');
const { User } = require('../models');

module.exports.createUserPhone = async (req, res, next) => {
  const {
    body,
    params: { id },
  } = req;

  try {
    const foundUser = await User.findById(id);

    if (!foundUser) {
      return next(createHttpError(404, 'User not found'));
    }

    const phoneInfo = {
      ...body,
      phoneId: new mongoose.Types.ObjectId(),
    };

    const createdPhone = await Phone.create(phoneInfo);

    if (!createdPhone) {
      return next(createHttpError(400, 'Phone not created'));
    }

    const preparedPhone = _.omit(createdPhone.toObject(), [
      'updatedAt',
      'createdAt',
    ]);

    res.status(201).send({ data: preparedPhone });
  } catch (err) {
    next(createHttpError(500, err.message));
  }
};

module.exports.getUserPhone = async (req, res, next) => {
  const { id } = req.params;

  try {
    const foundPhones = await User.findById(id).populate('phoneId');

    if (!foundPhones) {
      return next(createHttpError(404, 'Phones not found'));
    }

    res.status(200).send({ data: foundPhones });
  } catch (err) {
    next(createHttpError(500, err.message));
  }
};
