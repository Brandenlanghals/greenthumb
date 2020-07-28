const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
const passport = require("./config/passport");
const routes = require("./routes");
const db = require("./models");

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/greenthumb");

//Passport
var session = require("express-session"),
  bodyParser = require("body-parser"),
  cookieParser = require("cookie-parser");
const MongoStore = require("connect-mongo")(session);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

//session storage
app.use(
  session({
    secret: "cats",
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    resave: false, //required
    saveUninitialized: false, //required
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)

// Define API routes here
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
