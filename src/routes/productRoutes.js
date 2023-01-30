import express from "express";
import {
  showProduct,
  addProduct,
  showAllProducts,
  deleteProduct
} from "../controller/productController.js";


const productRouter = express.Router();

productRouter.get("/product/:product", showProduct);
productRouter.get("/product", showAllProducts);
productRouter.post("/admin-product", addProduct);
productRouter.delete("/admin-product/:product", deleteProduct);


export default productRouter;
