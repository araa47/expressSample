const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Combine endpoint that reads json post data from body and returns another json
app.post("/combine", (req, res) => {
  // get firstName and lastName
  firstName = req.body.firstName;
  lastName = req.body.lastName;
  // combine to fullName
  fullName = firstName + " " + lastName;
  // return json
  res.send({ fullName: fullName });
});

app.get("/nameentry", (req, res) => {
  // return the nameEntry.html form (post action is coded in html form)
  res.sendFile(path.join(__dirname + "/nameEntry.html"));
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
