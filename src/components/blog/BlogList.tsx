import React from "react";
import { blogPosts } from "../../data/blogPosts";
import BlogCard from "./BlogCard";
import "./blog.css";

const BlogList: React.FC = () => {
  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1 style={{ marginBottom: "inherit" }}>Blog</h1>
        <p>Thoughts on development, design, and technology.</p>
      </div>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
