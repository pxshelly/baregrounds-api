const pool = require('../database/postgresConnection.js');

const search = (item) => {
  return new Promise((resolve, reject) => {
    pool.connect()
      .then((client) => {
        const query = `SELECT bin FROM disposal WHERE LOWER(item) LIKE $1`;
        return client
          .query(query, [`%${item.toLowerCase()}%`])
          .then((result) => {
            const rows = result.rows;
            rows.forEach((row) => {
              row.itemName = item;
            });
            resolve(rows);
            client.release();
          })
          .catch((error) => reject(error));
    });
  });
};
    
const makeRecommendations = rec => {
  console.log(rec);
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO recommendations (item, bin, method) VALUES ($1, $2, $3) RETURNING item_id';
    const params = [rec.item, rec.bin, rec.method];
    const runQuery = async function() {
      const client = await pool.connect();
      try {
        const result = await client.query(query, params);
        resolve(result.rows[0]);
      } finally {
        client.release();
      } 
    }
    runQuery()
      .catch((err) => reject(err));
  });
};

const updateRecommendations = rec => {
  return new Promise((resolve, reject) => {
    pool.connect()
      .then((client) => {
        return client
          .query('UPDATE recommendations SET item=$1, bin=$2, method=$3 WHERE item_id=$4', [rec.item, rec.bin, rec.method, rec.item_id])
          .then((result) => {
            client.release();
            resolve(result);
          })
          .catch((error) => reject(error));  
      });
  });
};
 
module.exports= { search, makeRecommendations, updateRecommendations };