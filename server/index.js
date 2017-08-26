const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');


const app = express()
  .use(cors())
  .use(bodyParser.urlencoded({extended:true}))
  .use(bodyParser.json())
  .use(express.static(path.resolve(__dirname, '../client/public')))
  // .use('/api', routes)
const PORT = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'))
});

app.listen(PORT, err  => {
  if (err) {
    console.log(`Error connecting to server ${err}`);
  } 
  console.log(`Listening on PORT ${PORT}`);
})