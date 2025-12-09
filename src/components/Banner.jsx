import React from 'react';

const Banner = () => {
    return (
        <section className="cta-banner" style={{
            background: 'linear-gradient(135deg, var(--secondary-color) 0%, #0f172a 100%)',
            padding: '3.5rem 0',
            color: '#fff',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div className="container" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '1.5rem',
                position: 'relative',
                zIndex: 1
            }}>
                <div className="banner-content">
                    <h2 style={{
                        color: '#fff',
                        fontSize: '2rem',
                        marginBottom: '0.5rem'
                    }}>Ready to Upgrade Your Space?</h2>
                    <p style={{
                        color: '#cbd5e1',
                        fontSize: '1.1rem',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        Get a free consultation and quote for your premium uPVC window and door systems today.
                    </p>
                </div>
                <a href="#contact" className="btn" style={{
                    backgroundColor: 'var(--primary-color)',
                    color: '#fff',
                    padding: '1rem 2.5rem',
                    fontSize: '1.1rem',
                    borderRadius: '50px',
                    boxShadow: '0 4px 15px rgba(37, 99, 235, 0.4)',
                    transition: 'transform 0.3s ease'
                }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                    Get Free Quote
                </a>
            </div>
            {/* Decorative background elements */}
            <div style={{
                position: 'absolute',
                top: '-50%',
                left: '-10%',
                width: '300px',
                height: '300px',
                background: 'rgba(37, 99, 235, 0.1)',
                borderRadius: '50%',
                filter: 'blur(50px)'
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '-50%',
                right: '-10%',
                width: '300px',
                height: '300px',
                background: 'rgba(37, 99, 235, 0.1)',
                borderRadius: '50%',
                filter: 'blur(50px)'
            }}></div>
        </section>
    );
};

export default Banner;
