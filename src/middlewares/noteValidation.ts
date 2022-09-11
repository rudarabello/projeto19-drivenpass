import { NextFunction, Request, Response } from "express";
import noteSchema from "../schemas/noteSchema";

export default function noteValidation(req: Request, res: Response, next: NextFunction) {
    const { error } = noteSchema.validate(req.body, { abortEarly: false });
    if (error) return res.status(422).send(error.details.map(detail => detail.message));
    next();
}