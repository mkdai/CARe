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
  }
};
