import React from "react";
import "./about.css";
import Header from "../../components/headers/Header";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Medicine from "../../images/about-medicine.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Header />
      <Navbar />
      <section className="about_section">
        <div className="container">
          <div className="coustom_heading">
            <h2>ABOUT US</h2>
          </div>
          <div className="img-boxx">
            <img src={Medicine} alt="" />
          </div>
          <div className="detail-box">
            <p className="text-center ">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it
            </p>
            <div className="d-flex justify-content-center">
              <Link to="">Read More</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
