import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
function SpecialProduct() {
  return (
    <div className="col-6">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div>
            <img src="images/watch.jpg" className="img-fluid" alt="product" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">Havells</h5>
            <h6 className="title">Portable Bluetooth Speakers</h6>
            <ReactStars
              count={5}
              size={24}
              edit={false}
              activeColor="#ffd700"
              value={4.5}
            />
            <p className="price">
              <span className="red-p text-red">₹29990</span>
              &nbsp;<s>₹37999</s>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>500 Days</b>
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle p-3 bg-danger ">1</span>:
                <span className="badge rounded-circle p-3 bg-danger ">1</span>:
                <span className="badge rounded-circle p-3 bg-danger ">1</span>
              </div>
            </div>
            <div className="prod-count mt-3">
              <p>Product: 5 </p>
              <div className="progress">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "25%" }}
                ></div>
              </div>
            </div>
            <Link to={"/"} className="button my-3">
              Add to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialProduct;
