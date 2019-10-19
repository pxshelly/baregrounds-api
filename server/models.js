const pool = require('../database/postgresConnection.js');

const search = (item) => {
  return new Promise((resolve, reject) => {
    pool.connect()
      .then((client) => {
        const query = `SELECT bin FROM disposal WHERE LOWER(item) LIKE $1`;
        return Promise.all([client.query(query, [`%${item.toLowerCase()}%`]), client]);
      })
      .then(([result, client]) => {
        const rows = result.rows;

        rows.forEach((row) => {
          row.itemName = item;
        });

        resolve(rows);
        client.release();
      })
      .catch((error) => reject(error));
  });
};
    
const makeRecommendations = rec => {
  return new Promise((resolve, reject) => {
    pool.connect()
      .then((client) => {
        const query = 'INSERT INTO recommendations (item, bin, method) VALUES ($1, $2, $3) RETURNING item_id, item, bin';
        const params = [rec.item, rec.bin, rec.method];
        return Promise.all([client.query(query, params), client]);
      })
      .then(([result, client]) => {
        resolve(result.rows[0]);
        client.release();
      })
      .catch((error) => reject(error));
  });
};

const updateRecommendations = rec => {
  return new Promise((resolve, reject) => {
    pool.connect()
      .then((client) => {
        const query = 'UPDATE recommendations SET item=$1, bin=$2, method=$3 WHERE item_id=$4';
        const params = [rec.item, rec.bin, rec.method, rec.item_id];
        return Promise.all([client.query(query, params), client]);
      })
      .then(([result, client]) => {
        resolve(rec);
        client.release();
      })
      .catch((error) => reject(error));
  });
};
 
module.exports = { search, makeRecommendations, updateRecommendations };