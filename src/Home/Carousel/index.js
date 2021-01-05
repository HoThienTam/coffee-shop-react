import React, { useState, useRef, useEffect } from "react";
import ArrowButton from "./ArrowButton";
import { Slider, SliderContent, Slide } from "./styles";

const Carousel = (props) => {
  const { slides } = props;

  const firstSlide = slides[0];
  const secondSlide = slides[1];
  const lastSlide = slides[slides.length - 1];

  const [activeSlide, setActiveSlide] = useState(0);
  const [translate, setTranslate] = useState(window.innerWidth);
  const [transition, setTransition] = useState(0.6);
  const [slideArr, setSlideArr] = useState([
    lastSlide,
    firstSlide,
    secondSlide,
  ]);

  const sliderRef = useRef();
  const transitionRef = useRef();

  useEffect(() => {
    transitionRef.current = smoothTransition;
  });

  useEffect(() => {
    const slider = sliderRef.current;

    const smooth = (e) => {
      if (e.target.className.includes("SliderContent")) {
        transitionRef.current();
      }
    };

    const transitionEnd = slider.addEventListener("transitionend", smooth);

    return () => {
      slider.removeEventListener("transitionend", transitionEnd);
    };
  }, []);

  const smoothTransition = () => {
    let _slides = [];

    if (activeSlide === slides.length - 1)
      _slides = [slides[slides.length - 2], lastSlide, firstSlide];
    else if (activeSlide === 0) _slides = [lastSlide, firstSlide, secondSlide];
    else _slides = slides.slice(activeSlide - 1, activeSlide + 2);

    setSlideArr(_slides);
    setTranslate(window.innerWidth);
    setTransition(0);
  };

  useEffect(() => {
    if (transition === 0) setTransition(0.6);
  }, [transition]);

  const nextSlide = () => {
    setTranslate(translate + window.innerWidth);
    setActiveSlide(activeSlide === slides.length - 1 ? 0 : activeSlide + 1);
  };

  const prevSlide = () =>{
    setTranslate(0);
    setActiveSlide(activeSlide === 0 ? slides.length - 1 : activeSlide - 1);
  }

  return (
    <Slider ref={sliderRef}>
      <SliderContent
        className="SliderContent"
        width={window.innerWidth * slideArr.length}
        translate={translate}
        transition={transition}
      >
        {slideArr.map((_slide, i) => (
          <Slide width={window.innerWidth} key={_slide + i} content={_slide} />
        ))}
      </SliderContent>
      <ArrowButton direction="left" handleClick={prevSlide} />
      <ArrowButton direction="right" handleClick={nextSlide} />
    </Slider>
  );
};

export default Carousel;
