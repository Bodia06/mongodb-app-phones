const { Router } = require('express');
const phonesRouter = require('./phonesRouter');
const phoneRouter = require('./phoneRouter');
const usersRouter = require('./usersRouter');

const router = Router();

router.use('/phones', phonesRouter);
router.use('/phone', phoneRouter);
router.use('/users', usersRouter);

module.exports = router;
