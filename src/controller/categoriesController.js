import db from "../config/database.js";

export async function getCategories(req, res){
  const findCategories = await db.collection("categories").find({}).toArray()
  const allCategories = findCategories.map((c)=>c.name)
  res.send(allCategories.sort())
}

export async function showCategoryPage(req, res){
  const category = req.params.id
  const categoryProducts = await db.collection("products").find({category:category}).toArray()
  res.send(categoryProducts)
}