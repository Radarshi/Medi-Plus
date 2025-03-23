import { useEffect, useRef, useState } from "react";
import "../../Styles/Landing/header.css";

const slides = [
  { image: "https://th.bing.com/th/id/OIP.UuADjuko5CI8R0dhYD-U3AHaED?w=292&h=183&c=7&r=0&o=5&dpr=1.5&pid=1.7", text: "Flat 20% off on all medicines!" },
  { image: "https://th.bing.com/th/id/OIP.lizUcgQX94VAaB7HxV3KoAHaHa?w=195&h=196&c=7&r=0&o=5&dpr=1.5&pid=1.7", text: "Buy 1 Get 1 Free on Health Supplements!" },
  { image: "https://th.bing.com/th/id/OIP.dwtNUuI-tS_j-Ri4a3S3aAHaE7?w=247&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7", text: "Exclusive Discounts on Essentials!" },
  { image: "https://th.bing.com/th/id/OIP.9EjmWbeIQtXiz1jBY3VnFQHaDt?w=316&h=175&c=7&r=0&o=5&dpr=1.5&pid=1.7", text: "Upto 30% Off on Personal Care Products!" },
  { image: "https://th.bing.com/th/id/OIP.itasj6bqAZ-NjM8fodgakgHaFj?w=258&h=193&c=7&r=0&o=5&dpr=1.5&pid=1.7", text: "Best Quality Ayurvedic Products Now Available!" },
  { image: "https://th.bing.com/th/id/OIP.ybwnkqmQ32C0GmHlcJU6lgHaE7?w=301&h=201&c=7&r=0&o=5&dpr=1.5&pid=1.7", text: "Doctor Consultation ans Lab Tests are Now Available!" }
];

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayInterval = 5000;
  const sliderRef = useRef(null);
  let touchStartX = 0;
  let touchEndX = 0;

  // Auto-play logic with pause on hover
  useEffect(() => {
    if (!isPaused) {
      const slideTimer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, autoPlayInterval);

      return () => clearInterval(slideTimer);
    }
  }, [isPaused]);

  // Handle touch gestures for mobile
  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) {
      // Swipe left (next slide)
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    } else if (touchEndX - touchStartX > 50) {
      // Swipe right (previous slide)
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  return (
    <div
      className="slider-container"
      ref={sliderRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-text">{slide.text}</div>
        </div>
      ))}

      <button className="prev-btn" onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}>
        &#10094;
      </button>
      <button className="next-btn" onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}>
        &#10095;
      </button>

      <div className="indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Header;
