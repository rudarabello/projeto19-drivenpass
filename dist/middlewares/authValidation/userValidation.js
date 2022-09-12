import registerSchema from "../../schemas/registerSchema";
export default function userValidation(req, res, next) {
    var error = registerSchema.validate(req.body, { abortEarly: false }).error;
    if (error)
        return res.status(422).send(error.details.map(function (detail) { return detail.message; }));
    next();
}
