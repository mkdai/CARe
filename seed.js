const Sequelize = require("sequelize");
const path = require("path");
const dbURL = require(path.resolve(__dirname, "./env/config")).dbURL;

const {
  User,
  Shop,
  Car,
  HistoryEntry,
  Review,
  Appointment,
  Favorite,
  Message
} = require(path.resolve(__dirname, "./db/index"));

const db = new Sequelize(dbURL, {
  dialect: "postgres",
  pool: { max: 5, min: 0, idle: 20000, aqquire: 20000 }
});

db
  .authenticate()
  .then(() => console.log("opening connection to database to seed data"))
  .then(() => console.log("syncing users"))
  .then(() => User.sync({ force: true }))
  .then(() =>
    User.bulkCreate([
      {
        name: "Test-Name",
        email: "Email@test.com",
        phone: "(555) 555-5555",
        profilePic: "https://goo.gl/images/4StBwJ"
      }
    ])
  )
  .then(() => console.log("created users, syncing shops"))
  .then(() => Shop.sync({ force: true }))
  .then(() =>
    Shop.bulkCreate([
      {
        address: "Test1 St Pasadena, CA 91106",
        email: "shop@testEmail.com",
        phone: "(626) 795-7018",
        pickup: false,
        picture:
          "https://s3-media4.fl.yelpcdn.com/bphoto/WrtUFUssbokGmNW6BG-BMQ/o.jpg"
      },
      {
        address: "Test2 Address Ave. Glendale, CA 11111",
        email: "shop2@testEmail.com",
        phone: "(626) 555-7585",
        pickup: true,
        picture:
          "https://s3-media4.fl.yelpcdn.com/bphoto/WrtUFUssbokGmNW6BG-BMQ/o.jpg"
      },
      {
        address: "Test3 Blvd. Pasadena, CA 91106",
        email: "shop@testEmail.com",
        phone: "(626) 795-7018",
        pickup: false,
        picture:
          "https://s3-media4.fl.yelpcdn.com/bphoto/WrtUFUssbokGmNW6BG-BMQ/o.jpg"
      },
      {
        address: "Test4 Ave. Glendale, CA 11111",
        email: "shop2@testEmail.com",
        phone: "(626) 555-7585",
        pickup: true,
        picture:
          "https://s3-media4.fl.yelpcdn.com/bphoto/WrtUFUssbokGmNW6BG-BMQ/o.jpg"
      }
    ])
  )
  .then(() => console.log("shops have been synced, syncing cars"))
  .then(() => Car.sync({ force: true }))
  .then(() =>
    Car.bulkCreate([
      {
        make: "test Make",
        model: "test model",
        nextService: ["test service 1", "test service 2"],
        picture: "https://goo.gl/images/JS3xgR",
        vin: "test vin",
        year: 2020
      },
      {
        make: "test2 Make",
        model: "test2 model",
        nextService: ["test service 1", "test service 2"],
        picture: "https://goo.gl/images/JS3xgR",
        vin: "test2 vin",
        year: 2021
      },
      {
        make: "test3 Make",
        model: "test3 model",
        nextService: ["test service 1", "test service 2"],
        picture: "https://goo.gl/images/JS3xgR",
        vin: "test3 vin",
        year: 2022
      },
      {
        make: "test4 Make",
        model: "test4 model",
        nextService: ["test service 1", "test service 2"],
        picture: "https://goo.gl/images/JS3xgR",
        vin: "test4 vin",
        year: 2023
      }
    ])
  )
  .then(() => Car.findAll())
  .then(() => console.log("seeded car data to table, syncing history entries"))
  .then(() => HistoryEntry.sync({ force: true }))
  .then(() =>
    HistoryEntry.bulkCreate([
      {
        date: new Date(),
        description: "Test description",
        mileage: 3000000,
        notes: "test note",
        service: "test service"
      },
      {
        date: new Date(),
        description: "Test2 description",
        mileage: 3000000,
        notes: "test note",
        service: "test service"
      },
      {
        date: new Date(),
        description: "Test3 description",
        mileage: 3000000,
        notes: "test note",
        service: "test service"
      },
      {
        date: new Date(),
        description: "Test4 description",
        mileage: 3000000,
        notes: "test note",
        service: "test service"
      }
    ])
  )
  .then(() => HistoryEntry.findAll())
  .then(res =>
    console.log(
      "here are your history entries",
      res.map(entry => entry.dataValues)
    )
  )
  .catch(err => console.log("could not connect to db: ", err));
