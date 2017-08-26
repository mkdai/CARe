const Sequelize = require('sequelize');
const path = require('path');
const dbURL = require(path.resolve(__dirname, '../env/config')).dbURL;

const db = new Sequelize(dbURL, 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres'})

db.authenticate()
  .then(() => console.log('successfully connected to db'))
  .catch(err => console.log('could not connect to db: ', err))

exports.module = db;