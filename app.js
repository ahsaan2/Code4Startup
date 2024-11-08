// creating a server
var express = require("express");
// creating the instance of the application, this app object will be used to define the route and middleware.
var app = express();

// object message, that contains a key and the value

var messages = [
  {
    id: 1,
    name: "Ahsaan",
    content: "Go for the lunch",
    read: false,
  },
  {
    id: 2,
    name: "Aqib",
    content: "Can we have the breakfast",
    read: true,
  },
  {
    id: 3,
    name: "Amir",
    content: "I bowl fast",
    read: false,
  },
];

// send the json request
app.get("/messages", function (req, res) {
  res.json(messages);
});
// getting the message using a particular id
app.get("/messages/:id", function (req, res) {
  // get the id
  var id = parseInt(req.params.id);
  var flag = false;
  for (let index = 0; index < messages.length; index++) {
    if (messages[index].id === id) {
      //id is present
      res.json(messages[index]);
      console.log(id)
      flag = true;
      break;
    }
  }
  if (!flag) {
    res.send("We cannot find any message with this id!");
  }

  // res.send(messages)
});
// defining the route for the get method
app.get("/", function (req, res) {
  res.send("Hello World");
});
app.listen(3000, function () {
  console.log(`Server is running on http://localhost:3000`);
});
