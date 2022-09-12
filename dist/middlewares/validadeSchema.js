export var validateSchema = function (schema) {
    return function (req, res, next) {
        var error = schema.validate(req.body, { abortEarly: false }).error;
        if (error)
            return res.status(422)
                .send(error.details.map(function (detail) { return detail.message; }));
        next();
    };
};
