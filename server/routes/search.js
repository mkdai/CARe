const router = require("express").Router();
const controller = require("../controllers/searchCtrl");

router.get("/allshops", controller.getAllShops);
router.get("/getshop", controller.getShop);
module.exports = router;
