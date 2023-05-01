import React from "react";
import Meta from "../components/Meta";
import BreadCrumps from "../components/BreadCrumps";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
const login = () => {
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumps title={"Login"} />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-2">Login</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput type="email" name="email" placeholder="Email" />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <div>
                  <Link to={"/forgot-password"}>Forgot Password ?</Link>
                  <div className=" mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0">Login</button>
                    <Link to={"/sign-up"} className="button signup">
                      Sign up
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default login;
