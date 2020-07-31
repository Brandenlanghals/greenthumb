const router = require("express").Router();
const User = require("../../models/user");

//
router.get("/getUser", function (req, res) {
  console.log("called");
  console.log(req);
  User.findById(req.user).then((dbModel) => {
    res.json(dbModel);
    console.log("---------");
    console.log(dbModel);
  });
});

//Put request for edit profile feature
router.put("/user/profile/edit", (req, res) => {
  User.findByIdAndUpdate(req.body.id, req.body)
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("err", err);
      res.json(err);
    });
});

module.exports = router;
