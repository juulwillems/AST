var express = require('express');
var app = express ();
app.use(express.static(_dirname + '/public'));
app listen (process.env.PORT || 3000);
console.log("server is listening on port 3000")
