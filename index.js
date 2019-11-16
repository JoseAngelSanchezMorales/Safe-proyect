
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { config } = require('./config');
const customerRoutes = require('./routes/customers');
// db
require('./lib/mongodb');

// Midellwares
app.use(morgan('dev'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Routes
customerRoutes(app);

app.listen(config.port, err => {
  if (err) { console.log(`Server error ${err}`) }
  console.log(`Listening on port ${config.port}`)
})
