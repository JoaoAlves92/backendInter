import { Router } from "express";
import { UserController } from "../resources/user/user.controllers";

const userRouter = Router();
const userController = new UserController();

userRouter.post('/signin', userController.signIn)
userRouter.post('/signup', userController.signUp)
userRouter.post('/me', userController.meUser)

export default userRouter;