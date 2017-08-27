const Sequelize = require('sequelize');
const path = require('path');
const dbURL = require(path.resolve(__dirname, '../env/config')).dbURL;

const db = new Sequelize(dbURL, {
  // For RDS/AWS the dbURL should be in the following format
  // 'postgres://userNameHere:passwordHere@endpointHere:portHere/dbNameHere'
  dialect: 'postgres',
  pool: {max: 5, min: 0, idle: 10000}
})

db.authenticate()
  .then(() => console.log('successfully connected to db'))
  .catch(err => console.log('could not connect to db: ', err))

module.exports = db;