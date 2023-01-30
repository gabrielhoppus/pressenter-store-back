import express from "express";
import { validateToken } from "../middleware/tokenMiddleware.js";
import { getCart, addItem, removeFromCart, cartCheckout, getValue  } from "../controller/cartController.js";
import { userCart } from "../middleware/cartMiddleware.js"

const cartRouter = express.Router();

// cartRouter.get("/carts", validateToken, userCart, getCart);
cartRouter.post("/carts", addItem);
// cartRouter.delete("/carts", validateToken, userCart, removeFromCart);
// cartRouter.get("/carts/checkout", validateToken, userCart, getValue);
// cartRouter.post("/carts/checkout", validateToken, userCart, cartCheckout);

export default cartRouter;