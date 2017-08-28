const timekit = require('timekit-sdk');
const { timekitApp, timekitEmail, timekitPassword } = require('../env/config.js')

timekit.configure({ app: timekitApp })

timekit.auth({ email: timekitEmail, password: timekitPassword })
  .then(() => console.log('Successfully connected with timekit.io'))
  .catch(err => console.log('Could not connect with timekit.io', err))