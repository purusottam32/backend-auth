const express = require("express");
const { registerUser, getAllUsers, loginUser, getUserNamesAndEmails } = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/users", authMiddleware, getAllUsers); // Protected route
router.get("/admin", authMiddleware, getUserNamesAndEmails); // Protected route

module.exports = router;
