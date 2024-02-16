const userModel = require("../models/userModel2");
const Member = require("../models/member");

async function getUserData(req, res) {
  try {
    const data = await userModel.getUsers("test");
    res.json(data);
  } catch (error) {
    res.status(500).send(error);
  }
}

//測試寫入
async function userSingUp(req, res) {
  try {
    console.log(req.body);
    let { account, password } = req.body;
    let userExist = await Member.findOne({ account }).exec();

    if (!userExist) {
      let newMumber = new Member({
        account,
        password,
      });
      await newMumber.save();
      return res.send("sign_up_ok!");
    } else {
      return res.send("sign_up_wrong!");
    }
  } catch (err) {
    return res.status(400).send(err);
  }
}

module.exports = { getUserData, userSingUp };
