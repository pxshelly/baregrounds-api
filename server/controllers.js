const { search, makeRecommendations, updateRecommendations } = require('./models.js');
const { sanitizeRecommendation } = require('./utils');

const whichBin = (req, res) => {
  search(req.params.item)
    .then((result) => res.status(200).send(result))
    .catch((error) => res.status(400).send(error));
}

const postRecommendations = (req, res) => {
  const rec = sanitizeRecommendation(req.body, 'POST')
  console.log(rec);
  if (rec) {
    makeRecommendations(rec)
      .then((result) => res.status(201).send(result))
      .catch((err) => {
        res.status(500).send(err)
      }); 
  } else {
    res.status(400).send('Invalid recommendation object. Please check documentation for required fields.');
  }
}

const putRecommendations = (req, res) => {
  const rec = sanitizeRecommendation(req.body, 'PUT');
  updateRecommendations(rec)
    .then((result) => res.status(201).send(result))
    .catch((error) => res.status(500).send(error));
};

module.exports = { whichBin, postRecommendations, putRecommendations };