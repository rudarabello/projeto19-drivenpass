import connection from "../database/prismaPg";
import { ISessionData } from "../types/userTypes";

export async function newSession(data: ISessionData) {
    await connection.sessions.create({ data: data });
};

export async function findSession(token: string) {
    return await connection.sessions.findFirst({ where: { token } })
}