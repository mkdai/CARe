const axios = require("axios");
const timekit = require("timekit-sdk");
const {
  timekitApp,
  timekitEmail,
  timekitPassword
} = require("../../env/config");
const { Shop, User } = require("../../db/index.js");

timekit.configure({
  app: timekitApp,
  inputTimestampFormat: "U",
  outputTimestampFormat: "U"
}); // Timestamps coming and going to timekit sdk must be unicode

//TODO: redefine shop and user relationship to include shooopkeeeeepers

module.exports = {
  getShopId: (req, res) => {
    console.log("received request to get shop id", req.query);
    User.findOne({ where: { id: req.query.userId } })
      .then(user => {
        console.log("found user", user.dataValues.shopId);
        res.status(200).send({ shopId: user.dataValues.shopId });
      })
      .catch(err => console.log("could not find user", err));
  },

  getCalendar: (req, res) => {
    console.log("received request to get calendar");
    timekit
      .auth({ email: timekitEmail, password: timekitPassword })
      .then(() => timekit.include("attributes").getBookings())
      .then(books => {
        let bookings = [];
        books.data.forEach(booking => {
          if (!booking.completed && booking.state === "confirmed") {
            let { start, end, what } = booking.attributes.event;
            let title = what;
            bookings.push({ start, end, title });
          }
        });
        res.status(200).send(bookings);
      })
      .catch(err => console.log("could not get calendars", err));
  },

  createCalendar: (req, res) => {
    console.log("received request to create calendar");
    timekit
      .auth({ email: timekitEmail, password: timekitPassword })
      .then(() => console.log("authenticated"))
      .then(() =>
        timekit.createCalendar({
          name: "Test-Calendar-8",
          description: "testing this calendar"
        })
      )
      .then(cal => {
        console.log("created calendar", cal.data, "storing in database");
        Shop.update({ calendar_id: cal.data.id }, { where: { shopId: 1 } });
      })
      .then(() => Shop.findAll())
      .then(res => console.log("these are the shops", res))
      .catch(err => res.send("could not create calendar", err));
  },
  storeCalendar: (req, res) => {},
  deleteCalendar: () => {}
};
