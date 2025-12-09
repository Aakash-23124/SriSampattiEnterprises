import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '2rem', textAlign: 'left' }}>
                    <div>
                        <h3 style={{ color: 'var(--white)', marginBottom: '1rem' }}>Sri Sampatti Enterprises Pvt Ltd</h3>
                        <p style={{ color: '#cbd5e1' }}>Premium uPVC Windows & Doors for Every Space.</p>
                    </div>
                    <div>
                        <h4 style={{ color: 'var(--white)', marginBottom: '1rem' }}>Factory Address</h4>
                        <p style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>
                            Sy No. 382 (P) Pleasant Hills, Himayatsagar Road<br />
                            (Near to Outer Ring Road, Exit No. 17)<br />
                            Rajendranagar, Hyderabad 500030, Telangana
                        </p>
                    </div>
                    <div>
                        <h4 style={{ color: 'var(--white)', marginBottom: '1rem' }}>Contact Us</h4>
                        <p style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>
                            Phone: +91 95151 04922 / +91 94833 33456<br />
                            Email: info@srisampatti.com
                        </p>
                    </div>
                </div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', textAlign: 'center' }}>
                    <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>&copy; 2025 Sri Sampatti Enterprises Pvt Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
