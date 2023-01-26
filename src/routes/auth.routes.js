import { Router } from "express";
import { signUp } from "../controller/auth.controller.js";
import { validateSchema } from "../middleware/auth.middleware.js";
import { userSchema } from "../model/userSchema.js";

const routerAuthentication = Router()

routerAuthentication.post("/signUp",validateSchema(userSchema) ,signUp)
// routerAuthentication.post('/login',login)

export default routerAuthentication

