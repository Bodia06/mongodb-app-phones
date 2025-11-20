const { Router } = require('express');

const usersRouter = Router();

usersRouter
  .route('/:id/phones')
  .get(() => {})
  .post(() => {});

module.exports = usersRouter;
