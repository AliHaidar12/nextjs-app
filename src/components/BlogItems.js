import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogItems = ({ blogs }) => {
  const getColClass = (numBlogs) => {
    switch (numBlogs) {
      case 2:
        return 'col-md-6'; // Two items take up half the row each
      case 3:
        return 'col-md-4'; // Three items take up one-third the row each
      default:
        return 'col-md-4'; // Default to one-third the row each
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {blogs.map((blog) => (
          <div key={blog.id} className={`card mb-4 ${getColClass(blogs.length)}`}>
            <Image
              src={blog.image} // Replace with your image source
              className="card-img-top"
              width={300}
              height={250}
              alt={`Blog ${blog.id}`}
            />
            <div className="card-body bg-light">
              <Link href={blog.link} className='text-decoration-none'>
              <h5 style={{ color: "#1a808d" }} className="fw-bold card-title">{blog.title}</h5>
              </Link>
              

              <p className="card-text">
                <small className="text-muted">
                  {blog.date} | {blog.comments} {blog.comments === 1 ? 'Comment' : 'Comments'}
                </small>
              </p>
              <p className="card-text">{blog.description}</p>
              <Link href={`${blog.link}`} className='fw-bold text-decoration-none'
                style={{ color: "#1a808d" }}
              >Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogItems;
