import express from "express";
import cors from "cors";
import routerAuthentication from "./routes/auth.routes.js";

export const app = express();
app.use(express.json());
app.use(cors());

app.use(routerAuthentication)

