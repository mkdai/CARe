const db = require("../../db/index");

module.exports = {
  updateProfile: (req, res) => {
    db.User
      .update(
        {
          email: req.body.email,
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
  }
};
