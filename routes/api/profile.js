const router = require("express").Router();
const db = require("../../models");
const User = require("../../models/user")
router.get("user/profile", function (req, res) {
  if (req.user) {
    User.findById(req.user)
    .then((dbModel) => res.json(dbModel))
  }
});

router.post("/user", function (req, res) {
  if (req.isAuthenticated()) {
    console.log(req.session.passport.user._id);
    db.User.findById(req.session.passport.user._id).then((data) => {
      res.json(data);
    });
  } else {
    console.log("Not Logged In");
    res.end();
  }
});

// //Get request to receive data from DB and put on Profile page
// router.get("/user/:id", function (req, res) {
//   db.User.find()
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// router.route("user/:id/").get((req, res) => {
//   let userID = req.params.id;
//   db.getDB()
//     .collection("greenthumb")
//     .find({ _id: db.userID })
//     .toArray((err, docs) => {
//       if (err) console.log(err);
//       else {
//         console.log(docs);
//         res.json(docs);
//       }
//     });
// });
// router.route("user/:id/edit").put((req, res) => {
//   const userID = req.params.id;
//   db.getDB()
//     .collection("greenthumb")
//     .updateOne({ _id: db.userID }, { returnOrignal: false }, (err, docs) => {
//       if (err) console.log(err);
//       else res.json(docs);
//     });
// });
// // Put request for edit profile feature
// // router.put("/user/:id/edit", ({ body, params }, res) => {
// //   db.User.findByIdAndUpdate(params.id)
// //     .then((data) => res.json(data))
// //     .catch((err) => {
// //       console.log("err", err);
// //       res.json(err);
// //     });
// // });

module.exports = router;
