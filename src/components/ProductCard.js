import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import wish from "../images/wish.svg";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch3.jpg";
import prodcompare from "../images/prodcompare.svg";
import view from "../images/view.svg";
import addcart from "../images/add-cart.svg";
function ProductCard(props) {
  let location = useLocation();
  const { grid } = props;

  return (
    <>
      <div
        className={`${
          location.pathname == "/product" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link to={"product/:id"} className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src={wish} alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img src={watch} className="img-fluid" alt="watch" />
            <img className="watchimg img-fluid" src={watch2} alt="watch2" />
          </div>
          <div className="product-details">
            <h6 className="brand">Titan</h6>
            <h5 className="product-title">
              A Branded And Fancy Style Watch For Women
            </h5>
            <ReactStars
              count={5}
              size={30}
              edit={false}
              value={4}
              activeColor="#ffd700"
            />
            <p className={`description ${grid == 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
              doloribus, neque eos placeat distinctio aperiam iure molestiae
              expedita possimus odit.
            </p>
            <p className="price">₹2999</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src={prodcompare} alt="compare" />
              </Link>
              <Link>
                <img src={view} alt="view" />
              </Link>
              <Link>
                <img src={addcart} alt="add-cart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default ProductCard;
