import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../../data/blogPosts';
import './blog.css';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <Link to={`/blog/${post.id}`} className="blog-card">
      <img src={post.image} alt={post.title} className="blog-card-image" />
      <div className="blog-card-content">
        <div className="blog-card-meta">
          <span>{post.category}</span>
          <span>{new Date(post.date).toLocaleDateString()}</span>
        </div>
        <h3 className="blog-card-title">{post.title}</h3>
        <p className="blog-card-excerpt">{post.excerpt}</p>
        <div className="blog-card-tags">
          {post.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="blog-tag">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
