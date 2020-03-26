const knex = require('knex');
const configDatabase = require('../../knexfile');

const connection = knex(configDatabase.development);

module.exports = connection;
