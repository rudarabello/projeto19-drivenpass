
import { Router } from "express";
import * as credentialController from "../controllers/credentialController";
import getUserData from "../middlewares/authValidation/getUserdata";
import { validateSchema } from "../middlewares/validadeSchema";
import credentialSchema from "../schemas/credentialSchema";

const credentialRouter = Router();

credentialRouter.post(
    "/categories/credentials/create",
    validateSchema(credentialSchema),
    getUserData,
    credentialController.createCredential
);
credentialRouter.get(
    "/credentials",
    getUserData,
    credentialController.getCredentials
);
credentialRouter.get(
    "/credentials/:id",
    getUserData,
    credentialController.getCredentialById
);
credentialRouter.delete(
    "/credentials/delete/:id",
    getUserData,
    credentialController.deleteCredentialById
);

export default credentialRouter;