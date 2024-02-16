// src/models/userModel.js
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: ".env.local" });

const url = process.env.MONGODB_URI;

let db;

async function connectToMongoDB() {
  try {
    await mongoose.connect(url, { dbName: "pet-zone" }).then(() => {
      console.log("成功連結資料庫...");
    });
    // 處理後續邏輯，例如設置模型等
  } catch (error) {
    console.error("連接到 MongoDB 失敗:", error);
    // 根據您應用的需要，您可以在這裡進行重試邏輯，或者直接終止程序
    process.exit(1);
  }
}

module.exports = { connectToMongoDB };
