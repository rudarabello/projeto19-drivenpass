import { sessions,users } from "@prisma/client"

export type ISessionData = Omit<sessions, "id">;

export type IUserData = Omit<users, "id">;