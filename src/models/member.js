const mongoose = require("mongoose");
const { Schema } = mongoose;

const memberSchema = new Schema({
  account: { type: String, required: true },
  password: { type: String, required: true },
  photo: { type: String },
  name: { type: String },
  nickName: { type: String },
  intro: { type: String, max: 200 },
  address: { type: String },
  phone: { type: String },
  historyPoints: { type: Number, default: 0, required: true },
  points: { type: Number, default: 0, required: true },
  pointsRecord: { type: Array, default: [], required: true },
  cart: { type: Array, default: [], required: true },
  permission: {
    type: String,
    default: "member",
    enum: ["member", "admin", "superuser"],
    required: true,
  },
  OAuth: {
    type: String,
    enum: ["google"],
  },
  isSignup: { type: Boolean, default: false, required: true },
  createAt: { type: Number, default: new Date().getTime(), required: true },
  updateAt: { type: Number, default: new Date().getTime(), required: true },
});

const Member = mongoose.model("Member", memberSchema);
module.exports = Member;
