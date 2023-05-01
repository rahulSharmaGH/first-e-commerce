import React1, { useState } from "react";
import Meta from "../components/Meta";
import BreadCrumps from "../components/BreadCrumps";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import ReactImageZoom from "react-image-zoom";
import React from "react";
import Color from "../components/Color";
import { Link } from "react-router-dom";
import { TbJewishStar } from "react-icons/tb";
import { IoIosGitCompare } from "react-icons/io";
import { BsFillBagHeartFill } from "react-icons/bs";
import Container from "../components/Container";

function SingleProduct() {
  const props = {
    width: 400,
    height: 500,
    zoomWidth: 600,
    img: "https://images.pexels.com/photos/404181/pexels-photo-404181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  const [orderedProduct, setorderedproduct] = useState(true);
  return (
    <>
      <Meta title={"Dynamic Product"} />
      <BreadCrumps title={"Dynamic Product"} />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-image d-flex flex-wrap gap-15">
              <div>
                <img src="/images/watch.jpg" alt="" className="img-fluid" />
              </div>
              <div>
                <img src="/images/watch.jpg" alt="" className="img-fluid" />
              </div>
              <div>
                <img src="/images/watch.jpg" alt="" className="img-fluid" />
              </div>
              <div>
                <img src="/images/watch.jpg" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details ">
              <div className="border-bottom gap-10">
                <h3 className="title">Best Analog Watch In The Market</h3>
              </div>
              <div className="border-bottom py-2">
                <p className="price">₹14999</p>
                <div className=" d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    edit={false}
                    value={4}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">(2 Review)</p>
                </div>
                <a href="#review" className="gap-10">
                  Write a Review
                </a>
              </div>
              <div className=" py-3">
                <div className="d-flex align-items-center gap-10 my-3">
                  <h3 className="product-heading">Type</h3>:
                  <p className="product-data-para">Watch</p>
                </div>
                <div className="d-flex align-items-center gap-10 my-3">
                  <h3 className="product-heading">Brand</h3>:
                  <p className="product-data-para">Rolex</p>
                </div>
                <div className="d-flex align-items-center gap-10 my-3">
                  <h3 className="product-heading">Categories</h3>:
                  <p className="product-data-para">Accessories</p>
                </div>
                <div className="d-flex align-items-center gap-10 my-3">
                  <h3 className="product-heading">Tags</h3>:
                  <p className="product-data-para">
                    <div>
                      <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                        <span className="badge text-secondary bg-light rounded-3 py-2 px-3">
                          Headphones
                        </span>
                        <span className="badge text-secondary bg-light rounded-3 py-2 px-3">
                          Music
                        </span>
                        <span className="badge text-secondary bg-light rounded-3 py-2 px-3">
                          Laptop
                        </span>
                        <span className="badge text-secondary bg-light rounded-3 py-2 px-3">
                          Camera
                        </span>
                        <span className="badge text-secondary bg-light rounded-3 py-2 px-3">
                          Mobile
                        </span>
                      </div>
                    </div>
                  </p>
                </div>
                <div className="d-flex align-items-center mt-3 gap-10 my-3">
                  <h3 className="product-heading">SKU</h3>:
                  <p className="product-data-para">ABC</p>
                </div>
                <div className="d-flex align-items-center mt-3 gap-10 my-3">
                  <h3 className="product-heading">Availiblity</h3>:
                  <p className="product-data-para">In Stock</p>
                </div>
                <div className="d-flex flex-column gap-10 mt-2 my-3">
                  <h3 className="product-heading">Size :</h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge border border-secondary text-dark  bg-white">
                      S
                    </span>
                    <span className="badge border border-secondary text-dark  bg-white">
                      M
                    </span>
                    <span className="badge border border-secondary text-dark  bg-white">
                      L
                    </span>
                    <span className="badge border border-secondary text-dark bg-white">
                      XL
                    </span>
                  </div>
                </div>
                <div className="d-flex  p-0 flex-column gap-10">
                  <h3 className=" product-heading">Color :</h3>
                  <Color />
                </div>
                <div className="d-flex align-items-center flex-row mt-3 gap-10 my-3">
                  <h3 className="product-heading">Quantity :</h3>
                  <div className="d-flex flex-row">
                    <input
                      type="number"
                      name="quantity"
                      min={1}
                      max={50}
                      style={{ width: "80px" }}
                      className="form-control"
                      id=""
                    />
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <button className="button border-0" type="submit">
                      Add to Cart
                    </button>
                    <button className="button border-0 s" type="submit">
                      Buy Now
                    </button>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div>
                    <a href="/compare-product">
                      <IoIosGitCompare className="fs-5 me-2" />
                      Add To Compare
                    </a>
                  </div>
                  <div>
                    <a href="/wishlist">
                      <BsFillBagHeartFill className="fs-5 me-2" />
                      Add To Wishlist
                    </a>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10 my-3">
                  <h3 className="product-heading">Shipping & Returns</h3>:
                  <p className="product-data-para">
                    Order now And Get it Within 7 Days And Free{" "}
                    <b>30 Days Return Policy</b>
                  </p>
                </div>
                <div className="d-flex align-items-center gap-10 my-3">
                  <h3 className="product-heading">Copy Product Link</h3>:
                  <a
                    href="javascript:void(0);"
                    onClick={() => {
                      copyToClipboard("link");
                    }}
                  >
                    Copy Product Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Description</h4>
            <div className="bg-white p-3">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos officia quia, corrupti neque autem nisi excepturi
                error fugit Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Delectus rem at modi ea, amet sequi, in a dicta blanditiis
                facilis vitae unde error ut quibusdam ullam quo iusto recusandae
                eius commodi impedit quidem autem maxime! Veniam quae aperiam
                totam dicta veritatis debitis, repellendus odio provident quo
                asperiores, at sint dolorem est illo? Perferendis, magni? quod
                porro quidem. Fugit, perferendis hic.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container id="review" class1="reviews-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Reviews</h4>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end  ">
                <div>
                  <h4 className="mb-2 ">Customer Reviews</h4>
                  <div className="d-flex gap-10 align-items-center">
                    <ReactStars
                      count={5}
                      size={24}
                      edit={false}
                      value={4}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Based On 5 Reviews</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a className="text-dark text-decoration-underline" href="">
                      Write a Review
                    </a>
                  </div>
                )}
              </div>
              <div className="review-form py-4">
                <form action="" className="d-flex flex-column gap-15">
                  <h4>Write A Review</h4>
                  <div>
                    <ReactStars
                      count={5}
                      size={24}
                      edit={true}
                      value={4}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div>
                    <textarea
                      className="w-100 form-control"
                      id=""
                      cols={30}
                      rows={5}
                      placeholder="Comments"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">Submit Review</button>
                  </div>
                </form>
              </div>
              <div className="reviews mt-4">
                <div className="review ">
                  <div className="d-flex align-items-center gap-10 flex-direction-row">
                    <h4 className="customerUsername mb-0">Astha</h4>
                    <ReactStars
                      count={5}
                      size={24}
                      edit={false}
                      value={4}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                    omnis quidem laudantium nostrum, tenetur earum accusamus qui
                    dignissimos, quia ratione consectetur enim ab praesentium
                    magni ullam repellendus. Quia, voluptatum corporis!
                  </p>
                </div>
              </div>
            </div>
          </div>
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
    </>
  );
}

export default SingleProduct;
