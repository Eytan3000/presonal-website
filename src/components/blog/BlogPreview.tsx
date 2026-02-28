import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';
import BlogCard from './BlogCard';
import './blog.css';
import { IoArrowForward } from 'react-icons/io5';

const BlogPreview: React.FC = () => {
  // Get the latest 3 posts
  const latestPosts = blogPosts.slice(0, 3);

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
    </div>
  );
};

export default BlogPreview;
