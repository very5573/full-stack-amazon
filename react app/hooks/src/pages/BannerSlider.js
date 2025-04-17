import React, { useState, useEffect, useRef } from "react";
import bannerImages from "../data/bannerImages";
import "../style/banner.css";

function BannerSlider() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % bannerImages.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  };

  // Auto Slide Effect
  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % bannerImages.length);
    }, 4000); // 4 seconds
  };

  const pauseAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div
      className="banner-slider"
      onMouseEnter={pauseAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      <img src={bannerImages[index]} alt={`Banner ${index + 1}`} className="banner-image" />
      
      <button className="arrow left" onClick={prevSlide}>❮</button>
      <button className="arrow right" onClick={nextSlide}>❯</button>
    </div>
  );
}

export default BannerSlider;
