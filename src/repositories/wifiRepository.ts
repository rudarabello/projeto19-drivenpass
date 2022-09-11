import connection from "../database/prismaPg";
import { IWifiData } from "../types/wifiTypes";

export async function insert(wifi: IWifiData) {
    await connection.wifis.create({ data: wifi });
}

export async function getMyWifis(userId: number) {
    return await connection.wifis.findMany({ where: { userId } });
}

export async function getMyWifiById(id: number) {
    return await connection.wifis.findFirst({ where: { id } });
}

export async function deleteWifiById(id: number) {
    await connection.wifis.delete({ where: { id } });
}