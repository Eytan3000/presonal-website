import React from "react";
import BlogCard from "./BlogCard";
import { useBlogPosts } from "./useBlogPosts";
import "./blog.css";

const BlogList: React.FC = () => {
  const { posts, loading, error } = useBlogPosts();

  if (error) {
    return (
      <div className="blog-container">
        <div className="blog-header">
          <h1 style={{ marginBottom: "inherit" }}>Blog</h1>
          <p>Failed to load posts: {error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1 style={{ marginBottom: "inherit" }}>Blog</h1>
        <p>Thoughts on development, design, and technology.</p>
      </div>
      <div className="blog-grid">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      {loading && posts.length === 0 ? <p>Loading posts...</p> : null}
      {!loading && posts.length === 0 ? <p>No published posts yet.</p> : null}
    </div>
  );
};

export default BlogList;
