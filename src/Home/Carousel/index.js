import React, { useState, useRef, useEffect } from "react";
import ArrowButton from "./ArrowButton";
import { Slider, SliderContent, Slide } from "./styles";

const Carousel = (props) => {
  const { slides } = props;

  const firstSlide = slides[0];
  const secondSlide = slides[1];
  const lastSlide = slides[slides.length - 1];

  const [state, setState] = useState({
    activeSlide: 0,
    translate: window.innerWidth,
    _slides: [lastSlide, firstSlide, secondSlide],
  });

  const { activeSlide, translate, _slides } = state;

  const sliderRef = useRef();

  const nextSlide = () =>
    setState({
      ...state,
      translate: translate + window.innerWidth,
      activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1,
    });

  const prevSlide = () =>
    setState({
      ...state,
      translate: 0,
      activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1,
    });

  return (
    <Slider ref={sliderRef}>
      <SliderContent width={window.innerWidth * _slides.length} translate={translate}>
        {_slides.map((_slide, i) => (
          <Slide width={window.innerWidth} key={_slide + i} content={_slide} />
        ))}
      </SliderContent>
      <ArrowButton direction="left" handleClick={prevSlide} />
      <ArrowButton direction="right" handleClick={nextSlide} />
    </Slider>
  );
};

export default Carousel;
