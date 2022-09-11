
import { wifis } from "@prisma/client";

export type IWifiData = Omit<wifis, "id">;