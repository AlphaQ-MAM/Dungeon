import React, { useEffect } from "react";
import M from "materialize-css";
import "./Carousel.css";

function Carousel(props) {
  useEffect(() => {
    var elems = document.querySelectorAll(".carousel.carousel-slider");
    M.Carousel.init(elems, {
      fullWidth: true,
      indicators: true,
 
    });
  }, []);

  return (
    <>
      <div class="carousel carousel-slider">
        <a class="carousel-item" href="#one!">
          <img src={props.f1} alt="tmp" />
        </a>
        <a class="carousel-item" href="#two!">
          <img src={props.f2} alt="tmp" />
        </a>
        <a class="carousel-item" href="#three!">
          <img src={props.f3} alt="tmo" />
        </a>
      </div>
    </>
  );
}

export default Carousel;
