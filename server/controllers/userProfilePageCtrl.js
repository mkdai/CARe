const db = require("../../db/index");

module.exports = {
  updateProfile: (req, res) => {
    //console.log(req.params.id);
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
    //console.log("getting profile info");
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
    //console.log("THIS IS ADDCAR REQUEST:::::", req.body);
    db.Car
      .findOrCreate({
        where: {
          //userId: null,
          license: req.body.license,
          make: req.body.make,
          model: req.body.model,
          year: req.body.year
        },
        defaults: {
          userId: req.params.id,
          picture: req.body.uploadedFileCloudinaryUrl,
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
  },
  getUserFavorites: (req, res) => {
    //console.log("THIS IS USERFAVS", req);
    db.Favorite
      .findAll({
        where: {
          userId: req.params.id
        }
      })
      .then(data => {
        console.log("successfully fetched all favorites");
        res.status(200).send(data);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  },
  getUserReviews: (req, res) => {
    console.log("THIS IS USERREVIEWS", req);
    // db.Review
    //   .findAll({
    //     where: {
    //       userId: req.params.id
    //     }
    //   })
    //   .then(data => {
    //     console.log("Successfully fetched all reviews");
    //     res.status(200).send(data);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //     res.status(500).send(err);
    //   });
  },
  getAllReviews: (req, res) => {
    db.Review
      .findAll({
        where: {
          userId: req.params.userId
        }
      })
      .then(reviews => res.status(200).send(reviews))
      .catch(err => {
        console.log(`Error finding user reviews! ${err}`);
        res.status(404).send(`Error finding user reviews! ${err}`);
      });
  },
  getUserReminders: (req, res) => {
    //console.log("THIS IS USERREMINDERS:", req);
    db.Reminder
      .findAll({
        where: {
          carId: req.params.id
        }
      })
      .then(data => {
        console.log("Successfully fetched all reminders");
        res.status(200).send(data);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  },
  createReminder: (req, res) => {
    //console.log("THIS IS CREATEREMINDER REQ.params", req.params);
    //console.log("THIS IS CREATEREMINDER REQ.body", req.body.input);
    db.Reminder
      .create({
        userId: req.body.userId,
        service: req.body.input,
        carId: req.params.id
      })
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => {
        console.log(err);
      });
  },
  deleteReminder: (req, res) => {
    //console.log("THIS IS DELETEREMINDER REQ.params", req.params);
    db.Reminder
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(data => {
        res.sendStatus(200).send(data);
      })
      .catch(err => {
        res.sendStatus(500).send(err);
      });
  },
  updateMileage: (req, res) => {
    db.Car
      .update(
        {
          mileage: req.body.mileage
        },
        { where: { id: req.params.id }, returning: true }
      )
      .then(data => {
        res.sendStatus(200).send(data);
      })
      .catch(err => {
        res.sendStatus(500).send(err);
      });
  },
  deleteCar: (req, res) => {
    db.Car
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(data => {
        res.sendStatus(200).send(data);
      })
      .catch(err => {
        res.sendStatus(500).send(err);
      });
  }
};
