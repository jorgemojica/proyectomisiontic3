const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");
const auth = require("../middleware/auth")

router.get("/:email",auth, userController.getUser);
module.exports = router;