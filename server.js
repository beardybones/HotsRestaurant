// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();

var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [
  {
    name: 'joe blow',
    phone: '555-5555',
    email: 'a;dkfja@al;dkfj',
    uniqueID: '1'

},{
  name: 'joe blow',
  phone: '555-5555',
  email: 'a;dkfja@al;dkfj',
  uniqueID: '2'

},{
  name: 'joe blow',
  phone: '555-5555',
  email: 'a;dkfja@al;dkfj',
  uniqueID: '3'

},{
  name: 'joe blow',
  phone: '555-5555',
  email: 'a;dkfja@al;dkfj',
  uniqueID: '4'

},{
  name: 'joe blow',
  phone: '555-5555',
  email: 'a;dkfja@al;dkfj',
  uniqueID: '5'

}
];
var waitlist = [
  {
    name: 'joe blow',
    phone: '555-5555',
    email: 'a;dkfja@al;dkfj',
    uniqueID: '6'
},

];

  // Basic route that sends the user first to the AJAX Page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });

  app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
  });

  app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
  });



  app.get("/api/:urlInput", function(req, res) {
    var chosen = req.params.urlInput;
  
    console.log(chosen);
  
    for (var i = 0; i < reservations.length; i++) {
      if (chosen === reservations[i].routeName) {
        return res.json(reservations[i]);
      }
    }
  
    return res.json(false);
  });

  // Create New Characters - takes in JSON input
  app.post("/api/reservations", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newReservation.name = newReservation.name.replace(/\s+/g, "").toLowerCase();
    newReservation.phone = newReservation.name.replace(/\s+/g, "").toLowerCase();
    newReservation.email = newReservation.name.replace(/\s+/g, "").toLowerCase();
    newReservation.uniqueID = newReservation.name.replace(/\s+/g, "").toLowerCase();
    console.log(newReservation);
  
    reservations.push(newReservation);
  
    res.json(newReservation);
  });








  






  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  