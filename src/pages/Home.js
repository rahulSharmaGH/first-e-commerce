import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Meta from "../components/Meta";
import Container from "../components/Container";
const Home = () => {
  return (
    <>
      <Meta title={"Home Page"} />
      <Container class1="home-wrappper-1 py-5">
        {" "}
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative p-3">
              <img
                src="images/main-banner.jpg"
                className="img-fluid rounded-3"
                alt="mainBanner"
              />
              <div className="main-banner-content position-absolute">
                <h6>For Super Chargers</h6>
                <h4>Super Charged Headphones</h4>
                <h5 className="gap-30">Special Sale</h5>
                <p className="py-3">
                  From ₹21999 Or ₹2199/mo <br />
                  For 12 Months
                </p>
                <Link to={"/"} className="button">
                  BUY NOW
                </Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap justify-content-between align-items-center">
              <div className="small-banner position-relative p-3">
                <img
                  src="images/catbanner-01.jpg"
                  className="img-fluid rounded-3"
                  alt="mainBanner"
                />
                <div className="small-banner-content position-absolute">
                  <h6>Best Sale Ever</h6>
                  <h4>Laptops Max Pro</h4>

                  <p className="py-3">
                    From ₹59999 Or ₹4999/mo <br />
                    For 12 Months
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative p-3">
                <img
                  src="images/catbanner-02.jpg"
                  className="img-fluid rounded-3"
                  alt="mainBanner"
                />
                <div className="small-banner-content position-absolute">
                  <h6>New Arrival</h6>
                  <h4>Smart Watches</h4>

                  <p className="py-3">
                    Shop The Best And <br /> Latest Brands
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative p-3">
                <img
                  src="images/catbanner-03.jpg"
                  className="img-fluid rounded-3"
                  alt="mainBanner"
                />
                <div className="small-banner-content position-absolute">
                  <h6>Best Deal</h6>
                  <h4>Buy IPad+ Air</h4>

                  <p className="py-3">
                    Shop The Best And <br /> Latest Brands
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative p-3">
                <img
                  src="images/catbanner-04.jpg"
                  className="img-fluid rounded-3"
                  alt="mainBanner"
                />
                <div className="small-banner-content position-absolute">
                  <h6>New Launch</h6>
                  <h4>Airpods Pro Max</h4>

                  <p className="py-3">
                    Get Free Engraving <br /> At Zero Cost
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-15">
                <img src="/images/service.png" alt="services" />
                <div>
                  <h6>Free Shipping</h6>
                  <p className="mb-0">Get Free Delivery Above ₹500</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src="/images/service-02.png" alt="services" />
                <div>
                  <h6>Daily Surprise Offers</h6>
                  <p className="b-0">Best And Affordable Price</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src="/images/service-03.png" alt="services" />
                <div>
                  <h6>Constumer Support</h6>
                  <p className="b-0">24x7 Support</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src="/images/service-04.png" alt="services" />
                <div>
                  <h6>Best Deals</h6>
                  <p className="b-0">Sales Up To 90% Off</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img
                  className="gap-15"
                  src="/images/service-05.png"
                  alt="services"
                />

                <div>
                  <h6>Secure Payment</h6>
                  <p className="b-0">100% Protected Servers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex flex-wrap jusity-content-between align-items-center">
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Camera</h6>
                  <p>20 Items</p>
                </div>

                <img src="images/camera.jpg" alt="camera.jpg" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Music</h6>
                  <p>25 Items</p>
                </div>

                <img src="images/headphone.jpg" alt="camera.jpg" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Smart TV</h6>
                  <p>20 Items</p>
                </div>

                <img src="images/tv.jpg" alt="camera.jpg" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Accessories</h6>
                  <p>32 Items</p>
                </div>

                <img src="images/acc.jpg" alt="camera.jpg" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Home Appliances</h6>
                  <p>16 Items</p>
                </div>

                <img src="images/homeapp.jpg" alt="camera.jpg" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Speakers</h6>
                  <p>12 Items</p>
                </div>

                <img src="images/speaker.jpg" alt="camera.jpg" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Tablets</h6>
                  <p>20 Items</p>
                </div>

                <img
                  className="alternateImage"
                  src="images/tab.jpg"
                  alt="camera.jpg"
                />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Laptops</h6>
                  <p>42 Items</p>
                </div>

                <img src="images/laptop.jpg" alt="camera.jpg" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="marque-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper ">
              <Marquee className="d-flex">
                <div className="gap-30  mx-4">
                  <img src="/images/brand-01.png" alt="brandName" />
                </div>
                <div className="gap-30 mx-4">
                  <img src="/images/brand-02.png" alt="brandName" />
                </div>
                <div className="gap-30 mx-4">
                  <img src="/images/brand-03.png" alt="brandName" />
                </div>
                <div className="gap-30 mx-4">
                  <img src="/images/brand-04.png" alt="brandName" />
                </div>
                <div className="gap-30 mx-4">
                  <img src="/images/brand-05.png" alt="brandName" />
                </div>
                <div className="gap-30 mx-4">
                  <img src="/images/brand-06.png" alt="brandName" />
                </div>
                <div className="gap-30 mx-4">
                  <img src="/images/brand-07.png" alt="brandName" />
                </div>
                <div className="gap-30 mx-4">
                  <img src="/images/brand-08.png" alt="brandName" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="featured-section-heading">Our Featured Products</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="featured-section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="special-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="blog-section-heading">Our New And Latest Blogs</h3>
          </div>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </Container>
    </>
  );
};

export default Home;
