import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import Header from "../../../Shared/Header/Header";
const Banner = () => {
  return (
    <div className="">
     
<div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full h-[600px]">
    <img src="https://ghorerbazar.com/cdn/shop/files/web-salider-mango.jpg?v=1715508940&width=1500" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full h-[600px]">
    <img src="https://img.freepik.com/free-vector/farm-scene-with-many-different-fruits-trees-sunset-time_1308-61810.jpg?size=626&ext=jpg&ga=GA1.1.1820910500.1709103481&semt=ais_user_b" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full h-[600px]">
    <img src="https://img.freepik.com/free-photo/lychee-background-garden_1150-12507.jpg?t=st=1716224325~exp=1716227925~hmac=3505859247f55aceaf36bb80562061b3b469b7d16477714e742e6195c28868b2&w=1060" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full h-[600px]">
    <img src="https://ghorerbazar.com/cdn/shop/files/web-salider-mango.jpg?v=1715508940&width=1500" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    </div>
  );
};

export default Banner;
