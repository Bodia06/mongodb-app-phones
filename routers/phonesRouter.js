const { Router } = require('express');
const { phonesControllers } = require('../controller');

const phonesRouter = Router();

phonesRouter
  .route('/')
  .get(phonesControllers.getPhones)
  .post(phonesControllers.createPhone);

module.exports = phonesRouter;
