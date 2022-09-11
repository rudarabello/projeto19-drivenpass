import { ICardData } from "../types/cardTypes";
import * as cardMethods from "../repositories/cardRepository";
import { checkError } from "../middlewares/errorHandler";
import { encrypt,decrypt } from "../utils/credentialUtils";

export async function createCard(card:ICardData) {
    const checkCard = await cardMethods.findByTitle(card.title,card.userId);
    if(checkCard) throw checkError(401,"You already registered a card with this title!");
    card.password = encrypt(card.password);
    card.securityCode = encrypt(card.securityCode);
    await cardMethods.insert(card)
}

export async function getCards(userId:number) {
    const cards = await cardMethods.getMyCards(userId);

    cards.forEach(card => {
        card.password = decrypt(card.password);
        card.securityCode = decrypt(card.securityCode);
    });

    return cards;
}

export async function getCardById(userId:number,id:number) {
    const card = await cardMethods.getMyCardById(id);

    if(!card) throw checkError(404,"There's no card registered with this ID");
    if(card.userId !== userId) throw checkError(401,"This card doesn't belong to you!");
    
    card.password = decrypt(card.password);
    card.securityCode = decrypt(card.securityCode);

    return card;
}

export async function deleteCardById(userId:number,id:number) {
    const card = await cardMethods.getMyCardById(id);

    if(!card) throw checkError(404,"There's no card registered with this ID");
    if(card.userId !== userId) throw checkError(401,"This card doesn't belong to you!");
    
    await cardMethods.deleteCardById(id);
}