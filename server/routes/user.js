const router = require("express").Router();
const controller = require("../controllers/userCtrl");

router.post("/adduser", controller.addUser);

module.exports = router;
