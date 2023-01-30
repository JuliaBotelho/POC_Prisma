import Joi from "joi";
export var movieSchema = Joi.object({
    movie: Joi.string().required(),
    availableOn: Joi.string().required(),
    genre: Joi.string().valid('romance', 'terror', 'suspense', 'comedia', 'aventura').required()
});
