import { Request, Response } from "express";
import { IWifiData } from "../types/wifiTypes";
import * as wifiServices from "../services/wifiService"

export async function createWifi(req:Request, res:Response){
    const { name,password,title } 
    : { name:string, password:string, title:string } = req.body;
    const { userInfo } = res.locals;
    const wifi:IWifiData = {
        title,
        name,
        password,
        userId: userInfo.userId
    }
    await wifiServices.createWifi(wifi);
    return res.status(201).send("Wi-fi registred!");
};

export async function getWifis(req:Request, res:Response) {
    const { userInfo } = res.locals;
    const wifis = await wifiServices.getWifis(userInfo.userId);
    return res.status(200).send(wifis);
}

export async function getWifiById(req:Request, res:Response) {
    const { userInfo } = res.locals;
    const id:number = Number(req.params.id);
    const wifi = await wifiServices.getWifiById(userInfo.userId,id);
    return res.status(200).send(wifi);
}

export async function deleteWifiById(req:Request, res:Response) {
    const { userInfo } = res.locals;
    const id:number = Number(req.params.id);
    await wifiServices.deleteWifiById(userInfo.userId,id);
    return res.status(200).send("Wi-fi removed!");
}