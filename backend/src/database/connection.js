const knex = require('knex');
const configDatabase = require('../../knexfile');

const config = process.env.NODE_ENV === 'test'
  ? configDatabase.test
  : configDatabase.development;

const connection = knex(config);

module.exports = connection;
