import joi from "joi";
var registerSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(10).required()
});
export default registerSchema;
