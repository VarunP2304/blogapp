// middlewares/validateBlog.js
const Joi = require('joi');

exports.validateBlog = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    blogContent: Joi.string().required(),
    authorName: Joi.string().required()
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};
