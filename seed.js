const Sequelize = require("sequelize");
const path = require("path");
const dbURL = require(path.resolve(__dirname, "./env/config")).dbURL;

const db = new Sequelize(dbURL, {
  dialect: "postgres",
  pool: { max: 5, min: 0, idle: 20000, aqquire: 20000 }
});

db
  .authenticate()
  .then(() => console.log("successfully connected to db"))
  .then()
  .then(() => db.close())
  .then(() => console.log("closed connection"))
  .catch(err => console.log("could not connect to db: ", err));
