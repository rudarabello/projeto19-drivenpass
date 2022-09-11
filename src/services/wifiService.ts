import { IWifiData } from "../types/wifiTypes";
import * as wifiMethods from "../repositories/wifiRepository";
import { checkError } from "../middlewares/errorHandler";
import { encrypt, decrypt } from "../utils/credentialUtils";

export async function createWifi(wifi: IWifiData) {
    wifi.password = encrypt(wifi.password);
    await wifiMethods.insert(wifi);
}

export async function getWifis(userId: number) {
    const wifis = await wifiMethods.getMyWifis(userId);
    wifis.forEach((wifi: { password: string; }) => wifi.password = decrypt(wifi.password));
    return wifis;
}

export async function getWifiById(userId: number, id: number) {
    const wifi = await wifiMethods.getMyWifiById(id);
    if (!wifi) throw checkError(404, "There's no wifi registered with this ID");
    if (wifi.userId !== userId) throw checkError(401, "This wifi doesn't belong to you!");
    wifi.password = decrypt(wifi.password);
    return wifi;
}

export async function deleteWifiById(userId: number, id: number) {
    const wifi = await wifiMethods.getMyWifiById(id);
    if (!wifi) throw checkError(404, "There's no wifi registered with this ID");
    if (wifi.userId !== userId) throw checkError(401, "This wifi doesn't belong to you!");
    await wifiMethods.deleteWifiById(id);
}