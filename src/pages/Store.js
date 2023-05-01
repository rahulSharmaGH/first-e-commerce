import BreadCrumps from "../components/BreadCrumps";
import { Helmet } from "react-helmet";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import React, { useState } from "react";
import Color from "../components/Color";
import Container from "../components/Container";
const Store = () => {
  const [grid, setGrid] = useState(4);

  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumps title={"Our Store"} />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By Categories</h3>
              <div className="">
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>TV</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filter By </h3>
              <div>
                <h5 className="sub-title">Availiblity</h5>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={""}
                      id=""
                    />
                    <label className="form-check-label " htmlFor={""}>
                      In Stock(4)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={""}
                      id=""
                    />
                    <label className="form-check-label " htmlFor={""}>
                      Out Of Stock(0)
                    </label>
                  </div>
                </div>
                <h5 className="sub-title">Price</h5>
              </div>
              <div className="d-flex align-items-center gap-10">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control py-4"
                    id="floatingInput"
                    placeholder="from"
                  />
                  <label htmlFor="floatingInput">From</label>
                </div>
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control py-4"
                    id="floatingInput"
                    placeholder="to"
                  />
                  <label htmlFor="floatingInput">To</label>
                </div>
              </div>
              <h5 className="sub-title">Colors</h5>
              <div>
                <div className="d-flex flex-wrap ">
                  <Color />
                </div>
              </div>
              <h5 className="sub-title">Size</h5>
              <div>
                <div className="form-check gap-10">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={""}
                    id="color-1"
                  />
                  <label className="form-check-label " htmlFor={"color-1"}>
                    S(2)
                  </label>
                </div>
                <div className="form-check gap-10">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={""}
                    id="color-2"
                  />
                  <label className="form-check-label " htmlFor={"color-2"}>
                    M(2)
                  </label>
                </div>
                <div className="form-check gap-10">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={""}
                    id="color-1"
                  />
                  <label className="form-check-label " htmlFor={"color-1"}>
                    L(2)
                  </label>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Products Tags</h3>
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
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Random Products</h3>
              <div className="random-products mb-3 d-flex">
                <div className="w-50">
                  <img
                    src="images/watch.jpg"
                    className="img-fluid"
                    alt="product"
                  />
                </div>
                <div className="w-50">
                  <h5 className="text-dark">
                    Perfect Smart Watch For Women...
                  </h5>
                  <ReactStars
                    count={5}
                    size={30}
                    edit={false}
                    value={4}
                    activeColor="#ffd700"
                  />
                  <b className="price text-dark">₹2999</b>
                </div>
              </div>
              <div className="random-products d-flex">
                <div className="w-50">
                  <img
                    src="images/watch.jpg"
                    className="img-fluid"
                    alt="product"
                  />
                </div>
                <div className="w-50">
                  <h5 className="text-dark">
                    Perfect Smart Watch For Women...
                  </h5>
                  <ReactStars
                    count={5}
                    size={30}
                    edit={false}
                    value={4}
                    activeColor="#ffd700"
                  />
                  <b className="price text-dark">₹2999</b>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 para-sort-by">Sort By:</p>
                  <select name="" className="form-control form-select" id="">
                    <option value="manual">Featured</option>
                    <option value="best-selling">Best Selling</option>
                    <option value="title-ascending">Alphabetically, A-Z</option>
                    <option value="title-descending">
                      Alphabetically, Z-A
                    </option>
                    <option value="price-ascending">Price , Low To High</option>
                    <option value="price-descending">
                      Price , High To Low
                    </option>
                    <option value="created-ascending">Date, Old to New</option>
                    <option value="created-descending">Date, New To Old</option>
                  </select>
                </div>
                <div className="d-flex align-items-center  gap-10">
                  <p className="total-products mb-0">10 Products</p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      src="/images/filterLogo4.svg"
                      className="d-block img-fluid"
                      alt=""
                    />
                    <img
                      onClick={() => {
                        setGrid(4);
                      }}
                      src="/images/filterLogo3.svg"
                      className="d-block img-fluid"
                      alt=""
                    />
                    <img
                      onClick={() => {
                        setGrid(6);
                      }}
                      src="/images/filterLogo2.svg"
                      className="d-block img-fluid"
                      alt=""
                    />

                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      src="/images/filterLogo.svg"
                      className="d-block img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pb-3">
              <div className="d-flex flex-wrap gap-10">
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Store;
