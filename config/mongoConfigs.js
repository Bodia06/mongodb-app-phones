module.exports = {
  development: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dbName: process.env.DB_NAME,
  },
  test: {
    host: '127.0.0.1',
    port: 27017,
    dbName: 'users_db_test',
  },
  production: {
    host: '127.0.0.1',
    port: 27017,
    dbName: 'users_db_production',
    user: '',
    password: '',
  },
};
