const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: true },

  categoryId: {
    type: Number,
    min: 1,
    max: 8,
    required: true,
    //   { id: 1, type: "dog", name: "狗狗主食" },
    //   { id: 2, type: "dog", name: "狗狗零食" },
    //   { id: 3, type: "cat", name: "貓貓主食" },
    //   { id: 4, type: "cat", name: "貓貓零食" },
    //   { id: 5, type: "cat", name: "貓砂系列" },
    //   { id: 6, type: "all", name: "保健系列" },
    //   { id: 7, type: "all", name: "沐浴 & 清潔" },
    //   { id: 8, type: "dog", name: "生活用品 & 玩具" },
  },
  photos: { type: Array, default: [] },
  originPrice: { type: Number, required: true },
  price: { type: Number },
  quantity: { type: Number, required: true },
  unit: { type: String, default: "個" },
  description: { type: String },
  isEnabled: { type: Boolean, default: false },
  review: { type: Array, default: [] },
  createAt: { type: Number },
  updateAt: { type: Number },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
