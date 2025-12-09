import React from 'react';

const ProfileSVG = ({ type, color, gradient }) => {
    const fillStyle = type === 'wood' ? { backgroundImage: gradient } : { backgroundColor: color };

    // We use a mask/clipping approach or simple SVG usage.
    // For React/CSS simplicity, we'll apply the gradient to a div and mask it with SVG, 
    // OR just use SVG definitions for gradients.

    // Simpler approach: SVG with defs for gradients unique to each instance is hard in loop without unique IDs.
    // We will use style={{ fill: 'url(#id)' }} approach with unique IDs.
    const id = `grad-${color.replace(/\s+/g, '-').toLowerCase()}`;

    return (
        <svg viewBox="0 0 100 120" className="profile-icon" style={{ width: '100%', height: '180px', filter: 'drop-shadow(0px 10px 10px rgba(0,0,0,0.2))' }}>
            <defs>
                {type === 'wood' ? (
                    <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={gradient[0]} />
                        <stop offset="50%" stopColor={gradient[1]} />
                        <stop offset="100%" stopColor={gradient[2]} />
                    </linearGradient>
                ) : (
                    <linearGradient id={id} x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor={color} />
                        <stop offset="100%" stopColor={color} />
                    </linearGradient>
                )}
                {/* Glass Gradient */}
                <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.8" />
                </linearGradient>
            </defs>

            {/* Main Profile Shape (L-Section corner) */}
            <path
                d="M20,10 L80,10 L80,100 L70,100 L70,30 L20,30 Z"
                fill={`url(#${id})`}
                stroke="rgba(0,0,0,0.1)"
                strokeWidth="1"
            />
            {/* Internal Chamber details (lines) */}
            <path d="M70,30 L80,10" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <path d="M75,30 L75,100" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />

            {/* Glazing Bead / Glass Holder */}
            <path d="M30,30 L30,25 L65,25 L65,30" fill={`url(#${id})`} />

            {/* Glass Representation */}
            <path d="M35,30 L35,90 L60,90 L60,30 Z" fill="url(#glassGrad)" stroke="#cbd5e1" />

            {/* Side Shine (Highlight) */}
            <path d="M20,10 L25,10 L25,30 L20,30 Z" fill="rgba(255,255,255,0.2)" />
            <path d="M75,10 L80,10 L80,100 L75,100 Z" fill="rgba(0,0,0,0.2)" />
        </svg>
    );
};

const ColorProfiles = () => {
    const profiles = [
        {
            name: "Golden Oak",
            type: "wood",
            colors: ["#cea04a", "#a06f28", "#5a3a10"]
        },
        {
            name: "Dark Oak",
            type: "wood",
            colors: ["#5d4037", "#3e2723", "#281712"]
        },
        {
            name: "Walnut",
            type: "wood",
            colors: ["#795548", "#5d4037", "#3e2723"]
        },
        {
            name: "Mahogany",
            type: "wood",
            colors: ["#be5639", "#8d3018", "#571606"]
        },
        {
            name: "Anthracite Grey",
            type: "solid",
            colors: "#374151" // Hex string for solid
        },
        {
            name: "Jet Black",
            type: "solid",
            colors: "#111827"
        }
    ];

    return (
        <section id="color-profiles" className="color-profiles">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">Aesthetics</span>
                    <h2>Color Profile Options</h2>
                    <p>Premium German laminates available in authentic wood textures and modern solids</p>
                </div>

                <div className="colors-grid">
                    {profiles.map((profile, index) => {
                        const bgStyle = profile.type === 'wood'
                            ? `linear-gradient(135deg, ${profile.colors[0]}, ${profile.colors[1]})`
                            : profile.colors;

                        return (
                            <div
                                key={index}
                                className="color-card-ref"
                                style={{ '--hover-bg': bgStyle }}
                            >
                                <div className="profile-visual">
                                    <ProfileSVG
                                        type={profile.type}
                                        color={profile.type === 'solid' ? profile.colors : profile.name}
                                        gradient={profile.type === 'wood' ? profile.colors : null}
                                    />
                                </div>
                                <div className="color-info">
                                    <h3>{profile.name}</h3>
                                    <div className="texture-swatch" style={{
                                        background: bgStyle
                                    }}></div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="color-note" style={{ marginTop: '3rem' }}>
                    <p>
                        <strong>Note:</strong> Laminations available in single or double-sided combinations.
                        UV resistant and tested for extreme Indian climatic conditions.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ColorProfiles;
