import React, { useState } from 'react';
import cert1 from '../assets/cert1.png';
import cert2 from '../assets/cert2.png';
import cert3 from '../assets/cert3.png';
import cert4 from '../assets/cert4.png';
import cert5 from '../assets/cert5.png';
import cert6 from '../assets/cert6.png';

const Certificates = () => {
    const [zoomImg, setZoomImg] = useState(null);

    const certificates = [
        { title: "RoHS Compliance", image: cert1, desc: "Environmentally Safe Standard" },
        { title: "Physical Test Report", image: cert2, desc: "Material Durability Verified" },
        { title: "Sudhakar Irrigation - TUV", image: cert3, desc: "TUV Sud Certified" },
        { title: "CIPET Test Result", image: cert4, desc: "Polymer Engineering Standard" },
        { title: "CIPET Part 2", image: cert5, desc: "Extended Material Testing" },
        { title: "SKZ Test Report", image: cert6, desc: "German Quality Standard" }
    ];

    return (
        <section id="certificates" className="certificates">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">Quality Assurance</span>
                    <h2>Our Certifications</h2>
                    <p>Verified excellence and compliance with international standards</p>
                </div>

                <div className="certificates-grid">
                    {certificates.map((cert, index) => (
                        <div key={index} className="cert-card" onClick={() => setZoomImg(cert.image)}>
                            <div className="cert-image-wrapper">
                                <img src={cert.image} alt={cert.title} />
                                <div className="cert-overlay">
                                    <span>🔍 View</span>
                                </div>
                            </div>
                            <div className="cert-info">
                                <h3>{cert.title}</h3>
                                <p>{cert.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {zoomImg && (
                <div className="modal-overlay" onClick={() => setZoomImg(null)}>
                    <div className="modal-content cert-modal">
                        <button className="modal-close" onClick={() => setZoomImg(null)}>&times;</button>
                        <img src={zoomImg} alt="Certificate" style={{ width: '100%', height: 'auto', borderRadius: '0.5rem' }} />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Certificates;
