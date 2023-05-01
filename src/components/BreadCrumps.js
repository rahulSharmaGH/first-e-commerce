import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const BreadCrumps = (props) => {
  const { title } = props;
  return (
    <div className="breadcrump mb-0 py-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className="text-center mb-0">
              <Link to={"/"} className="text-dark mb-0">
                Home &nbsp;
              </Link>
              / {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumps;
