import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../../Styles/Landing/slider1.css";

const products = [
  {
    image: "https://th.bing.com/th/id/OIP.OalaXqB9hYVo4LPdIzCK3QHaEo?w=313&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    title: "Himalaya Liv.52 Tablets - 100'S",
    price: "₹799.00",
    oldPrice: "₹1,799.00",
    discount: "56% off",
    bought: "200+ bought in past month",
  },
  {
    image: "https://th.bing.com/th/id/OIP.OalaXqB9hYVo4LPdIzCK3QHaEo?w=313&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    title: "Pee Buddy - Female Urination Device",
    price: "₹215.00",
    oldPrice: "₹2,444.00",
    discount: "76% off",
    bought: "300+ bought in past month",
  },
  {
    image: "https://th.bing.com/th/id/OIP.OalaXqB9hYVo4LPdIzCK3QHaEo?w=313&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    title: "Medical Kit Box",
    price: "₹156.00",
    oldPrice: "₹599.00",
    discount: "74% off",
    bought: "10K+ bought in past month",
  },
  {
    image: "https://th.bing.com/th/id/OIP.OalaXqB9hYVo4LPdIzCK3QHaEo?w=313&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    title: "First Aid Box",
    price: "₹150.00",
    oldPrice: "₹999.00",
    discount: "74% off",
    bought: "1K+ bought in past month",
  },
  {
    image: "https://th.bing.com/th/id/OIP.OalaXqB9hYVo4LPdIzCK3QHaEo?w=313&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    title: "Himalaya Herbal Medicine",
    price: "₹156.00",
    oldPrice: "₹599.00",
    discount: "74% off",
    bought: "3K+ bought in past month",
  },
  {
    image: "https://th.bing.com/th/id/OIP.OalaXqB9hYVo4LPdIzCK3QHaEo?w=313&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    title: "Pharmaceutical Medicine",
    price: "₹156.00",
    oldPrice: "₹599.00",
    discount: "74% off",
    bought: "6K+ bought in past month",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 4 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } },
  ],
};

const ProductSlider1 = () => {
  return (
    <div className="product-slider">
      <h2 className="slider-heading">Daily Essentials</h2>
      <Slider {...sliderSettings}>
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p className="price">
              <span className="current">{product.price}</span>
              {product.oldPrice && <span className="old-price">{product.oldPrice}</span>}
            </p>
            {product.discount && <p className="discount">{product.discount}</p>}
            <p className="bought">{product.bought}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider1;
