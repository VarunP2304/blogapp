// src/App.js
import React from 'react';
import BlogList from './BlogList';
import AddBlog from './AddBlog';
import './styles.css';

const App = () => {
  return (
    <div>
      <h1>Welcome to My Blog App</h1>
      <AddBlog />
      <BlogList />
    </div>
  );
};

export default App;
