"use client";
import { useEffect, useRef, useState } from "react";

const images = ["/img/carousel/home.png","/img/carousel/login.png","/img/carousel/dashboard.png","/img/carousel/donation.png","/img/carousel/razorpay.png"]


export default function ImageCarousel() {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const total = images.length;

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      const next = (activeIndex + 1) % total;
      scrollToSlide(next);
      setActiveIndex(next);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const scrollToSlide = (index) => {
    const container = carouselRef.current;
    container.scrollTo({
      left: index * container.offsetWidth,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const container = carouselRef.current;
    const index = Math.round(
      container.scrollLeft / container.offsetWidth
    );
    setActiveIndex(index);
  };

  return (
    <div className="carousel-wrapper absolute scale-55 -top-7 md:scale-85 md:top-7">
      <div
        ref={carouselRef}
        onScroll={handleScroll}
        className="carousel"
      >
        {images.map((img, index) => (
          <div className="carousel-slide" key={index}>
            <img src={img} alt="" />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="dots">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`dot ${activeIndex === index ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
