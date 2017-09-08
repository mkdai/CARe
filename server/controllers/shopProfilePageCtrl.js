const { HistoryEntry, Review, Car, Favorite } = require("../../db/index");
const timekit = require("timekit-sdk");
const {
  timekitApp,
  timekitEmail,
  timekitPassword,
  timekitApiToken
} = require("../../env/config");

timekit.configure({
  app: timekitApp
});

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
    console.log("received request to get calendar bookings", req.query);

    timekit
      .auth({ email: timekitEmail, password: timekitPassword })
      .then(() =>
        timekit.findTime({
          calendar_ids: [req.query.calId],
          future: "12 hours",
          // filters: {
          //   and: [{ specific_time: { start: 9, end: 24 } }]
          // },
          length: "30 minutes"
        })
      )
      .then(response => {
        console.log("received timekit response for availaibility", response);

        res.status(200).send(response.data);
      })
      .catch(err =>
        res.status(400).send({ "error receiving timekit bookings": err })
      );
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
    }).then(rows => {
      Review.create({
        userId: req.body.userId,
        shopId: req.body.shopId,
        rating: req.body.rating,
        review: req.body.review,
        verified: !!rows.length
      }).then(() =>
        res.status(201).send("Successfully created maintenance history!")
      );
    });
  }
};
