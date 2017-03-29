var app = require('express')();
var http = require('http').Server(app);
var colors = require('colors');

app.get('/', function (req, res) {
    var date = new Date();
    res.sendFile(__dirname + "/index.html");
    console.log("ALERT ".red +  "Somebody connected!");
    console.log("IP: " + req.client.remoteAddress);
    console.log("Time: " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds())
});

http.listen(3000, function () {

});


