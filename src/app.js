import express from "express";
import cors from "cors";
import routerAuthentication from "./routes/auth.routes.js";
import categoriesRouter from "./routes/categoriesRoutes.js";
import productRouter from "./routes/productRoutes.js";

export const app = express();
app.use(express.json());
app.use(cors());

app.use(routerAuthentication)
app.use(categoriesRouter)
app.use(productRouter)
