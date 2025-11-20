const { Router } = require('express');

const phoneRouter = Router();

phoneRouter
  .route('/:id')
  .get(() => {})
  .patch(() => {})
  .delete(() => {});

module.exports = phoneRouter;
