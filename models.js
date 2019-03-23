const pool = require('./database/postgresConnection.js');

const search = (item, callback) => {
  pool.connect((err, client, done) => {
    if (err) throw err
    client.query('SELECT bin FROM disposal WHERE item = $1', [item], (err, res) => {
      done()
      if (err) {
        callback(err);
      } else {
        callback(null, res.rows);
      }
    })
  });
}

module.exports= {search};