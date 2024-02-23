const express = require("express");
const db = require("./configs/dbConnect");
const productRoutes = require("./routes/productRoutes");

db.connectToMongoDB();
const app = express();
const port = process.env.PORT || 3030;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", productRoutes);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
