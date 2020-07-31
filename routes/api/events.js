const router = require("express").Router();
const db = require("../../models");

// Get request to receive event data from DB and put on Profile page
router.get("/getEvent", (req, res) => {
  db.Event.find().then((dbModel) => {
    res.json(dbModel);
  });
});

//  Put request for edit bulletin feature
// router.put("/event/:id/edit", ({ body, params }, res) => {
//   db.Event.findByIdAndUpdate(params.id)
//     .then((data) => res.json(data))
//     .catch((err) => {
//       console.log("err", err);
//       res.json(err);
//     });
// });

router.post("/event", function (req, res) {
  db.Event.create(req.body).then(function (dbEvent) {
    res.json(dbEvent);
  });
});

router.post("/joinEvent", function (req, res) {
  console.log(req.body);
});

module.exports = router;
