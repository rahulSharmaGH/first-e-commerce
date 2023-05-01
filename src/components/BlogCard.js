import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
function BlogCard() {
  let location = useLocation();
  return (
    <div className={`${location.pathname == "/blogs" ? `col-12` : "col-3"}`}>
      <div className="blog-card">
        <div className="card-image">
          <img src="/images/blog-1.jpg" className="img-fluid" alt="" />
        </div>
        <div className="blog-content">
          <p className="date">
            {new Date().getDate()}-April-{new Date().getFullYear().toString()}
          </p>
          <h6 className="title">A Beautiful day</h6>
          <p className="desc">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            nobis eos dolorum cum, temporibus unde velit eius iste quibusdam
            architecto maxime impedit eaque esse odio, autem excepturi
            repudiandae voluptas sapiente quam reiciendis facilis eligendi!
          </p>
          <Link to="/blog/:id" className="button">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
