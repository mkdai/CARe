const User = require("../../db/index").User;

module.exports = {
  addUser: (req, res) => {
    User.findOrCreate({
      where: {
        email: req.body.email
      },
      defaults: {
        name: "Your name here",
        profilePic:
          "https://www.hoursproject.com/images/cache/square_thumb/images/user/default.png"
      }
    })
      .spread((user, created) => {
        if (created) {
          console.log("User created!");
        } else {
          console.log("User found!");
        }
        res.status(201).send(user);
      })
      .catch(err => {
        res.status(500).send(`Error creating/finding user! ${err}`);
      });
  }
};
