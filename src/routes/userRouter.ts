import { Router } from "express";
import { signIn, signUp } from "../controllers/userController";
import userValidation from "../middlewares/authValidation/userValidation";
import { validateSchema } from "../middlewares/validadeSchema";
import registerSchema from "../schemas/registerSchema";

const userRouter = Router();

userRouter.post('/sign-up', validateSchema(registerSchema), signUp);
userRouter.post('/sign-in', userValidation, signIn);

export default userRouter;