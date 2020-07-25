const router = require("express").Router();
const passport = require("../../config/passport");
const db = require("../../models");
const newUser = require("../../models/user");

router.post("/user/logIn", passport.authenticate("local"), function (req, res) {
  res.json(req.user);
  console.log(req.session.passport.user);
});

router.get("/test", function (req, res) {
  console.log(req.user);
  //console.log(req.session.passport);
  // newUser.findOne({ email: req.user.email }, function (err, userInfo) {
  //   res.json(userInfo);
  // });
  console.log(req.session);
});

router.post("/user/signUp", function (req, res) {
  db.User.create(req.body).then(function (dbUser) {
    req.logIn(dbUser, function (err) {
      if (err) console.log(err);
    });
    res.json(dbUser);
  });
});

router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/signin");
});

module.exports = router;
