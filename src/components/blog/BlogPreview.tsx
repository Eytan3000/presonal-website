import React from 'react';
import { Link } from 'react-router-dom';
import BlogCard from './BlogCard';
import './blog.css';
import { IoArrowForward } from 'react-icons/io5';
import { useBlogPosts } from './useBlogPosts';

const BlogPreview: React.FC = () => {
  const { posts: latestPosts, loading, error } = useBlogPosts(3);

  return (
    <div className="blog-preview-container">
      <div className="blog-preview-header">
        <h2 className="hero-secondary-title">
          <span className="menu-text-number">02.</span> Latest from the Blog
        </h2>
        <Link to="/blog" className="view-all-link">
          View All <IoArrowForward />
        </Link>
      </div>
      <div className="blog-grid" style={{ padding: '0 2rem' }}>
        {latestPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      {loading && latestPosts.length === 0 ? <p style={{ padding: '0 2rem' }}>Loading posts...</p> : null}
      {error ? <p style={{ padding: '0 2rem' }}>Failed to load posts.</p> : null}
    </div>
  );
};

export default BlogPreview;
