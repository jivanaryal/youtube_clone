const express = require("express");
const router = express.Router();
const {
  RegisterLoginController,
  getLoginController,
  deleteLoginController,
  userLoginController,
  verifyUser,
} = require("../controller/login");
router.post("/register", RegisterLoginController);
router.post("/", userLoginController);
router.get("/", getLoginController);
router.delete("/:id", deleteLoginController);
router.get("/", verifyUser);
module.exports = router;
