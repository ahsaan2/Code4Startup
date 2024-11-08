// creating a server
var express = require("express");
// creating the instance of the application, this app object will be used to define the route and middleware.
var app = express();
// defining the route for the get method
app.get("/", function (req, res) {
  res.send("Hello World");
});
app.listen(3000, function() {
    console.log(`Server is running on http://localhost:3000`);
});