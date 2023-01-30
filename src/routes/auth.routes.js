import { Router } from "express";
import { signUp, signIn, logOut } from "../controller/auth.controller.js";
import { validateSchema } from "../middleware/auth.middleware.js";
import { userSchema, loginSchema } from "../model/userSchema.js";
import { validateToken } from "../middleware/tokenMiddleware.js";

const routerAuthentication = Router()

routerAuthentication.post("/signUp",validateSchema(userSchema) ,signUp)
routerAuthentication.post('/signIn',validateSchema(loginSchema), signIn)
routerAuthentication.delete("sessions", validateToken, logOut)

export default routerAuthentication

