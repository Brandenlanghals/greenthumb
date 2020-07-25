const router = require("express").Router();
const db = require("../../models")

router.get('/user', function (req, res) {
    if (req.isAuthenticated()) {
        console.log(req.session.passport.user.id)
        db.User.findById(req.session.passport.user.id)
            .then(data => {
                res.json(data)
            })
    }
    else {
      console.log("Not Logged In")
      res.end()
    }
  });

  router.post('/user', function (req, res) {
    if (req.isAuthenticated()) {
        console.log(req.session.passport.user.id)
        db.User.findById(req.session.passport.user.id)
            .then(data => {
                res.json(data)
            })
    }
    else {
      console.log("Not Logged In")
      res.end()
    }
  });

// Get request to receive data from DB and put on Profile page
// router.get("/user/:id", function (req, res) {
//     db.User.find()
//         .then(data => {
//             res.json(data)
//         })
//         .catch(err => {
//             res.json(err)
//         })
// });

// Put request for edit profile feature
// router.put("/user/:id/edit", ({ body, params }, res) => {
//     db.User.findByIdAndUpdate(
//         params.id,
//     )
//         .then(data => res.json(data))
//         .catch(err => {
//             console.log("err", err)
//             res.json(err)
//         })
// });

module.exports = router;
