import { Router } from "express";
import {signUp, signIn} from "../controllers/userController";
import userValidation from "../middlewares/authValidation/userValidation";

const userRouter = Router();

userRouter.post('/sign-up', userValidation, signUp);
userRouter.post('/sign-in', userValidation, signIn);

export default userRouter;