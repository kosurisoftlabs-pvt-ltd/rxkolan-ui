import React from "react";
import Button from "../button/Button";
import InputField from "../inputfield/InputField";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <section
        className="foooter"
        style={{ backgroundColor: "#000", paddingTop: "30px" }}
      >
        <div className="container footer">
          <div className="row footer-card">
            <div className="col-md-4 footer-cloumn">
              <div className="footer-content">
                <h4>CONTACT</h4>
                <div className="d-flex mb-2">
                  <div>
                    <i class="fa-solid fa-phone "></i>
                  </div>
                  <div>
                    <h6>+91 6303 476 264</h6>
                  </div>
                </div>
                <div className="d-flex mb-2">
                  <div>
                    <i class="fa-regular fa-envelope"></i>
                  </div>
                  <div>
                    <h6>info@kourisoft.com</h6>
                  </div>
                </div>
                <div className="d-flex mb-2">
                  <div>
                    <i class="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <h6>
                      Kosuri Soft Labs pvt Ltd, Kandukuru, Nellore Dist , AP PIN
                      – 523105
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-content">
                <h4>MENU</h4>
                <div className="mb-2">
                  <Link to={"/"}>Home</Link>
                </div>

                <div className="mb-2">
                  <Link to={"/about"}>About</Link>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="footer-content">
                <h4>NEWSLETTER</h4>
                <InputField type="email" name="Enter Your Email" />
                <Button
                  name={"Subscribe"}
                  color={"blue"}
                  className="subscribe"
                />
              </div>
            </div>
            <hr style={{ color: "white" }} />
            <div className="copyright">
              <p> &#169; 2023 All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
