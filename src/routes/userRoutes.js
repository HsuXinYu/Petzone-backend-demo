// src/routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const productController = require("../controllers/productController");

router.post("/member/signup", userController.userSingUp);
router.post("/product", productController.addProduct);
router.delete("/product/:productId", productController.deleteProduct);

module.exports = router;
