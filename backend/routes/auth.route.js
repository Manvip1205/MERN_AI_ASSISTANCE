import express from "express"
import { Login, logOut, signUp } from "../controllers/auth.controller.js"

const authRouter = express.Router()

authRouter.post("/signUp",signUp)
authRouter.post("/login",Login)
authRouter.get("Logout",logOut)

export default authRouter