const Product = require("../models/product");

async function addProduct(req, res) {
  try {
    console.log(req.body);
    let product = req.body;
    let productExist = await Product.findOne({ name: product.name }).exec();

    if (!productExist) {
      let newProduct = new Product({
        ...product,
      });
      console.log(newProduct);
      await newProduct.save();
      return res.send("add_product_sucess!");
    } else {
      return res.send("add_product_wrong!");
    }
  } catch (err) {
    return res.status(400).send(err);
  }
}

async function deleteProduct(req, res) {
  try {
    console.log(req.params);
    let { productId } = req.params;
    let deleteProduct = await Product.deleteOne({ _id: productId }).exec();

    if (deleteProduct) {
      return res.send("delete_product_sucess!");
    } else {
      return res.send("delete_product_wrong!");
    }
  } catch (err) {
    return res.status(400).send(err);
  }
}

module.exports = { addProduct, deleteProduct };
