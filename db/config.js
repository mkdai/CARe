const Sequelize = require('sequelize');
const path = require('path');
const dbURL = require(path.resolve(__dirname, '../env/config')).dbURL;
console.log('this is the dbURL', dbURL)

const db = new Sequelize(dbURL, {dialect: 'postgres'})

db.authenticate()
  .then(() => console.log('successfully connected to db'))
  .catch(err => console.log('could not connect to db'))

exports.module = db;