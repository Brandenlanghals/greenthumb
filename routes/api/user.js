const router = require("express").Router();
const passport = require("passport"); 

router.post('/logIn', passport.authenticate("local"),function(req, res){
    res.json(req.user)
})










module.exports = router;