const router = require("express").Router();
const controllers = require("../controllers/index");

router.get("/", controllers.selectAllData);
router.post("/add", controllers.insertData);

module.exports = router;
