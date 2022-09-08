import connection from "../database/prismaPg";

export async function register(email: string, password: string) {
    await connection.users.create({ data: { email, password } });
};

export async function findUserByEmail(email: string) {
    return await connection.users.findUnique({ where: { email } });
};