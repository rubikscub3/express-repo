var express=require('express');
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");

var app=express();

app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use('/public/uploads',express.static(__dirname + '/public/uploads'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



routes(app);

var server = app.listen(3000, function () {
    console.log("app running on port.", server.address().port);
})