import express from "express";
import { getCategories, showCategoryPage } from "../controller/categoriesController.js";

const categoriesRouter = express.Router();

categoriesRouter.get("/categories", getCategories);
categoriesRouter.get("/category/:id?", showCategoryPage);

export default categoriesRouter;
