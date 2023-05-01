import React from "react";
import Meta from "../components/Meta";
import BreadCrumps from "../components/BreadCrumps";
import Container from "../components/Container";
function Wishlist() {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumps title={"Wishlist"} />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                className="position-absolute cross img-fluid"
                src="images/cross.svg"
                alt=""
              />
              <div className="wishlist-card-image">
                <img
                  src="images/watch.jpg"
                  alt="image"
                  className="img-fluid w-100"
                />
              </div>
              <div className=" px-3 py-3">
                <h5 className="title">Samsung S Series Watch</h5>
                <h6 className="price">₹20000</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                className="position-absolute cross img-fluid"
                src="images/cross.svg"
                alt=""
              />
              <div className="wishlist-card-image">
                <img
                  src="images/watch.jpg"
                  alt="image"
                  className="img-fluid w-100"
                />
              </div>
              <div className=" px-3 py-3">
                <h5 className="title">Samsung S Series Watch</h5>
                <h6 className="price">₹20000</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                className="position-absolute cross img-fluid"
                src="images/cross.svg"
                alt=""
              />
              <div className="wishlist-card-image">
                <img
                  src="images/watch.jpg"
                  alt="image"
                  className="img-fluid w-100"
                />
              </div>
              <div className=" px-3 py-3">
                <h5 className="title">Samsung S Series Watch</h5>
                <h6 className="price">₹20000</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                className="position-absolute cross img-fluid"
                src="images/cross.svg"
                alt=""
              />
              <div className="wishlist-card-image">
                <img
                  src="images/watch.jpg"
                  alt="image"
                  className="img-fluid w-100"
                />
              </div>
              <div className=" px-3 py-3">
                <h5 className="title">Samsung S Series Watch</h5>
                <h6 className="price">₹20000</h6>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Wishlist;
