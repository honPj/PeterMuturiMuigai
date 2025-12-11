import React from 'react';
import { FaHeart, FaArrowUp, FaCopyright, FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerStyles: React.CSSProperties = {
    backgroundColor: 'var(--color-surface)',
    borderTop: '1px solid var(--color-border)',
    padding: '2rem 0 1.5rem',
    position: 'relative' as const,
  };

  const contentStyles: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1.5rem',
  };

  const topSectionStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    marginBottom: '2rem',
  };

  const leftColumnStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1.25rem',
  };

  const rightColumnStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2rem',
  };

  const titleStyles: React.CSSProperties = {
    fontSize: '1.3rem',
    color: 'var(--color-primary)',
    fontWeight: '700',
    marginBottom: '0.75rem',
    letterSpacing: '-0.5px',
  };

  const textStyles: React.CSSProperties = {
    color: 'var(--color-text-light)',
    fontSize: '1rem',
    lineHeight: 1.6,
    maxWidth: '400px',
  };

  const contactItemStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '0.75rem',
    fontSize: '1rem',
    color: 'var(--color-text-light)',
    transition: 'color 0.2s ease',
  };

  const contactIconStyles: React.CSSProperties = {
    color: 'var(--color-accent)',
    minWidth: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const socialContainerStyles: React.CSSProperties = {
    display: 'flex',
    gap: '1rem',
    marginTop: '1rem',
  };

  const socialLinkStyles: React.CSSProperties = {
    width: '42px',
    height: '42px',
    backgroundColor: 'var(--color-background)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--color-text)',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    border: '1px solid var(--color-border)',
    fontSize: '1.1rem',
  };

  const dividerStyles: React.CSSProperties = {
    height: '1px',
    backgroundColor: 'var(--color-border)',
    margin: '2rem 0',
  };

  const bottomSectionStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap' as const,
    gap: '1.5rem',
  };

  const copyrightStyles: React.CSSProperties = {
    color: 'var(--color-text-light)',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    flexWrap: 'wrap' as const,
    fontWeight: 500,
  };

  const backToTopStyles: React.CSSProperties = {
    backgroundColor: 'var(--color-accent)',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '48px',
    height: '48px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    fontSize: '1.1rem',
  };

  const availabilityItemStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '0.5rem',
    fontSize: '0.95rem',
    color: 'var(--color-text)',
  };

  return (
    <footer style={containerStyles}>
      <div style={contentStyles}>
        <div style={topSectionStyles}>
          {/* Left Column - About & Social */}
          <div style={leftColumnStyles}>
            <h3 style={titleStyles}>Peter Muturi Muigai</h3>
            <p style={textStyles}>
              Full Stack Developer & IT Specialist passionate about building innovative web solutions, 
              AI integration, and delivering exceptional user experiences.
            </p>
            <div style={socialContainerStyles}>
              <a 
                href="https://github.com/honPj" 
                target="_blank" 
                rel="noopener noreferrer"
                style={socialLinkStyles}
                aria-label="GitHub"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-accent)';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.borderColor = 'var(--color-accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-background)';
                  e.currentTarget.style.color = 'var(--color-text)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                }}
              >
                <FaGithub />
              </a>
              <a 
                href="www.linkedin.com/in/peter-muturi-303089306" 
                style={socialLinkStyles}
                aria-label="LinkedIn"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#0077b5';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.borderColor = '#0077b5';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-background)';
                  e.currentTarget.style.color = 'var(--color-text)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                }}
              >
                <FaLinkedin />
              </a>
              <a 
                href="mailto:muigaipeter61@gmail.com" 
                style={socialLinkStyles}
                aria-label="Email"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#ea4335';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.borderColor = '#ea4335';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-background)';
                  e.currentTarget.style.color = 'var(--color-text)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                }}
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Right Column - Split into 2 columns */}
          <div style={rightColumnStyles}>
            {/* Contact Section */}
            <div>
              <h4 style={titleStyles}>Get In Touch</h4>
              <div>
                <a 
                  href="mailto:muigaipeter61@gmail.com" 
                  style={{ textDecoration: 'none' }}
                >
                  <div 
                    style={contactItemStyles}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--color-accent)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--color-text-light)';
                    }}
                  >
                    <div style={contactIconStyles}>
                      <FaEnvelope size={16} />
                    </div>
                    <span>muigaipeter61@gmail.com</span>
                  </div>
                </a>
                
                <a 
                  href="tel:+254703551225" 
                  style={{ textDecoration: 'none' }}
                >
                  <div 
                    style={contactItemStyles}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--color-accent)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--color-text-light)';
                    }}
                  >
                    <div style={contactIconStyles}>
                      <FaPhone size={16} />
                    </div>
                    <span>+254 703 551 225</span>
                  </div>
                </a>
                
                <div style={contactItemStyles}>
                  <div style={contactIconStyles}>
                    <FaMapMarkerAlt size={16} />
                  </div>
                  <span>Embu, Kenya</span>
                </div>
              </div>
            </div>

            {/* Availability Section - Now on the right side */}
            <div>
              <h4 style={titleStyles}>Availability</h4>
              <div style={{ marginTop: '0.5rem' }}>
                <div style={availabilityItemStyles}>
                  <FaCheckCircle style={{ color: 'var(--color-accent)' }} />
                  <span>Remote Projects</span>
                </div>
                <div style={availabilityItemStyles}>
                  <FaCheckCircle style={{ color: 'var(--color-accent)' }} />
                  <span>On-site Work</span>
                </div>
                <div style={availabilityItemStyles}>
                  <FaCheckCircle style={{ color: 'var(--color-accent)' }} />
                  <span>Freelance</span>
                </div>
                <div style={availabilityItemStyles}>
                  <FaCheckCircle style={{ color: 'var(--color-accent)' }} />
                  <span>Full-time</span>
                </div>
                <div style={availabilityItemStyles}>
                  <FaCheckCircle style={{ color: 'var(--color-accent)' }} />
                  <span>Contract</span>
                </div>
                <div style={availabilityItemStyles}>
                  <FaCheckCircle style={{ color: 'var(--color-accent)' }} />
                  <span>Open to Collaborate</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={dividerStyles}></div>

        <div style={bottomSectionStyles}>
          <div style={copyrightStyles}>
            <FaCopyright size={16} />
            <span>{currentYear} Peter Muturi Muigai. All rights reserved.</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              • Made with <FaHeart size={14} color="#ef4444" /> in Kenya
            </span>
          </div>

          <button 
            onClick={scrollToTop} 
            style={backToTopStyles} 
            aria-label="Back to top"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
              e.currentTarget.style.backgroundColor = 'var(--color-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.backgroundColor = 'var(--color-accent)';
            }}
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;