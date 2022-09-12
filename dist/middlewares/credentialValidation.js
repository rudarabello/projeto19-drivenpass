import credentialSchema from "../schemas/credentialSchema";
export default function credentialValidation(req, res, next) {
    var error = credentialSchema.validate(req.body, { abortEarly: false }).error;
    if (error)
        return res.status(422).send(error.details.map(function (detail) { return detail.message; }));
    next();
}
