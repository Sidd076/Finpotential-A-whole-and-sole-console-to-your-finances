import React, { useState } from 'react';
import './blog.css';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [newBlogTitle, setNewBlogTitle] = useState('');
  const [newBlogContent, setNewBlogContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = { title: newBlogTitle, content: newBlogContent };
    setBlogs([...blogs, newBlog]);
    setNewBlogTitle('');
    setNewBlogContent('');
  };

  const handleRemove = (index) => {
    const updatedBlogs = [...blogs];
    updatedBlogs.splice(index, 1);
    setBlogs(updatedBlogs);
  };

  return (
    <div className="blog-page">
      <h1>My Blog</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={newBlogTitle} onChange={(e) => setNewBlogTitle(e.target.value)} />
        <label htmlFor="content">Content:</label>
        <textarea id="content" value={newBlogContent} onChange={(e) => setNewBlogContent(e.target.value)}></textarea>
        <button type="submit">Add Blog</button>
      </form>
      {blogs.map((blog, index) => (
        <div key={index} className="blog">
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
          <button onClick={() => handleRemove(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;