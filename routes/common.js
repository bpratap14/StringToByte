var express = require("express");
var router = express.Router();

const commonController = require("../controllers/common");

router.post("/converthtmltobytes", commonController.convertHtmlToBytes);

module.exports = router;