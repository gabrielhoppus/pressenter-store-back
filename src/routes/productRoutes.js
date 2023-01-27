import express from "express";
import { showProduct } from "../controller/productController.js";

const productRouter = express.Router();

productRouter.get("/product/:id", showProduct);

export default productRouter;