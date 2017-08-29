require('jquery');
const timekit = require('timekit-sdk');
const { timekitApp, timekitEmail, timekitPassword } = require('../env/config.js')


const { 
  getCalendars,
  getCalendar,
  createCalendar,
  deleteCalendar,
  updateCalendar,

  getEvents,
  getEvent,
  createEvent,
  updateEvent,

  findTime,
  findTimeBulk,
  findTimeTeam,
  createFindTimeFilterCollection,
  getFindTimeFilterCollections,
  updateFindTimeFilterCollection,

  getBookings,
  getBooking,
  createBooking,
  updateBooking,
  getGroupBookings,
  getGroupBooking,

  getWidgets,
  getWidget,
  getHostedWidget,
  getEmbedWidget,
  createWidget,
  updateWidget,
  deleteWidget,
} = timekit;

// let myCalendar;
// let start = '2017-08-28T16:34:18-0700';
// console.log('this is the start date', start)
// let end = '2017-08-28T17:23:06-0700';
// timekit.configure({ app: timekitApp })

// timekit.auth({ email: timekitEmail, password: timekitPassword })
//   .then(() => console.log('1: Successfully connected with timekit.io'))
//   .then(getCalendars)
//   .then(res => console.log('2: here are your calendars', res.data))
//   .then(() => createCalendar({ name: 'test1', description: 'tester calendar' }))
//   .then((res) => myCalendar = res.data)
//   .then(() => console.log('3: this is myCalendar', myCalendar))
//   .then(res => deleteCalendar({ id: myCalendar.id }))
//   .then(getCalendars)
//   .then(res => console.log('4: these are your calendars', res.data))
  // .then(() => createBooking({
  //   graph: 'instant',
  //   action: 'confirm',
  //   event: {
  //     start: start,
  //     end: end,
  //     what: 'test booking1',
  //     where: 'hack reactor',
  //     calendar_id: '9aefc3b5-f55b-4f41-afd2-ccb2829fdfc8',
  //     description: 'this is the test description'
  //   },
  //   customer: {
  //     name: 'test customer1',
  //     email: 'coffeeequalsgood@gmail.com',
  //     phone: '(626) 354-8475',
  //     voip: 'customer1',
  //     timezone: 'America/Los_Angeles'
  //   }
  // }))
  // .then(res => console.log('successfully placed book request', res.data))
  // .then(() => getBooking({
  //   id: '3c776467-bd75-4dfe-8e63-d4bcc3c1de8d'
  // }))
  // .then(getBookings)
  // .then(res => console.log('here are your bookings', res.data))
  // .then(() => findTime({ calendar_ids: ['9aefc3b5-f55b-4f41-afd2-ccb2829fdfc8']}))
  // .then(res => console.log('these are the available times', res.data))
  // .then(() => getEvents({ start: '2017-08-28T16:34:18-0700', end: '2017-08-28T17:23:06-0700'}))
  // .then(res => console.log('these is the events', res.data))
  // .catch(err => console.log('Could not connect with timekit.io', err.data))