const express = require("express");
const {
  loginUser,
  signupUser,
  getUser,
} = require("../controllers/userController");
const protect = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.get("/user", protect, getUser);

module.exports = router;
