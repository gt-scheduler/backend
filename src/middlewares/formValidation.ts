import { celebrate, Joi, Segments } from "celebrate";

export const formValidation = celebrate({
  [Segments.BODY]: Joi.object({
    rating: Joi.number().integer().min(1).max(5).required(),
    feedback: Joi.string().trim().allow("").max(2048).required(),
  }),
});
