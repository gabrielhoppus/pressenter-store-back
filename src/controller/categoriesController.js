import db from "../config/database.js";

export async function getCategories(req, res) {
  const findCategories = await db.collection("categories").find({}).toArray();
  const allCategories = findCategories.map((c) => c.name);
  res.send(allCategories.sort());
}

export async function showCategoryPage(req, res) {
  const category = req.params.id;
  const categoryProducts = await db
    .collection("products")
    .find({ category: category })
    .toArray();
  res.send(categoryProducts);
}

export async function addCategory(req, res) {
  const { name } = req.body;

  try {
    const duplicateCategory = await db
      .collection("categories")
      .findOne({ name });
    if (duplicateCategory) return res.status(409).send("Categoria já existe!");

    await db.collection("categories").insertOne({ name });
    const findCategories = await db.collection("categories").find({}).toArray();
    const allCategories = findCategories.map((c) => c.name);
    res.send(allCategories.sort());
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function editCategory(req, res) {}

export async function deleteCategory(req, res) {
  const { name } = req.params;

  try {
    await db.collection("categories").deleteOne({ name });
    res.status(202)
  } catch (error) {
    res.status(500).send(error.message);
  }
}
