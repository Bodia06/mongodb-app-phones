const { Router } = require('express');

const phonesRouter = Router();

phonesRouter
  .route('/')
  .get(() => {})
  .post(() => {});

module.exports = phonesRouter;
