import express from "express";
import {
  showProduct,
  addProduct,
  showAllProducts,
  deleteProduct,
  editProduct,
} from "../controller/productController.js";

const productRouter = express.Router();

productRouter.get("/product/:id", showProduct);
productRouter.get("/product", showAllProducts);
productRouter.post("/admin-product", addProduct);
productRouter.delete("/admin-product/:product", deleteProduct);
productRouter.put("/admin-product/:product", editProduct);

export default productRouter;
