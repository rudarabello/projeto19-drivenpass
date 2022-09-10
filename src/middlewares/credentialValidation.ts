import credentialSchema from "../schemas/credentialSchema";
import { Request, Response, NextFunction } from "express";

export default function credentialValidation(req:Request, res:Response, next:NextFunction){

    const { error } = credentialSchema.validate(req.body, { abortEarly:false });

    if(error) return res.status(422).send(error.details.map((detail: { message: any; }) => detail.message));

    next();
}