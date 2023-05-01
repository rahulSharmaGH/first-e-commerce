import React from "react";
import Meta from "../components/Meta";
import BreadCrumps from "../components/BreadCrumps";
import watch from "../images/watch.jpg";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../components/Container";
function cart() {
  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumps title={"Cart"} />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className=" cart-header py-4 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            <div className=" cart-data py-4 mb-2 d-flex justify-content-between align-items-center">
              <div className="cart-col-1 p-4 d-flex align-items-center">
                <div className="w-25">
                  <img src={watch} alt="image-product" className="img-fluid" />
                </div>
                <div className="w-75 ">
                  <p>nknd</p>
                  <p>Size: kdak</p>
                  <p>Color: kdak</p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">₹599</h5>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-15">
                <div>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="form-control"
                    min={1}
                    max={20}
                  />
                </div>
                <div>
                  <AiFillDelete className="text-danger" />
                </div>
              </div>
              <div className="cart-col-4">
                <h5 className="price">₹599</h5>
              </div>
            </div>
            <div className=" cart-data py-4 mb-2 d-flex justify-content-between align-items-center">
              <div className="cart-col-1 d-flex align-items-center">
                <div className="w-25">
                  <img src={watch} alt="image-product" className="img-fluid" />
                </div>
                <div className="w-75">
                  <p className="title">New Watch </p>
                  <p className="color">Size: kdak</p>
                  <p className="size">Color: kdak</p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">₹599</h5>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-15">
                <div>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="form-control"
                    min={1}
                    max={20}
                  />
                </div>
                <div>
                  <AiFillDelete className="text-danger" />
                </div>
              </div>
              <div className="cart-col-4">
                <h5 className="price">₹599</h5>
              </div>
            </div>
          </div>
          <div className="col-12 ">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link to={"/product"} className="button">
                Continue to Shopping
              </Link>
              <div className="d-flex flex-column align-items-end jusitfy-content-end">
                <h4>Subtotal: ₹599</h4>
                <p>All Taxes Will Be Included At Checkout</p>
                <Link to={"/checkout"} className="button">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default cart;
