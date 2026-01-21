import React, { useState, useEffect } from 'react';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        location: '',
        requirement: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    /* 🔹 MOBILE DETECTION */
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const validate = () => {
        let tempErrors = {};

        if (!formData.name.trim()) {
            tempErrors.name = "Name is required";
        } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
            tempErrors.name = "Name should contain only letters and spaces";
        }

        if (!formData.phone.trim()) {
            tempErrors.phone = "Phone is required";
        } else if (!isValidPhoneNumber(formData.phone)) {
            tempErrors.phone = "Enter a valid phone number";
        }

        if (!formData.location.trim()) {
            tempErrors.location = "Location is required";
        }

        if (!formData.requirement.trim()) {
            tempErrors.requirement = "Requirement is required";
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        setErrors({ ...errors, [id]: '' });
    };

    const handlePhoneChange = (value) => {
        setFormData({ ...formData, phone: value || '' });
        setErrors({ ...errors, phone: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate() || isSubmitting) return;

        setIsSubmitting(true);
        console.log('Form submitted:', formData);

        setTimeout(() => {
            alert('Thank you for your message! We will get back to you soon.');
            setFormData({
                name: '',
                phone: '',
                location: '',
                requirement: ''
            });
            setErrors({});
            setIsSubmitting(false);
        }, 1200);
    };

    return (
        <>
            {/* 🔹 MOBILE FLOATING BUTTONS */}
            {isMobile && (
                <div className="mobile-call-buttons">
                    <a
                        href="tel:+919515104922"
                        className="mobile-call-floating"
                        aria-label="Call Us"
                    >
                        📞
                    </a>

                    <a
                        href="https://wa.me/919515104922"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mobile-call-floating"
                        style={{ bottom: '170px' }}
                        aria-label="WhatsApp Us"
                    >
                        💬
                    </a>
                </div>
            )}

            {/* CTA Banner */}
            <section className="cta-banner">
                <div className="container cta-container">
                    <h2>Ready to Transform Your Home?</h2>
                    <p>Get a free, no-obligation quote today and discover how much you could save.</p>
                    <div className="cta-btns">
                        <a href="#contact" className="btn btn-white">Request Free Quote</a>
                        <a href="tel:+919515104922" className="btn btn-outline-white">Call Us Now</a>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact">
                <div className="container contact-container">

                    {/* CONTACT INFO */}
                    <div className="contact-info">
                        <h2>Get In Touch</h2>
                        <p>Have questions? We're here to help. Contact us for expert advice.</p>

                        <div className="contact-item">
                            <div className="contact-text">
                                <h4>Phone</h4>
                                <p>+91 95151 04922 / +91 94833 33456</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-text">
                                <h4>Email</h4>
                                <p>info@srisampatti.com</p>
                            </div>
                        </div>

                        {/* ✅ FACTORY ADDRESS (ADDED) */}
                        <div className="contact-item">
                            <div className="contact-text">
                                <h4>Factory Address</h4>
                                <p>
                                    Sy No. 382 (P) Pleasant Hills, Himayatsagar Road
                                    (Near to Outer Ring Road, Exit No. 17),
                                    Rajendranagar, Hyderabad 500030, Telangana
                                </p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-text">
                                <h4>Business Hours</h4>
                                <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                            </div>
                        </div>
                    </div>

                    {/* CONTACT FORM */}
                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={handleSubmit}>

                            <div className="form-group">
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Full Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                    <label>Full Name</label>
                                </div>
                                {errors.name && <span className="error">{errors.name}</span>}
                            </div>

                            <div className="form-group">
                                <div className={`form-floating phone-floating ${formData.phone ? 'has-value' : ''}`}>
                                    <PhoneInput
                                        international
                                        defaultCountry="IN"
                                        value={formData.phone}
                                        onChange={handlePhoneChange}
                                    />
                                    <label>Phone Number</label>
                                </div>
                                {errors.phone && <span className="error">{errors.phone}</span>}
                            </div>

                            <div className="form-group">
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        id="location"
                                        placeholder="Location"
                                        value={formData.location}
                                        onChange={handleChange}
                                    />
                                    <label>Location</label>
                                </div>
                                {errors.location && <span className="error">{errors.location}</span>}
                            </div>

                            <div className="form-group">
                                <div className="form-floating">
                                    <textarea
                                        id="requirement"
                                        rows="4"
                                        placeholder="Your Requirement"
                                        value={formData.requirement}
                                        onChange={handleChange}
                                    />
                                    <label>Your Requirement</label>
                                </div>
                                {errors.requirement && <span className="error">{errors.requirement}</span>}
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary btn-full"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>

                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
