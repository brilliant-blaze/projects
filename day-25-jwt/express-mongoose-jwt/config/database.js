// require('dotenv').config()
const mongoose = require('mongoose');

const URI = 'mongodb://localhost/school'

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

module.exports = db