import express from "express"
import { loginUser,registUser } from "../controllers/userController.js"

const userRouter = express.Router()

userRouter.post("/register",registUser)
userRouter.post("login",loginUser)

export default userRouter;