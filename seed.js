const Sequelize = require("sequelize");
const path = require("path");
const dbURL =
  process.env.dbURL || require(path.resolve(__dirname, "./env/config")).dbURL;
const {
  User,
  Shop,
  Car,
  HistoryEntry,
  Review,
  Appointment,
  Favorite,
  Message,
  Reminder
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
        name: "here",
        email: "here@here.com",
        phone: "(555) 555-5555",
        profilePic: "https://goo.gl/images/4StBwJ",
        shopId: 4
      },
      {
        name: "James",
        email: "jhwang137@gmail.com",
        phone: "(555) 555-5555",
        profilePic: "https://goo.gl/images/4StBwJ",
        shopId: 3
      },
      {
        name: "Test-Name-3",
        email: "Email3@test.com",
        phone: "(555) 555-5555",
        profilePic: "https://goo.gl/images/4StBwJ"
      },
      {
        name: "Test-Name-4",
        email: "Email4@test.com",
        phone: "(555) 555-5555",
        profilePic: "https://goo.gl/images/4StBwJ"
      },
      {
        email: "mikegriff951@gmail.com",
        name: "Michael Griffin",
        phone: "9513260152",
        profilePic:
          "https://pbs.twimg.com/profile_images/809457271365320704/or_PlfyP.jpg"
      },
      {
        name: "Ethan Fung",
        email: "ethanefung@gmail.com",
        phone: "(626) 354-8475",
        profilePic: "https://goo.gl/images/4StBwJ",
        shopId: 1
      },
      {
        name: "Michael Dai",
        email: "michaelkdai@gmail.com",
        phone: "(626) 354-8475",
        profilePic: "https://goo.gl/images/4StBwJ",
        shopId: 2
      }
    ])
  )
  .then(() => console.log("created users, syncing shops"))
  .then(() => Shop.sync({ force: true }))
  .then(() =>
    Shop.bulkCreate([
      {
        name: "Valvoline Instant Oil Change",
        address: "9014 National Blvd\nLos Angeles, CA 90034",
        email: "ethanefung@gmail.com",
        phone: "(310) 202-0198",
        yelp_id: "valvoline-instant-oil-change-los-angeles",
        picture:
          "https://s3-media2.fl.yelpcdn.com/bphoto/9WsN0FM0tUcagxFjsOVWgQ/o.jpg"
      },
      {
        name: "Valvoline Instant Oil Change",
        address: "2029 S Sepulveda Blvd\nLos Angeles, CA 90025",
        email: "shop2@testEmail.com",
        phone: "(310) 696-0160",
        yelp_id: "valvoline-instant-oil-change-los-angeles-19",
        picture:
          "https://s3-media2.fl.yelpcdn.com/bphoto/7wDXPk1DdQ5sqeXEBFSCmw/o.jpg"
      },
      {
        name: "Jiffy Lube",
        address: "700 North La Brea Ave\nLos Angeles, CA 90038",
        email: "jhwang137@gmail.com",
        calendar_id: "028c71b7-6ea2-450d-b1d5-4f26b828c4ab",
        tk_api_token: "6G7Xm3jDg36Km4jDgPR4yhMaQxzmjJgq",
        phone: "(323) 937-7179",
        yelp_id: "jiffy-lube-los-angeles-3",
        picture:
          "https://s3-media4.fl.yelpcdn.com/bphoto/G1xsqiELdx5FoY3nSB2g3g/o.jpg"
      },
      {
        name: "Lube Masters",
        address: "2805 Colorado Blvd\nLos Angeles, CA 90041",
        email: "here@here.com",
        phone: "(323) 254-0741",
        yelp_id: "lube-masters-los-angeles",
        picture:
          "https://s3-media1.fl.yelpcdn.com/bphoto/TxuG4aomU4nE675CMRrnCA/o.jpg"
      }
    ])
  )
  .then(() => console.log("created shops, syncing cars"))
  .then(() => Car.sync({ force: true }))
  .then(() =>
    Car.bulkCreate([
      {
        make: "test Make",
        mileage: 25536,
        model: "test model",
        nextService: ["test service 1", "test service 2"],
        picture: "https://goo.gl/images/JS3xgR",
        vin: "test vin",
        year: 2020,
        userId: 5
      },
      {
        make: "test2 Make",
        mileage: 255345,
        model: "test2 model",
        nextService: ["test service 1", "test service 2"],
        picture: "https://goo.gl/images/JS3xgR",
        vin: "test2 vin",
        year: 2021,
        userId: 5
      },
      {
        make: "test3 Make",
        mileage: 255361,
        model: "test3 model",
        nextService: ["test service 1", "test service 2"],
        picture: "https://goo.gl/images/JS3xgR",
        vin: "test3 vin",
        year: 2022,
        userId: 5
      },
      {
        make: "test4 Make",
        mileage: 99999,
        model: "test4 model",
        nextService: ["test service 1", "test service 2"],
        picture: "https://goo.gl/images/JS3xgR",
        vin: "test4 vin",
        year: 2023,
        userId: 5
      }
    ])
  )
  .then(() => console.log("created cars, syncing history entries"))
  .then(() => HistoryEntry.sync({ force: true }))
  .then(() =>
    HistoryEntry.bulkCreate([
      {
        date: new Date(),
        description: "Test description",
        mileage: 3000000,
        notes: "test note",
        service: "test service",
        carId: 2,
        shopId: 4
      },
      {
        date: new Date(),
        description: "Test2 description",
        mileage: 3000000,
        notes: "test note",
        service: "test service",
        carId: 1,
        shopId: 4
      },
      {
        date: new Date(),
        description: "Test3 description",
        mileage: 3000000,
        notes: "test note",
        service: "test service",
        carId: 2,
        shopId: 2
      },
      {
        date: new Date(),
        description: "Test4 description",
        mileage: 3000000,
        notes: "test note",
        service: "test service",
        carId: 3,
        shopId: 1
      }
    ])
  )
  .then(() => console.log("created history entries, syncing reviews"))
  .then(() => Review.sync({ force: true }))
  .then(() =>
    Review.bulkCreate([
      {
        rating: 1,
        response: "response test1",
        review: "review test1",
        userId: 1,
        shopId: 2
      },
      {
        rating: 2,
        response: "response test2",
        review: "review test2",
        userId: 3,
        shopId: 1
      },
      {
        rating: 3,
        response: "response test3",
        review: "review test3",
        userId: 2,
        shopId: 1
      }
    ])
  )
  .then(() => console.log("created reviews, syncing appointments"))
  .then(() => Appointment.sync({ force: true }))
  .then(() =>
    Appointment.bulkCreate([
      {
        service: "service test 1",
        time: "time test 1.  I am a string",
        userId: 2,
        shopId: 1
      },
      {
        service: "service test 2",
        time: "time test 2",
        userId: 1,
        shopId: 3
      },
      {
        service: "service test 3",
        time: "time test 3",
        userId: 4,
        shopId: 4
      }
    ])
  )
  .then(() => console.log("created appointments, syncing favorites"))
  .then(() => Favorite.sync({ force: true }))
  .then(() =>
    Favorite.bulkCreate([
      {
        userId: 5,
        shopId: 2
      },
      {
        userId: 5,
        shopId: 2
      },
      {
        userId: 7,
        shopId: 1
      }
    ])
  )
  .then(() => console.log("created favorites, syncing messages"))
  .then(() => Message.sync({ force: true }))
  .then(() =>
    Message.bulkCreate([
      {
        from: "test from 1",
        message: "message test 1",
        userId: 1,
        shopId: 2
      },
      {
        from: "test from 2",
        message: "message tes 2",
        userId: 3,
        shopId: 2
      }
    ])
  )
  .then(() => Reminder.sync({ force: true }))
  .then(() =>
    Reminder.bulkCreate([{ service: "windshield wipers", userId: 3, carId: 2 }])
  )
  .then(() => {
    console.log("Database seeded!");
    process.exit();
  })
  .catch(err => console.log("could not connect to db: ", err));
