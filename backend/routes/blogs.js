// routes/blogs.js
const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');
// routes/blogs.js
const blogsController = require('../controllers/blogsController');
const { blogValidation } = require


// Create a new blog
router.post('/', async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
