// components/Blog.js
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogItems = ({blogs}) => {
  

  return (
    <div className="container mt-5">
      <div className="row">
        {blogs.map((blog) => (
          <div key={blog.id} className="col-md-4">
            <div className="card mb-4">
              <Image
                src={blog.image} // Replace with your image source
                className="card-img-top"
                width={300}
                height={250}
                alt={`Blog ${blog.id}`}
              />
              <div className="card-body bg-light">
                <h5 style={{color: "#1a808d"}} className="fw-bold card-title">{blog.title}</h5>
                
                <p className="card-text">
                  <small className="text-muted">
                    {blog.date} | {blog.comments} {blog.comments === 1 ? 'Comment' : 'Comments'}
                  </small>
                </p>
                <p className="card-text">{blog.description}</p>
                <p className='fw-bold text-decoration-none' 
                style={{color: "#1a808d"}}
                >Read More</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogItems;
