import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/headers/Header";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import CoustomSlider from '../../components/reactslider/CustomSlider'

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <Navbar />
      {/* <CoustomSlider /> */}
      <div style={{ height: "content-fit" }}>
        <Slider />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
