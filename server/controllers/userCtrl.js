const User = require("../../db/index").User;

module.exports = {
  addUser: (req, res) => {
    User.findOrCreate({
      where: {
        email: req.body.email
      },
      defaults: { name: "Your name here" }
    })
      .then(user => {
        res.status(201).send(user);
      })
      .catch(err =>
        res.status(500).send(`Error creating/finding user! ${err}`)
      );
  }
};
