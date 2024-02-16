// src/routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/users", userController.getUserData);
router.post("/member/signup", userController.userSingUp);

module.exports = router;
