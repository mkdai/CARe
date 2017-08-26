const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const routes = require('./routes/index');
const PORT = 3000;

const app = express()
  .use(cors())
  .use(bodyParser.urlencoded({extended:true}))
  .use(bodyParser.json())
  .use(express.static(path.resolve(__dirname, '../client/public')))
  .use('/api', routes)
  

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'))
});

app.listen(PORT, err  => {
  if (err) {
    console.log(`Error connecting to server ${err}`);
  } 
  console.log(`Listening on PORT ${PORT}`);
})