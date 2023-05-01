import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import watch from "../images/watch.jpg";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
const Checkout = () => {
  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">Website Name</h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/cart" className="text-dark">
                      Cart{" "}
                    </a>
                  </li>
                  &nbsp; /
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Information
                  </li>
                  &nbsp; /
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Shipping
                  </li>
                  &nbsp; /
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Payments
                  </li>
                </ol>
              </nav>
              <h4 className="title total">Contact Information</h4>
              <p className="user-details total">Rahul Sharma (xyz@zyx.com)</p>
              <h4 className="mb-3"></h4>
              <form
                action=""
                className="d-flex gap-15 justify-content-between flex-wrap"
              >
                <div className="w-100">
                  <select name="" id="" className="form-control form-select">
                    <option value="" selected disabled>
                      Select Country
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <CustomInput type="text" placeholder="First Name" />
                </div>
                <div className="flex-grow-1">
                  <CustomInput type="text" placeholder="Last Name" />
                </div>

                <div className="flex-grow-1">
                  <CustomInput type="tel" placeholder="Mobile Number" />
                </div>
                <div className="w-100">
                  <CustomInput type="" placeholder="Address" />
                </div>
                <div className="w-100">
                  <CustomInput
                    type=""
                    placeholder="Apartment, Building No., House No. etc"
                  />
                </div>
                <div className="flex-grow-1">
                  <CustomInput type="" placeholder="City" />
                </div>
                <div className="flex-grow-1">
                  <select name="" id="" className="form-control form-select">
                    <option value="" selected disabled>
                      Select State
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <CustomInput type="" placeholder="Pin Code" />
                </div>
                <div className="w-100 ">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to={"/cart"} className="text-dark">
                      <BiArrowBack className="me-2" /> Return to Cart
                    </Link>
                    <Link to={"/shipping"} className="button">
                      Continue To Shipping
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom my-2 py-4">
              <div className="d-flex mb-2 gap-10 align-items-center">
                <div className="w-75 d-flex gap-10">
                  <div className="w-25 position-relative">
                    <span
                      style={{ top: "2px", right: "2px" }}
                      className="badge bg-secondary text-white rounded-circle p-2 position-absolute right-1"
                    >
                      1
                    </span>
                    <img className="img-fluid" src={watch} alt="" />
                  </div>
                  <div>
                    <h5 className="total-price">Title Of The Product</h5>
                    <p className="total-price">s / #jabkf</p>
                  </div>
                </div>
                <div>
                  <h5 className="total">₹2000</h5>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="border-bottom my-2 py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="total">Subtotal</p>
                <p className="total-price">₹3960</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0">Shipping</p>
                <p className="mb-0">₹40</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bottom">
              <h4 className="total">Total</h4>
              <h5 className="total-price">₹4000</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
