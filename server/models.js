const pool = require('../database/postgresConnection.js');

const search = (item, callback) => {
  pool.connect((err, client, done) => {
    if (err) throw err
    const query = `SELECT bin FROM disposal WHERE LOWER(item) LIKE '%$1%'`;
    client.query(query, [item.toLowerCase()], (err, res) => {
      done()
      if (err) {
        callback(err);
      } else {
        const rows = res.rows;
        for (let i = 0; i < rows.length; i++) {
          rows[i] = {
            itemName: item,
            bin: rows[i].bin
          };
        }
        callback(null, rows);
      }
    })
  });
};

const makeRecommendations = rec => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO recommendations (item, bin, method) VALUES ($1, $2, $3)';
    const params = [rec.item, rec.bin, rec.method];
    const runQuery = async function() {
      const client = await pool.connect();
      try {
        const result = await client.query(query, params);
        resolve(results.rows);
      } finally {
        client.release();
      } 
    }
    runQuery()
      .catch((err) => reject(err));
  });
};

module.exports= {search, makeRecommendations};