const axios = require("axios");
const timekit = require("timekit-sdk");
const {
  timekitApp,
  timekitEmail,
  timekitPassword
} = require("../../env/config");

timekit.configure({
  app: timekitApp,
  inputTimestampFormat: "U",
  outputTimestampFormat: "U"
}); // Timestamps coming and going to timekit sdk must be unicode

module.exports = {
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
        console.log("created calendar", cal.data);
        res.status(201).send(cal.data);
      })
      .catch(err => console.log("could not create calendar", err));
  },
  updateCalendar: () => {},
  deleteCalendar: () => {}
};
