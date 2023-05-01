import React from "react";
import Meta from "../components/Meta";
import BreadCrumps from "../components/BreadCrumps";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
const Forgotpassword = () => {
  return (
    <>
      <Meta title={"Forgot Your Password"} />
      <BreadCrumps title={"Forgot Your Password"} />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-2">Reset Password</h3>
              <p className="text-center passResetPara mb-4 my-2">
                We Will Send You an Email For Reset Your Password
              </p>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput type="email" name="email" placeholder="Email" />

                <div>
                  <div className=" mt-3 d-flex flex-column justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Submit
                    </button>
                    <Link to={"/login"}>Cancel</Link>
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
export default Forgotpassword;
