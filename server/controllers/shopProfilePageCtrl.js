const { HistoryEntry, Review, Car, Favorite } = require("../../db/index");

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
