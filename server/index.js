const express = require('express');
const app = express();
const axios = require('axios');
const path = require('path');
let port = process.env.PORT;
const {whichBin} = require('../controllers.js')

app.use(express.static(path.join(__dirname, '../client/dist/')));

app.get('/recyclables/:item', whichBin);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'))
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})