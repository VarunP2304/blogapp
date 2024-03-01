// src/AddBlog.js
import React, { useState } from 'react';
import axios from 'axios';

const AddBlog = () => {
  const [title, setTitle] = useState('');
  const [blogContent, setBlogContent] = useState('');
  const [authorName, setAuthorName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBlog = {
      title: title,
      blogContent: blogContent,
      authorName: authorName
    };

    try {
      const response = await axios.post('http://localhost:3000/add-blog', newBlog);
      console.log('Blog added:', response.data);
    } catch (error) {
      console.error('Error adding blog:', error);
    }
  };

  return (
    <div>
      <h1>Add New Blog</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Blog Content:
          <textarea value={blogContent} onChange={(e) => setBlogContent(e.target.value)} />
        </label>
        <label>
          Author Name:
          <input type="text" value={authorName} onChange={(e) => setAuthorName(e.target.value)} />
        </label>
        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
};

export default AddBlog;
