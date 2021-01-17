var express = require("express");
const path = require('path');
const members = require('./Members');

const app = express();



// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

app.get('api/members', (req, res) => {
    res.json(members);
});

app.use(express.static(path.join(__dirname, 'public')));

var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log("Listening on " + port);
});

// npm i -D nodemon
// dev env to prevent reloaading our server
// create a script
// in package.json
// scripts --"start": ""node index",
//              "dev": "nodemon index" 
//npm run dev