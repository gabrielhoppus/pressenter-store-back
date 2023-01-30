import express from "express";
import { showProduct, getProducts } from "../controller/productController.js";

const productRouter = express.Router();

productRouter.get("/product/:id", showProduct);
productRouter.get("/products", getProducts)

export default productRouter;