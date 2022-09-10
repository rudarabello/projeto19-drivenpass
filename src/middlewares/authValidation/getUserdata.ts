import { Request, Response, NextFunction } from "express";
import { findSession } from "../../repositories/sessionRepository";
import { checkError } from "../errorHandler";

export default async function getUserData(req:Request, res:Response, next:NextFunction){
    const token = req.headers['x-api-key']?.toString();
    if(!token) throw checkError(401, "You must send authorization token!");
    const session = await findSession(token);
    if(!session) throw checkError(401, "This token is invalid or has expired!");
    const userInfo = {
        token,
        userId: session.userId
    };
    res.locals.userInfo = userInfo;
    
    next();
}