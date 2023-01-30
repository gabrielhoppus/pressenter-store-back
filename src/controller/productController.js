import db from "../config/database.js";

export async function showProduct(req, res) {
  const product = req.params.id;
  const infoProduct = await db
    .collection("products")
    .findOne({ product: product });
  res.send(infoProduct);
}

export async function showAllProducts(req, res) {
  try {
    const findProducts = await db.collection("products").find({}).toArray();
    res.send(findProducts);
  } catch (error) {
    res.status(500).send(error.message);
  } 
}

export async function addProduct(req, res) {
  const { product, price, discountPrice, description, img, category } =
    req.body;

  try {
    const duplicateProduct = await db
      .collection("products")
      .findOne({ product });
    if (duplicateProduct) return res.status(409).send("Produto já existe!");

    await db
      .collection("products")
      .insertOne({ product, price, discountPrice, description, img, category });
    const findProducts = await db.collection("products").find({}).toArray();
    const allProducts = findProducts.map((p) => p.product);
    res.send(allProducts.sort());
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function deleteProduct(req, res){
  const { product } = req.params;
  try {
    await db.collection("products").deleteOne({ product });
    res.status(202)
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function editProduct(req, res){

}