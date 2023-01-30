import Joi from "joi";
export var userSchema = Joi.object({
    userName: Joi.string().required(),
    password: Joi.string().required()
});
