import express from "express";
import { validateToken } from "../middleware/tokenMiddleware.js";
import { getCart, addToCart, removeFromCart, cartCheckout, getValue  } from "../controller/cartController.js";

const cartRouter = express.Router();

cartRouter.get("/carts", validateToken, userCart, getCart);
cartRouter.post("/carts", validateToken, userCart,  addToCart);
cartRouter.delete("/carts", validateToken, userCart, removeFromCart);
cartRouter.get("/carts/checkout", validateToken, userCart, getValue);
cartRouter.post("/carts/checkout", validateToken, userCart, cartCheckout);

export default cartRouter;