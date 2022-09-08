import { Request, Response, NextFunction } from "express";
import registerSchema from "../../schemas/registerSchema";

export default function userValidation(req:Request, res:Response, next:NextFunction){

    const { error } = registerSchema.validate(req.body, { abortEarly:false });

    if(error) return res.status(422).send(error.details.map((detail: { message: any; }) => detail.message));

    next();
}