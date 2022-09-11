import connection from "../database/prismaPg";
import { ICardData } from "../types/cardTypes";

export async function insert(card: ICardData) {
    await connection.cards.create({ data: card });
}

export async function findByTitle(title: string, userId: number) {
    return await connection.cards.findFirst({ where: { title, userId } });
}

export async function getMyCards(userId: number) {
    return await connection.cards.findMany({ where: { userId } });
}

export async function getMyCardById(id: number) {
    return await connection.cards.findFirst({ where: { id } });
}

export async function deleteCardById(id: number) {
    await connection.cards.delete({ where: { id } });
}