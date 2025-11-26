const createHttpError = require('http-errors');
const { Phone } = require('../models');

module.exports.createPhone = async (req, res, next) => {
  const { body } = req;

  try {
    const createdPhone = await Phone.create(body);

    if (!createdPhone) {
      return next(createHttpError(400, 'Phone not created'));
    }

    res.status(201).send({ data: createdPhone });
  } catch (err) {
    next(createHttpError(500, err.message));
  }
};

module.exports.getPhones = async (req, res, next) => {
  const { limit, offset } = req.query;

  try {
    const foundPhones = await Phone.find()
      .sort({ _id: 1 })
      .limit(limit)
      .skip(offset);

    if (!foundPhones) {
      return next(createHttpError(404, 'Phones not found'));
    }

    res.status(200).send({ data: foundPhones });
  } catch (err) {
    next(createHttpError(500, err.message));
  }
};

module.exports.getPhoneById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const foundPhone = await Phone.findById(id);

    if (!foundPhone) {
      return next(createHttpError(404, 'Phone not found'));
    }

    res.status(200).send({ data: foundPhone });
  } catch (err) {
    next(createHttpError(500, err.message));
  }
};

module.exports.updatePhoneById = async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const updatedPhone = await Phone.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!updatedPhone) {
      return next(createHttpError(404, 'Phone not found'));
    }

    res.status(200).send({ data: updatedPhone });
  } catch (err) {
    next(createHttpError(500, err.message));
  }
};

module.exports.deletePhoneById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedPhone = await Phone.findByIdAndDelete(id);

    if (!deletedPhone) {
      return next(createHttpError(404, 'Phone not found'));
    }

    res.status(200).send({ data: deletedPhone });
  } catch (err) {
    next(createHttpError(500, err.message));
  }
};
