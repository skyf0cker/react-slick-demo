import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 4000,
    };
    return (
      <div>
        <h2>Auto Play</h2>
        <Slider waitForAnimate={false} {...settings}>
          <div className="card">
            <h3>1</h3>
          </div>
          <div className="card">
            <h3>2</h3>
          </div>
          <div className="card">
            <h3>3</h3>
          </div >
          <div className="card">
            <h3>4</h3>
          </div >
          <div className="card">
            <h3>5</h3>
          </div>
          <div className="card">
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}


