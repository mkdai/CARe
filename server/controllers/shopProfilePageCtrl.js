const { HistoryEntry, Review, Car } = require("../../db/index");

module.exports = {
  postHistoryEntry: (req, res) => {
    HistoryEntry.create({
      date: req.body.date,
      description: req.body.description,
      mileage: req.body.mileage,
      notes: req.body.notes,
      service: req.body.service
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
