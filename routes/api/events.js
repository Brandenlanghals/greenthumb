const router = require("express").Router();
const db = require("../../models")

// Get request to receive event data from DB and put on Profile page
router.get("/event/:id", function (req, res) {
    db.Event.find()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
});

// Put request for edit bulletin feature
router.put("/event/:id/edit", ({ body, params }, res) => {
    db.Event.findByIdAndUpdate(
        params.id,
    )
        .then(data => res.json(data))
        .catch(err => {
            console.log("err", err)
            res.json(err)
        })
});

router.post('/event',function(req, res){
    db.Event.create(req.body).then(function (dbEvent) {
        req.logIn(dbEvent, function(err) {
            if(err) console.log(err)
        })
        res.json(dbEvent)
    })
    
})


module.exports = router;