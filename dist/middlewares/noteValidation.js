import noteSchema from "../schemas/noteSchema";
export default function noteValidation(req, res, next) {
    var error = noteSchema.validate(req.body, { abortEarly: false }).error;
    if (error)
        return res.status(422).send(error.details.map(function (detail) { return detail.message; }));
    next();
}
