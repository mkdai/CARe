const db = require("../../db/index");

module.exports = {
  updateProfile: (req, res) => {
    console.log(req.params.id);
    db.User
      .update(
        {
          name: req.body.name,
          phone: req.body.phone,
          profilePic: req.body.profilePic
        },
        { where: { id: req.params.id }, returning: true }
      )
      .then(update => {
        res.status(202).send(update);
      })
      .catch(err => {
        res.status(404).send(err);
      });
  },
  getProfile: (req, res) => {
    console.log("getting profile info");
    db.User
      .findById(req.params.id)
      .then(response => {
        res.send(response);
      })
      .catch(err => {
        if (err) {
          console.log(err);
        }
      });
  },
  getAllUserCars: (req, res) => {
    db.Car
      .findAll({
        where: {
          userId: req.params.userId
        }
      })
      .then(cars => res.status(200).send(cars))
      .catch(err => {
        console.log(`Error finding user cars! ${err}`);
        res.status(404).send(`Error finding user cars! ${err}`);
      });
  },
  getMaintenanceHistory: (req, res) => {
    db.HistoryEntry
      .findAll({
        where: {
          carId: req.params.carId
        }
      })
      .then(histories => res.status(200).send(histories))
      .catch(err => {
        console.log(`Error finding car histories! ${err}`);
        res.status(404).send(`Error finding car histories! ${err}`);
      });
  },
  addCar: (req, res) => {
    console.log("THIS IS ADDCAR REQUEST:::::", req.body);
    db.Car
      .findOrCreate({
        where: {
          userId: req.params.id,
          license: req.body.license,
          make: req.body.make,
          model: req.body.model,
          picture: req.body.uploadedFileCloudinaryUrl,
          year: req.body.year,
          mileage: req.body.mileage
        }
      })
      .then(data => {
        console.log("Successfully added car to database");
        res.status(200).send(data);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  }
};
