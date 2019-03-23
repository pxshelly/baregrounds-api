const models = require('./models.js');

const whichBin = (req, res) => {
  models.search(req.params.item, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(result);
    }
  })
}

module.exports = {whichBin};