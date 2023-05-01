import React from "react";

import { BsLinkedin, BsInstagram, BsGithub, BsYoutube } from "react-icons/bs";
import newsletter from "../images/newsletter.png";
import { NavLink, Link } from "react-router-dom";
const footer = () => {
  return (
    <>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5 ">
              <div className="foooter-top-data d-flex gap-30 align-items-center ">
                <img src={newsletter} alt="news" />
                <h2 className="text-white mp-0">Sign Up For NewsLetter </h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div className="footer-links d-flex flex-column">
                <address className="text-white fs-5">
                  House No.123 , <br />
                  XYZ,XYZ,XYZ <br />
                  Pincode :123456{" "}
                </address>
                <a className="text-white" href="tel:+917898640906">
                  +91 77777777
                </a>
                <a
                  className="text-white py-3"
                  href="mailto:bossgotlucky@gmail.com"
                >
                  creator@gmail.com
                </a>
                <div className="social-icons d-flex align-items-center gap-30 mt-4 ">
                  <a href="">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a href="">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a href="">
                    <BsYoutube className="fs-4" />
                  </a>
                  <a href="">
                    <BsGithub className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link to={"/privacy-policy"} className="text-white py-2 mb-1">
                  Privacy Policy
                </Link>
                <Link to={"/refund-policy"} className="text-white py-2 mb-1">
                  Refund Policy
                </Link>
                <Link to={"/shipping-policy"} className="text-white py-2 mb-1">
                  Shipping Policy
                </Link>
                <Link
                  to={"/term-and-condition"}
                  className="text-white py-2 mb-1"
                >
                  Terms And Services
                </Link>
                <Link to={"/blogs"} className="text-white py-2 mb-1">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Accounts</h4>
              <div className="footer-links d-flex flex-column">
                <Link to={""} className="text-white py-2 mb-1">
                  Search
                </Link>
                <Link to={"/about"} className="text-white py-2 mb-1">
                  About Us
                </Link>
                <Link to={""} className="text-white py-2 mb-1">
                  Faq
                </Link>
                <Link to={""} className="text-white py-2 mb-1">
                  Contact
                </Link>
                <Link to={""} className="text-white py-2 mb-1">
                  Chart Size
                </Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link to={""} className="text-white py-2 mb-1">
                  Accessories
                </Link>
                <Link to={""} className="text-white py-2 mb-1">
                  Laptops
                </Link>
                <Link to={""} className="text-white py-2 mb-1">
                  HeadPhones
                </Link>
                <Link to={""} className="text-white py-2 mb-1">
                  Smart Watches
                </Link>
                <Link to={""} className="text-white py-2 mb-1">
                  {" "}
                  Tablets
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center text-white mb-0">
                &copy; {new Date().getFullYear()} Powered by Rahul Sharma
              </p>
            </div>
            <div className="company-logo"></div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
