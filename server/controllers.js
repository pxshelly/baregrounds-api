const models = require('./models.js');
const { sanitizeRecommendation } = require('./utils');

const whichBin = (req, res) => {
  models.search(req.params.item, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(result);
    }
  })
}

const makeRecommendations = (req, res) => {
  const rec = sanitizeRecommendation(req.body, 'POST')
  if (rec) {
    models.makeRecommendations(rec)
      .then((result) => console.log(result))
      .catch((err) => res.status(500).send(err)); 
  } else {
    res.status(400).send('Invalid recommendation object. Please check documentation for required fields.');
  }
}

module.exports = {whichBin, makeRecommendations};