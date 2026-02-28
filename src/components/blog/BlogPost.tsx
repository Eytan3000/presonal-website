import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';
import './blog.css';
import { IoArrowBack } from 'react-icons/io5';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="blog-container">
        <h2>Post not found</h2>
        <Link to="/blog" className="back-link">
          <IoArrowBack /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="blog-post-container">
      <Link to="/blog" className="back-link">
        <IoArrowBack /> Back to Blog
      </Link>
      
      <div className="blog-post-header">
        <h1>{post.title}</h1>
        <div className="blog-card-meta" style={{ justifyContent: 'center', gap: '2rem', marginTop: '1rem' }}>
          <span>{post.author}</span>
          <span>{new Date(post.date).toLocaleDateString()}</span>
          <span>{post.category}</span>
        </div>
      </div>

      <img src={post.image} alt={post.title} className="blog-post-image" />

      <div 
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      
      <div className="blog-card-tags" style={{ marginTop: '3rem' }}>
        {post.tags.map((tag) => (
          <span key={tag} className="blog-tag">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
