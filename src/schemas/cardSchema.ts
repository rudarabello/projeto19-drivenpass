import joi from "joi";

const cardSchema = joi.object({
    number: joi.string().max(16).required(),
    name: joi.string().required(),
    securityCode: joi.string().min(3).max(4).required(),
    expirationDate: joi.string().max(5).required(),
    isVirtual: joi.boolean().required(),
    password: joi.string().min(4).required(),
    type: joi.string().valid("debit","credit","credit and debit").required(),
    title: joi.string().required()
});

export default cardSchema;