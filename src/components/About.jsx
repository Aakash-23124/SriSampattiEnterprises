import React from 'react';
import factoryImage from '../assets/factory.png';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container about-container">
                <div className="about-content">
                    <h2>About Sri Sampatti Enterprises</h2>
                    <p className="lead">Authorized Fabricator of Sudhakar Profiles</p>
                    <p>Sri Sampatti Enterprises Pvt Ltd is a trusted name in Hyderabad's urban development and construction sector. We specialize in fabricating high-quality uPVC window and door systems using premium <strong>Sudhakar Profiles</strong>, designed for the harsh Indian climate.</p>
                    <p>From homes and villas to high-rise buildings and commercial complexes, we provide end-to-end solutions including site visits, precise measurements, fabrication, and professional installation. Our profiles are <strong>Lead-Free</strong>, <strong>RoHS Compliant</strong>, and manufactured using German technology to withstand high UV radiation without discoloration.</p>
                    <div className="about-stats">
                        <div className="stat">
                            <strong>Authorized</strong>
                            <span>Fabricator</span>
                        </div>
                        <div className="stat">
                            <strong>German</strong>
                            <span>Technology</span>
                        </div>
                        <div className="stat">
                            <strong>RoHS</strong>
                            <span>Compliant</span>
                        </div>
                    </div>
                </div>
                <div className="about-image">
                    <img src={factoryImage} alt="Sri Sampatti Factory" style={{ width: '100%', height: '500px', objectFit: 'cover', borderRadius: '1rem' }} />
                </div>
            </div>
        </section>
    );
};

export default About;
