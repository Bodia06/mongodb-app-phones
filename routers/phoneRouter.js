const { Router } = require('express');
const { phonesControllers } = require('../controller');

const phoneRouter = Router();

phoneRouter
  .route('/:id')
  .get(phonesControllers.getPhoneById)
  .patch(phonesControllers.updatePhoneById)
  .delete(phonesControllers.deletePhoneById);

module.exports = phoneRouter;
