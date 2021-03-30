const express = require('express');
const cors = require('cors');

const championRoutes = require('./routes/champion');

const DB = require('./DB/connect');

const app = express();

DB.connect();

const allowlist = ['https://listoflegends.surge.sh', 'http://localhost:3000'];

/**
 * This function allows or not cors depending on the allowlist established
 * @param {*} req 
 * @param {*} callback 
 */
const corsOptionsDelegate = (req, callback) => {
  let corsOptions;

  let isDomainAllowed = allowlist.indexOf(req.header('Origin')) !== -1;

  if (isDomainAllowed) {
      corsOptions = {
        origin: true,
        method: 'GET, POST',
      }
  } else {
      corsOptions = { origin: false }
  }
  callback(null, corsOptions)
}

app.use(cors(corsOptionsDelegate));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/champion', championRoutes);

module.exports = app;