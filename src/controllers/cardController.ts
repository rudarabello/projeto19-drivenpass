import { Request, Response } from "express";
import { ICardData } from "../types/cardTypes";
import * as cardServices from "../services/cardService"

export async function createCard(req:Request, res:Response){
    let { number,
        name,
        securityCode,
        expirationDate,
        isVirtual,
        password,
        type,
        title }  = req.body;

    const { userInfo } = res.locals;

    if(isVirtual === 'true'){
        isVirtual = true;
    }else{
        isVirtual = false;
    }

    const card:ICardData = {
        number,
        name,
        securityCode,
        password,
        title,
        userId: userInfo.userId,
        expirationDate,
        isVirtual,
        type
    }

    await cardServices.createCard(card);

    return res.status(201).send("created");
};

export async function getCards(req:Request, res:Response) {
    const { userInfo } = res.locals;

    const cards = await cardServices.getCards(userInfo.userId);

    return res.status(200).send(cards);
}

export async function getCardById(req:Request, res:Response) {
    const { userInfo } = res.locals;
    const id:number = Number(req.params.id);

    const card = await cardServices.getCardById(userInfo.userId,id);

    return res.status(200).send(card);
}

export async function deleteCardById(req:Request, res:Response) {
    const { userInfo } = res.locals;
    const id:number = Number(req.params.id);

    await cardServices.deleteCardById(userInfo.userId,id);

    return res.status(200).send("Card removed!");
}