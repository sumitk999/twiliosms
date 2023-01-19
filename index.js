const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/route')
require('dotenv').config()
// require('./db-config')
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const port = 3000;

app.use('/',routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});