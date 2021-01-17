var express = require("express");
const path = require('path');

var app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

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