import React from "react";
import Meta from "../components/Meta";
import BreadCrumps from "../components/BreadCrumps";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
const Signup = () => {
  return (
    <>
      <Meta title={"Create New Account"} />
      <BreadCrumps title={"Sign Up"} />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-2">Create New Account</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput
                  type="text"
                  name="first-name"
                  placeholder="First Name"
                />
                <CustomInput
                  type="text"
                  name="last-name"
                  placeholder="Last Name"
                />
                <CustomInput type="email" name="email" placeholder="Email" />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder=" Create a New Password"
                />

                <div>
                  <div className=" mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0">Sign up</button>
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

export default Signup;
