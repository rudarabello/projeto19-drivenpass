import { findUserByEmail, register } from "../repositories/userRepository";
import { newSession } from "../repositories/sessionRepository";
import { encrypt, verifyPassword } from "../utils/userUtils";
import { generateUserToken } from "../utils/userUtils";
import { checkError } from "../middlewares/errorHandler";
import { IUserData } from "../types/userTypes";
import dotenv from "dotenv";

dotenv.config();

export async function signUp(user: IUserData) {
    const { email, password } = user;

    const checkUser = await findUserByEmail(email);

    if (checkUser) throw checkError(401, "This email is already registered!");

    await register(email, encrypt(password));
}

export async function signIn(email: string, password: string) {
    const user = await findUserByEmail(email);

    if (!user) throw checkError(404, "There's no user registered with this email!");

    if (await verifyPassword(password, user.password)) throw checkError(401, "Wrong password!");

    const token: string = generateUserToken(user.id);

    const userInfo = {
        userId: user.id,
        token
    }

    await newSession(userInfo);

    return userInfo;
}