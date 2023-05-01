import React from "react";
import Meta from "../components/Meta";
import BreadCrumps from "../components/BreadCrumps";
import Color from "../components/Color";
import Container from "../components/Container";
function CompareProduct() {
  return (
    <>
      <Meta title={"Compare Products"} />
      <BreadCrumps title={"Compare Product"} />
      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                className="position-absolute cross img-fluid"
                src="images/cross.svg"
                alt=""
              />
              <div className="product-card-image">
                <img src="/images/watch.jpg" alt="image" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">Samsung S Series Watch</h5>
                <h6 className="price mb-3">₹20000</h6>
                <div>
                  <div className="product-detail">
                    <h5>Brand:</h5>
                    <p>Samsung</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availiblity:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>Smart Watch</p>
                  </div>
                  <div className="product-detail">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h5>Color:</h5>

                    <Color />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                className="position-absolute cross img-fluid"
                src="images/cross.svg"
                alt=""
              />
              <div className="product-card-image">
                <img src="/images/watch.jpg" alt="image" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">Samsung S Series Watch</h5>
                <h6 className="price mb-3">₹20000</h6>
                <div>
                  <div className="product-detail">
                    <h5>Brand:</h5>
                    <p>Samsung</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availiblity:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>Smart Watch</p>
                  </div>
                  <div className="product-detail">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h5>Color:</h5>

                    <Color />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                className="position-absolute cross img-fluid"
                src="images/cross.svg"
                alt=""
              />
              <div className="product-card-image">
                <img src="/images/watch.jpg" alt="image" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">Samsung S Series Watch</h5>
                <h6 className="price mb-3">₹20000</h6>
                <div>
                  <div className="product-detail">
                    <h5>Brand:</h5>
                    <p>Samsung</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availiblity:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>Smart Watch</p>
                  </div>
                  <div className="product-detail">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h5>Color:</h5>

                    <Color />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                className="position-absolute cross img-fluid"
                src="images/cross.svg"
                alt=""
              />
              <div className="product-card-image">
                <img src="/images/watch.jpg" alt="image" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">Samsung S Series Watch</h5>
                <h6 className="price mb-3">₹20000</h6>
                <div>
                  <div className="product-detail">
                    <h5>Brand:</h5>
                    <p>Samsung</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availiblity:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>Smart Watch</p>
                  </div>
                  <div className="product-detail">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h5>Color:</h5>

                    <Color />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default CompareProduct;
