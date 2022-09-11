
import { Request, Response } from "express";
import * as userService from "../services/userService";
import { IUserData } from "../types/userTypes";

export async function signUp(req: Request, res: Response) {
    const { email, password }: { email: string, password: string } = req.body;
    const user: IUserData = {
        email,
        password
    }
    await userService.signUp(user);
    res.status(201).send({ message: "User registered!" });
}

export async function signIn(req: Request, res: Response) {
    const { email, password }: { email: string, password: string } = req.body;
    const userInfo = await userService.signIn(email, password);
    res.status(200).send(userInfo.token);
}