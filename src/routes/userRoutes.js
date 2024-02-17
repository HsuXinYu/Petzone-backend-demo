// src/routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const productController = require("../controllers/productController");

router.post("/member/signup", userController.userSingUp);

// 產品相關
router.post("/product", productController.addProduct);
router.delete("/product/:productId", productController.deleteProduct);
router.put("/product/:productId", productController.updateProduct);
router.get("/products", productController.getProducts);

module.exports = router;
