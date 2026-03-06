import React from 'react';
import { Link } from 'react-router-dom';
import { urlFor } from '../../sanity/client';
import { BlogEntry } from './blogModel';
import './blog.css';

interface BlogCardProps {
  post: BlogEntry;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <Link to={`/blog/${post.slug}`} className="blog-card">
      {post.image ? (
        <img
          src={urlFor(post.image).width(600).height(320).url()}
          alt={post.title}
          className="blog-card-image"
        />
      ) : null}
      <div className="blog-card-content">
        <div className="blog-card-meta">
          <span>{post.category}</span>
          <span>{post.date ? new Date(post.date).toLocaleDateString() : ''}</span>
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
