const axios = require("axios");
const timekit = require("timekit-sdk");
const {
  timekitApp,
  timekitEmail,
  timekitPassword
} = require("../../env/config");
const { Shop, User } = require("../../db/index.js");

function l(...props) {
  console.log(...props);
}

timekit.configure({
  app: timekitApp,
  inputTimestampFormat: "U",
  outputTimestampFormat: "U"
}); // Timestamps coming and going to timekit sdk must be unicode

timekit
  .auth({ email: timekitEmail, password: timekitPassword })
  .then(() => console.log("ShopDashCtrl: authorized tk credentials"))
  .catch(err => console.log("ShopDashCtrl: unauthorized tk credentials"));

//TODO: redefine shop and user relationship to include shooopkeeeeepers

module.exports = {
  getShopId: (req, res) => {
    console.log("received request to get shop id. USER ID: ", req.query);
    User.find({ where: { id: req.query.userId } })
      .then(user => {
        console.log("getShopId --> found user", user.dataValues);
        res.status(200).send({ shopId: user.dataValues.shopId });
      })
      .catch(err => res.status(400).send(`could not find user ${err}`));
  },

  getCalId: (req, res) => {
    console.log("request has been received for calId", req.query);
    Shop.findOne({ where: { id: req.query.shopId } })
      .then(shop => {
        console.log("found shopId:", shop.dataValues);
        res.status(200).send({ calId: shop.dataValues.calendar_id });
      })
      .catch(err => console.log("could not find shop", err));
  },

  getCalendar: (req, res) => {
    console.log("received request to get calendar", req.query);
    timekit
      .include("attributes", "calendar")
      .getBookings()
      .then(books => {
        let bookings = [];
        bookings.action = "bookings request for ShopDashboard";
        books.data.forEach(booking => {
          if (
            !booking.completed &&
            !!booking.calendar &&
            booking.calendar.id === req.query.id &&
            booking.state === "confirmed"
          ) {
            let { start, end, what } = booking.attributes.event;
            let title = what;
            bookings.push({ start, end, title });
          }
        });
        res.status(200).send(bookings);
      })
      .catch(err => res.status(400).send("could not get calendar" + err));
  },

  createCalendar: (req, res) => {
    l(`received create calendar request`, req.body);
    let { shopName, shopDescription, id } = req.body;
    const cal = {};
    timekit
      .createCalendar({
        name: shopName,
        description: shopDescription
      })
      .then(tk => {
        l(`created tk calendar updating db with cal_id`);
        cal.calId = tk.data.id;
        Shop.update({ calendar_id: tk.data.id }, { where: { id } });
      })
      .then(() => {
        cal.action = "updated db with calendar id";
        res.status(201).send(cal);
      })
      .then(() => l("sent shop calendar_id to front end"))
      .catch(err => {
        l("error creating calendar", err);
        res.status(400).send("could not create calendar" + err);
      });
  },

  deleteCalendar: () => {}
};
