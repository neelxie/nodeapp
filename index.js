var express = require("express");
var app = express();

app.get('/', (req, res) => {
  res.send('Greatest!');
});

var port = Number(process.env.PORT || 5000);

app.listen(port, function() {
  console.log("Listening on " + port);
});

// npm i -D nodemon
// dev env to prevent reloaading our server
// create a script
// in package.json
// scripts --"start": ""node index",
//              "dev": "nodemon index" 