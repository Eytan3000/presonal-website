import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './blog.css';
import { IoArrowBack } from 'react-icons/io5';
import { urlFor } from '../../sanity/client';
import BlogContent from './BlogContent';
import { useBlogPostBySlug } from './useBlogPostBySlug';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { post, loading, error } = useBlogPostBySlug(slug);

  if (error) {
    return (
      <div className="blog-container">
        <h2>Failed to load post</h2>
        <p>{error.message}</p>
        <Link to="/blog" className="back-link">
          <IoArrowBack /> Back to Blog
        </Link>
      </div>
    );
  }

  if (loading && !post) {
    return (
      <div className="blog-container">
        <h2>Loading...</h2>
      </div>
    );
  }

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
          <span>{post.date ? new Date(post.date).toLocaleDateString() : ''}</span>
          <span>{post.category}</span>
        </div>
      </div>

      {post.image ? (
        <img
          src={urlFor(post.image).width(1200).height(600).url()}
          alt={post.title}
          className="blog-post-image"
        />
      ) : null}

      <div className="blog-post-content">
        <BlogContent value={post.content} />
      </div>
      
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
