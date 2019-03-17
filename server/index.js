const express = require('express');
const app = express();
const path = require('path');
let port = 3002;

app.use(express.static(path.join(__dirname, '../client/dist/')));


app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})