import db from "../config/database.js";

export async function showProduct(req, res) {
  const product = req.params.id;
  const infoProduct = await db
    .collection("products")
    .findOne({ product: product });
  res.send(infoProduct);
}
