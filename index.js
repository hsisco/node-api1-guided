const express = require('express');
const db = require('./data/hubs-model.js');

const server = express();

server.listen(4000, () => {
  console.log('listening on port 4000...')
});

// HTTP Method
// URI : scheme://host_name:port/path?parameter_list
//       http://www.google.com/some/document?with_params=value

// server.get('/', (request, response) => {   <-- The Homies
server.get('/', (req, res) => {
  res.send('Hello World!');
})

server.get('/hey', (req, res) => {
  res.send('Hey there!');
})

server.get('/favicon.ico', (req, res) => { res.status(204) });

server.get('/hubs', (req, res) => {
  db.find()
    .then(hubs => {
      res.status(200).json({ hubs });
    })
    .catch(err => {
      res.status(500).json({ success: false, err });
    });
})