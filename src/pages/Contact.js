import React from "react";
import Meta from "../components/Meta";
import BreadCrumps from "../components/BreadCrumps";
import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { IoMdCall } from "react-icons/io";
import { BiPhoneCall } from "react-icons/bi";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumps title={"Contact Us"} />
      <Container class1="contact-wrapper home-wrapper-2 py-3">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224238.62045697815!2d77.1547182930935!3d28.577916059203588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1681812923229!5m2!1sen!2sin"
              width="600"
              height="450"
              className="border-0 w-100"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex  justify-content-between">
              <div>
                <h3 className="contact-title mb-4">Contact Us</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <CustomInput type="text" placeholder="Name" />
                  <CustomInput type="email" placeholder="Email" />
                  <CustomInput type="tel" placeholder="Mobile Number" />

                  <div>
                    <textarea
                      className="w-100 form-control"
                      id=""
                      cols={30}
                      rows={5}
                      placeholder="Comments"
                    ></textarea>
                  </div>
                  <div>
                    <button className="button border-0">Send</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Get In Touch With Us</h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-2 d-flex gap-15 align-items-center">
                      <AiOutlineHome className="fs-5" />
                      <address className="mb-0">
                        Hno.117 Platform 9 3/4 King Cross Station ,Hogwarts
                      </address>
                    </li>
                    <li className="mb-2 d-flex gap-15 align-items-center">
                      <BiPhoneCall className="fs-5" />
                      <a href="tel:+91777777777">+91 483928302</a>
                    </li>
                    <li className="mb-2 d-flex gap-15 align-items-center">
                      <AiOutlineMail className="fs-5" />
                      <a href="mailto:xyz@xyx.com">Websitecreator@xyz.com</a>
                    </li>
                    <li className="mb-2 d-flex gap-15 align-items-center">
                      <AiOutlineInfoCircle className="fs-5" />
                      <p className="mb-0">Monday - Friday 10AM-5PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default contact;
