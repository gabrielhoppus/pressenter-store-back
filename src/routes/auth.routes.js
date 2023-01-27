import { Router } from "express";
import { signUp, signIn } from "../controller/auth.controller.js";
import { validateSchema } from "../middleware/auth.middleware.js";
import { userSchema, loginSchema } from "../model/userSchema.js";

const routerAuthentication = Router()

routerAuthentication.post("/signUp",validateSchema(userSchema) ,signUp)
routerAuthentication.post('/signIn',validateSchema(loginSchema), signIn)

export default routerAuthentication

