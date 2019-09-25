const express = require('express');
const app = express();
const axios = require('axios');
const path = require('path');
let port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const { whichBin, makeRecommendations } = require('./controllers.js')

app.use(express.static(path.join(__dirname, '../client/dist/')));

app.use(bodyParser.json());
app.get('/recyclables/:item', whichBin);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'))
})

app.post('/recommendations', makeRecommendations);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})