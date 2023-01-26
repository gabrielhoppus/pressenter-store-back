import Joi from "joi";

export const cartSchema = Joi.object({
    price: Joi.string().replace(',', '.', true).regex(/^\d+(\.\d{1,2})?$/).required(),
    description: Joi.string().required(),
    category: Joi.string().valid("entry", "exit").required(), 
    image: Joi.string().required()
});