import express from "express";
import cors from "cors";

import routerAuthentication from "./routes/auth.routes.js";


const app = express();
app.use(express.json());
app.use(cors());

const PORT = 5000;

app.use([routerAuthentication])

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});