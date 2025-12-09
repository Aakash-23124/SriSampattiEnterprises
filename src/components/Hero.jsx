import React, { useState, useEffect } from 'react';
import heroImage from '../assets/hero-image.jpg';
import factoryImage from '../assets/factory.png';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: heroImage,
            subtitle: "Authorized Fabricator of Sudhakar Profiles",
            title: "Premium uPVC Windows & Doors",
            desc: "Transforming spaces with German technology and superior craftsmanship.",
            isProduct: false
        },
        {
            image: factoryImage,
            subtitle: "State-of-the-Art Manufacturing",
            title: "Advanced Fabrication Unit",
            desc: "Precision engineering at our dedicated facility in Hyderabad.",
            isProduct: false
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <p className="lead-text" style={{
                        color: 'var(--primary-color)',
                        fontWeight: '600',
                        fontSize: '1.2rem',
                        marginBottom: '1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}>
                        {slides[currentSlide].subtitle}
                    </p>
                    <h1 className="hero-title-anim">{slides[currentSlide].title}</h1>
                    <p className="hero-desc-anim">
                        {slides[currentSlide].desc}
                    </p>
                    <p className="company-desc">
                        Sri Sampatti Enterprises Pvt Ltd provides end-to-end uPVC solutions,
                        specializing in high-quality systems for homes and high-rises.
                    </p>
                    <div className="hero-btns">
                        <a href="#contact" className="btn btn-primary">Request Free Quote</a>
                        <a href="#products" className="btn btn-outline">View Products</a>
                    </div>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">Authorized</span>
                            <span className="stat-label">Fabricator</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">German</span>
                            <span className="stat-label">Technology</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">15+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                    </div>
                </div>
                <div className="hero-image-slider">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`slide-item ${index === currentSlide ? 'active' : ''}`}
                            style={{
                                backgroundImage: slide.isProduct ? `radial-gradient(circle, #f8fafc 0%, #e2e8f0 100%)` : 'none'
                            }}
                        >
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className={slide.isProduct ? 'product-slide-img' : ''}
                            />
                        </div>
                    ))}
                    <div className="slider-dots">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => setCurrentSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
