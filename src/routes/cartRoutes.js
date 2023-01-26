import express from "express";
import { validateToken } from "../middleware/tokenMiddleware.js";
import { getCart, addItem, deleteItem } from "../controller/cartController.js";

const cartRouter = express.Router();

cartRouter.get("/carts", validateToken, getCart);
cartRouter.post("/carts", validateToken, addItem);
cartRouter.delete("/carts", validateToken, deleteItem);

export default cartRouter;