const { Router } = require('express');
const { usersControllers } = require('../controller');

const usersRouter = Router();

usersRouter
  .route('/:id/phones')
  .get(usersControllers.getUserPhone)
  .post(usersControllers.createUserPhone);

module.exports = usersRouter;
