import express from "express";
import {
  getCategories,
  showCategoryPage,
  addCategory,
  editCategory,
  deleteCategory,
} from "../controller/categoriesController.js";

const categoriesRouter = express.Router();

categoriesRouter.get("/categories", getCategories);
categoriesRouter.get("/category/:id?", showCategoryPage);
categoriesRouter.post("/admin-category", addCategory);
categoriesRouter.delete("/admin-category/:name", deleteCategory);
categoriesRouter.put("/admin-category/:name/:newName", editCategory);

export default categoriesRouter;
