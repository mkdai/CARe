const Sequelize = require("sequelize");
const path = require("path");
const dbURL = require(path.resolve(__dirname, "../env/config")).dbURL;

const db = new Sequelize(dbURL, {
  dialect: "postgres",
  pool: { max: 5, min: 0, idle: 20000, aqquire: 20000, evict: 20000 },
  logging: false
});

db
  .authenticate()
  .then(() => console.log("successfully connected to db"))
  .catch(err => console.log("could not connect to db: ", err));

module.exports = db;
