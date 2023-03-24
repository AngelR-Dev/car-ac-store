import React from "react";
import './style/imgSlider.css'

const ImgSlider = () => {
  return (
    <>
      <div id="carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img src="./img/slider1.jpg" className="d-block w-100" alt="slider1" />
          </div>

          <div className="carousel-item" data-bs-interval="3000">
            <img src="./img/slider2.jpeg" className="d-block w-100" alts="slider2" />
          </div>

          <div className="carousel-item" data-bs-interval="3000">
            <img src="./img/slider3.jpg" className="d-block w-100" alt="slider3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default ImgSlider;
