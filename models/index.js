const mongoose = require('mongoose');
const env = process.env.NODE_ENV || 'development';
const { host, port, dbName } = require('../config/mongoConfigs')[env];

mongoose
  .connect(`mongodb://${host}:${port}/${dbName}`)
  .then(() => {
    console.log(`Connected to MongoDB database: ${dbName} in ${env} mode.`);
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

module.exports.Phone = require('./phone');
module.exports.User = require('./users');
