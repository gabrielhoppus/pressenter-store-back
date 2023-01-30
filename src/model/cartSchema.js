import Joi from "joi";

export const cartSchema = Joi.object({
    price: Joi.string().replace(',', '.', true).regex(/^\d+(\.\d{1,2})?$/).required(),
    product: Joi.string().required(),
    image: Joi.string().required()
});