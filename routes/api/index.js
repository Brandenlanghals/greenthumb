const Events = require("./events");
const Profile = require("./profile");
const User = require("./user");
const router = require("express").Router();

router.use(Events);
router.use(Profile);
router.use(User);



module.exports = router;