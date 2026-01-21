import React, { useRef, useState } from "react";

import casementImage from "../assets/product-casement.png";
import slidingImage from "../assets/product-sliding.png";
import french from "../assets/french doors.png";
import tiltturn from "../assets/tilt-and-turn-window.png";
import fixedwindow from "../assets/fixed windows.jpeg";
import liftandslide from "../assets/lift and slide doors.jpg";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const sliderRef = useRef(null);

  const products = [
    {
      title: "Sliding Systems",
      description:
        "Heavy duty systems for wide openings in homes, villas, and high-rise buildings.",
      features: [
        "2T, 2.5T & 3T options",
        "Bug mesh shutter available",
        "Aluminum smooth track",
        "Prima, Eco & Royal Series",
      ],
      recommendedFor: ["Homes", "Villas", "Apartments"],
      image: slidingImage,
      specifications: [
        "Glass thickness: 5mm–24mm",
        "Low threshold option",
        "Integrated mosquito mesh",
      ],
    },
    {
      title: "Casement Windows",
      description:
        "Premium inward & outward opening windows with excellent sealing and insulation.",
      features: [
        "90° sash opening",
        "Multipoint locking",
        "Double weather seal",
        "High wind resistance",
      ],
      recommendedFor: ["Homes", "Commercial Buildings"],
      image: casementImage,
      specifications: [
        "Glass thickness: 5mm–38mm",
        "Euro groove hardware",
        "Steel reinforcement",
      ],
    },
    {
      title: "Tilt & Turn Windows",
      description:
        "Dual-function windows offering tilt ventilation and full opening.",
      features: [
        "Tilt ventilation",
        "Full turn opening",
        "European hardware",
        "High security locks",
      ],
      recommendedFor: ["Apartments", "High-Rise Buildings"],
      image: tiltturn,
      specifications: [
        "Multi-locking points",
        "Heavy duty hinges",
        "Double glazing support",
      ],
    },
    {
      title: "Fixed Windows",
      description:
        "Non-operable windows designed for maximum light and modern aesthetics.",
      features: [
        "Maximum glass area",
        "Minimal frame design",
        "Low maintenance",
        "Cost effective",
      ],
      recommendedFor: ["Showrooms", "Commercial Spaces"],
      image: fixedwindow,
      specifications: [
        "Single & double glazing",
        "UV resistant profiles",
        "Custom sizes available",
      ],
    },
    {
      title: "French Doors",
      description:
        "Elegant double door systems offering wide openings and premium appearance.",
      features: [
        "Wide opening design",
        "Multipoint locking",
        "Heavy duty hinges",
        "Premium handles",
      ],
      recommendedFor: ["Villas", "Luxury Homes"],
      image: french,
      specifications: [
        "Toughened glass support",
        "High wind load resistance",
        "Custom color options",
      ],
    },
    {
      title: "Lift & Slide Doors",
      description:
        "Advanced sliding systems for very large openings with effortless movement.",
      features: [
        "Lift mechanism",
        "Extra-large shutters",
        "Premium rollers",
        "Noise-free sliding",
      ],
      recommendedFor: ["Luxury Villas", "Resorts"],
      image: liftandslide,
      specifications: [
        "Glass thickness up to 42mm",
        "High load bearing rollers",
        "Low threshold option",
      ],
    },
  ];

  const scrollSlider = (dir) => {
    sliderRef.current.scrollBy({
      left: dir === "right" ? 380 : -380,
      behavior: "smooth",
    });
  };

  const openProduct = (product) => {
    setSelectedProduct(product);
    localStorage.setItem("selectedProduct", product.title);
    console.log("Viewed product:", product.title);
  };

  const goToEnquiry = () => {
    setSelectedProduct(null);
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section id="products" className="products">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Product Range</span>
            <h2>Premium uPVC Systems</h2>
            <p>Powered by high-quality Sudhakar Profiles</p>
          </div>

          <div className="products-slider-header">
            <button className="slider-btn" onClick={() => scrollSlider("left")}>
              ‹
            </button>
            <button className="slider-btn" onClick={() => scrollSlider("right")}>
              ›
            </button>
          </div>

          <div className="products-slider" ref={sliderRef}>
            {products.map((product, i) => (
              <div key={i} className="product-card slider-card">
                <div
                  className="product-image"
                  style={{ backgroundImage: `url(${product.image})` }}
                />

                <div className="product-content">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>

                  <ul className="product-features">
                    {product.features.map((f, idx) => (
                      <li key={idx}>✓ {f}</li>
                    ))}
                  </ul>

                  <button
                    className="btn btn-primary btn-full"
                    onClick={() => openProduct(product)}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT MODAL */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedProduct(null)}
            >
              &times;
            </button>

            <h2>{selectedProduct.title}</h2>

            <div className="modal-section">
              <h3>Technical Specifications</h3>
              <ul className="spec-list">
                {selectedProduct.specifications.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>

            <div className="modal-section">
              <h3>Recommended For</h3>
              <ul className="benefits-list">
                {selectedProduct.recommendedFor.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <button className="btn btn-primary" onClick={goToEnquiry}>
                Enquire for {selectedProduct.title}
              </button>

              <a
                href="/catalogue.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Download Catalogue
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
