import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

export function encrypt(password: string) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

export async function verifyPassword(password: string, hash: string) {
    const match = await bcrypt.compare(password, hash);
    return !match;
}

export const generateUserToken = (userId:number) => {
    return jwt.sign({userId}, String(process.env.JWT_SECRET), { expiresIn: '24h' });
}