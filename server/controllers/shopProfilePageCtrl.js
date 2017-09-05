const HistoryEntry = require("../../db/index").HistoryEntry;

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
  }
};
