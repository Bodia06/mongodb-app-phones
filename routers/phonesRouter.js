const { Router } = require('express');
const { phonesControllers } = require('../controller');

const phonesRouter = Router();

phonesRouter
  .route('/')
  .get(phonesControllers.getPhones)
  .post(phonesControllers.createPhone);

phonesRouter
  .route('/:id')
  .get(phonesControllers.getPhoneById)
  .patch(phonesControllers.updatePhoneById)
  .delete(phonesControllers.deletePhoneById);

module.exports = phonesRouter;
