import React from "react";
import Meta from "../components/Meta";
import BreadCrumps from "../components/BreadCrumps";
import BlogCard from "../components/BlogCard";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import blog from "../images/blog-1.jpg";
import Container from "../components/Container";
function Singleblog() {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumps title={"Dynamic Blog Name"} />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to={"/blogs"} className="d-flex align-items-center gap-10">
                <BsArrowLeft />
                Go Back To Blogs
              </Link>
              <h3 className="title">A Happy Day In Human Life</h3>
              <img src={blog} className="img-fluid w-100 my-4" alt="blogs" />

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis assumenda ratione esse autem aliquam eligendi ea enim
                officia odit, quibusdam recusandae sunt accusantium, fuga quia
                iusto ex repellendus veniam quos natus. Perspiciatis, itaque
                inventore.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Singleblog;
