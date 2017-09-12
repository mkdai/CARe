const { HistoryEntry, Review, Car, Favorite } = require("../../db/index");
const timekit = require("timekit-sdk");
const {
  timekitApp,
  timekitEmail,
  timekitPassword,
  timekitApiToken
} = require("../../env/config");

const l = console.log;

timekit.configure({
  app: timekitApp,
  inputTimestampFormat: "U",
  outputTimestampFormat: "U"
});

timekit
  .auth({ email: timekitEmail, password: timekitPassword })
  .then(() => console.log("SProfilePageCtrl: authorized tk credentials"))
  .catch(() => console.log("SProfilePageCtrl: un-authorized tk credentials"));

module.exports = {
  postFavorite: (req, res) => {
    console.log("adding fav", req.query.userId, req.query.shopId);
    Favorite.findOrCreate({
      where: {
        userId: req.query.userId,
        shopId: req.query.shopId
      }
    }).then(() => {
      res.status(201).send();
    });
  },
  deleteFavorite: (req, res) => {
    console.log("deleting fav", req.query.userId, req.query.shopId);
    Favorite.destroy({
      where: {
        userId: req.query.userId,
        shopId: req.query.shopId
      }
    }).then(() => {
      res.status(200).send();
    });
  },

  getBookings: (req, res) => {
    console.log(
      "getBookings: received ax request to get calendar bookings",
      req.query
    );

    timekit
      .findTime({
        calendar_ids: [req.query.calId],
        future: "12 hours",
        // filters: {
        //   and: [{ specific_time: { start: 9, end: 24 } }]
        // },
        length: "30 minutes"
      })
      .then(response => {
        console.log("getBookings: received response from timekit");
        // let today = Date.now();
        // const times = response.data.map(
        //   time =>
        //     new Date(
        //       today.getYears(),
        //       today.getMonth(),
        //       today.getDate(),
        //       0,
        //       0,
        //       0,
        //       time
        //     )
        // );
        res.status(200).send(response.data);
      })
      .catch(err => res.status(400).send({ error: err }));
  },

  getAppointments: (req, res) => {
    l("received request for Appointments", req.query);
    let { id } = req.query;
    let app = timekitApp;

    res.status(200).send({ app });

    // Shop.find({ where: { id: id } })
    //   .then(shop => {
    //     let app = timekitApp;
    //     let { email, token } = shop;
    //     res.status(200).send({ app, email, token });
    //   })
    //   .catch(err => l("could not find shop to getAppointments"));
  },

  postHistoryEntry: (req, res) => {
    HistoryEntry.create({
      date: req.body.date,
      description: req.body.description,
      mileage: req.body.mileage,
      notes: req.body.notes,
      service: req.body.service,
      shopId: req.body.shopId,
      carId: req.body.carId
    })
      .then(() =>
        res.status(201).send("Successfully created maintenance history!")
      )
      .catch(err => {
        console.log("ERROR IS HERE", err);
        res.status(500).send(`Error creating maintenance history ${err}`);
      });
  },

  postReview: (req, res) => {
    HistoryEntry.findAll({
      where: {
        shopId: req.body.shopId
      },
      include: [{ model: Car, where: { userId: req.body.userId } }]
    })
      .then(rows => {
        Review.create({
          userId: req.body.userId,
          shopId: req.body.shopId,
          rating: req.body.rating,
          review: req.body.review,
          verified: !!rows.length
        });
      })
      .then(() =>
        res.status(201).send("Successfully created maintenance history!")
      )
      .catch(err => res.status(500).send("could not post to reviews"));
  }
};
