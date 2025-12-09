import React, { useState } from 'react';
import casementImage from '../assets/product-casement.png';
import slidingImage from '../assets/product-sliding.png';

const Products = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = [
        {
            title: "Sliding Systems",
            description: "Heavy duty sections for higher and wider openings. Ideal for homes, villas, and high-rise buildings.",
            features: [
                "✓ 2 track, 2.5 track, and 3 track options",
                "✓ Bug mesh shutter option available",
                "✓ Aluminum track for smooth operation",
                "✓ Available in Prima, Eco & Royal Series"
            ],
            image: slidingImage,
            detailedInfo: {
                series: [
                    { name: "Prima Series", profiles: "60mm, 68mm, 78mm", tracks: "2T, 2.5T, 3T" },
                    { name: "Eco Series", profiles: "68mm", tracks: "2T, 2.5T" },
                    { name: "Royal Series", profiles: "82mm, 88mm", tracks: "2T, 2.5T, 3T" }
                ],
                specifications: [
                    "Glass thickness: 5mm - 24mm",
                    "Aluminum track for smooth operations",
                    "Unique mosquito mesh inset",
                    "Hurricane bar for high-rise buildings",
                    "Heavy duty low threshold options"
                ],
                benefits: [
                    "Bigger slopes for Indian monsoon conditions",
                    "Multiple sash options available",
                    "Extra web support for stability",
                    "Provision of mosquito mesh for windows and doors"
                ]
            }
        },
        {
            title: "Casement Systems",
            description: "3 & 5 chamber systems with 60mm & 65mm depth. Perfect for residential and commercial applications with excellent sealing.",
            features: [
                "✓ 90° sash opening for easy cleaning",
                "✓ Sturdy multipoint locking mechanism",
                "✓ Double weather-stripping for noise reduction",
                "✓ Available in Prima & Royal Series"
            ],
            image: casementImage,
            detailedInfo: {
                series: [
                    { name: "Prima Series", depth: "60mm", chambers: "3-chamber system" },
                    { name: "Royal Series", depth: "65mm", chambers: "5-chamber system" }
                ],
                specifications: [
                    "Glass thickness: 5mm - 38mm",
                    "Outward opening with grill provision",
                    "Inward opening with mesh on 4-inch wall",
                    "Integral Euro groove for hardware fixing",
                    "Striker plates and friction hinges mounted in steel"
                ],
                benefits: [
                    "High energy saving",
                    "Maximum air tightness and noise reduction",
                    "90° sash opening for easy cleaning",
                    "Flat bottom surface for easy mounting"
                ]
            }
        },

    ];

    const openModal = (product) => {
        setSelectedProduct(product);
    };

    const closeModal = () => {
        setSelectedProduct(null);
    };

    return (
        <>
            <section id="products" className="products">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">Our Product Range</span>
                        <h2>Premium uPVC Systems</h2>
                        <p>Powered by high-quality Sudhakar Profiles for every need</p>
                    </div>
                    <div className="products-grid">
                        {products.map((product, index) => (
                            <div key={index} className="product-card">
                                <div className="product-image">
                                    <img src={product.image} alt={product.title} style={{ width: '100%', height: '400px', objectFit: 'contain' }} />
                                </div>
                                <div className="product-content">
                                    <h3>{product.title}</h3>
                                    <p>{product.description}</p>
                                    <ul className="product-features">
                                        {product.features.map((feature, idx) => (
                                            <li key={idx}>{feature}</li>
                                        ))}
                                    </ul>
                                    <button onClick={() => openModal(product)} className="btn btn-primary btn-full">Learn More</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {selectedProduct && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>&times;</button>
                        <h2>{selectedProduct.title}</h2>

                        <div className="modal-section">
                            <h3>Available Series</h3>
                            <div className="series-list">
                                {selectedProduct.detailedInfo.series.map((series, idx) => (
                                    <div key={idx} className="series-item">
                                        <h4>{series.name}</h4>
                                        {Object.entries(series).filter(([key]) => key !== 'name').map(([key, value]) => (
                                            <p key={key}><strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}</p>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="modal-section">
                            <h3>Technical Specifications</h3>
                            <ul className="spec-list">
                                {selectedProduct.detailedInfo.specifications.map((spec, idx) => (
                                    <li key={idx}>{spec}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="modal-section">
                            <h3>Key Benefits</h3>
                            <ul className="benefits-list">
                                {selectedProduct.detailedInfo.benefits.map((benefit, idx) => (
                                    <li key={idx}>{benefit}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Products;
