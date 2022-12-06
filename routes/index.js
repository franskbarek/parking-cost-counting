const router = require("express").Router();
const controllers = require("../controllers/index");

router.get("/", controllers.renderAllData);
router.get("/form", controllers.renderInsertFormPage);
router.post("/form", controllers.insertDataAndRedirect);

module.exports = router;
