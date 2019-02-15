const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authenticate");
const userController = require("../controllers/userController");

router.post("/register", userController.create);
router.post("/signIn", userController.signIn);
router.post("/addAltitude", authenticate, userController.addAltitude);
router.get("/getUser", authenticate, userController.getUser);

module.exports = router;
