const router = require("express").Router();
const Profile = require("../../models/user")

// Get request to receive data from DB and put on Profile page
app.get("/api/user/:id", function (req, res) {
    Profile.find()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
});

// Put request for edit profile feature
app.put("/api/user/:id/edit", ({ body, params }, res) => {
    Profile.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } },
        { new: true, runValidators: true }
    )
        .then(data => res.json(data))
        .catch(err => {
            console.log("err", err)
            res.json(err)
        })
});

module.exports = router;







module.exports = router;