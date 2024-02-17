// src/routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const productController = require("../controllers/productController");
const uploadController = require("../controllers/uploadController");

router.post("/member/signup", userController.userSingUp);

// 產品相關
router.post("/product", productController.addProduct);
router.delete("/product/:productId", productController.deleteProduct);
router.put("/product/:productId", productController.updateProduct);
router.get("/products", productController.getProducts);
router.post(
  "/upload/image",
  uploadController.upload.single("file"),
  uploadController.uploadImage
);

module.exports = router;
