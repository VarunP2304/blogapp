// validations/blogsValidation.js
const Joi = require('joi');

exports.blogValidation = Joi.object({
  title: Joi.string().required(),
  blogContent: Joi.string().required(),
  authorName: Joi.string().required()
});
