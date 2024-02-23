const express = require("express");
const userModel = require("./models/userModel");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();
const port = process.env.PORT || 3030;

userModel.connectToMongoDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", userRoutes, productRoutes);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
