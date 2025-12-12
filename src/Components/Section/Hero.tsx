import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_INFO } from '../../Utils/constants';
import { FaGithub, FaLinkedin, FaDownload, FaCode, FaTools, FaRocket,  } from 'react-icons/fa';

const Hero: React.FC = () => {
  // Main container styles
  const sectionStyles: React.CSSProperties = {
    minHeight: '100vh',
    background: 'var(--hero-bg-gradient, linear-gradient(135deg, #0f172a 0%, #1e293b 100%))',
    position: 'relative',
    overflow: 'hidden',
    padding: '100px 0 80px',
    display: 'flex',
    alignItems: 'center',
  };

  const containerStyles: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'grid',
    gridTemplateColumns: '1.2fr 1fr',
    gap: '80px',
    alignItems: 'center',
    position: 'relative',
    zIndex: 2,
  };

  // Content styles
  const heroContentStyles: React.CSSProperties = {
    color: 'var(--hero-text-color, #f8fafc)',
  };

  const heroBadgeStyles: React.CSSProperties = {
    display: 'inline-block',
    background: 'var(--hero-badge-gradient, linear-gradient(90deg, #3b82f6, #8b5cf6))',
    color: 'white',
    padding: '8px 20px',
    borderRadius: '50px',
    fontSize: '0.9rem',
    fontWeight: 600,
    letterSpacing: '0.5px',
    marginBottom: '30px',
    animation: 'pulse 2s infinite',
  };

  const heroTitleStyles: React.CSSProperties = {
    fontSize: '3.5rem',
    fontWeight: 800,
    lineHeight: 1.1,
    marginBottom: '20px',
    background: 'var(--hero-title-gradient, linear-gradient(90deg, #f8fafc 60%, #cbd5e1 100%))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const accentTextStyles: React.CSSProperties = {
    color: 'var(--hero-accent-color, #60a5fa)',
    background: 'none',
    WebkitTextFillColor: 'var(--hero-accent-color, #60a5fa)',
  };

  const heroSubtitleStyles: React.CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: 'var(--hero-subtitle-color, #cbd5e1)',
    marginBottom: '30px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  };

  const heroDescriptionStyles: React.CSSProperties = {
    fontSize: '1.1rem',
    lineHeight: 1.8,
    color: 'var(--hero-description-color, #94a3b8)',
    marginBottom: '40px',
    maxWidth: '600px',
  };

  // Stats styles
  const heroStatsStyles: React.CSSProperties = {
    display: 'flex',
    gap: '30px',
    marginBottom: '40px',
    padding: '25px 0',
    borderTop: 'var(--stats-border-top, 1px solid rgba(148, 163, 184, 0.1))',
    borderBottom: 'var(--stats-border-bottom, 1px solid rgba(148, 163, 184, 0.1))',
  };

  const statItemStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const statNumberStyles: React.CSSProperties = {
    fontSize: '2rem',
    fontWeight: 700,
    color: 'var(--hero-stat-color, #60a5fa)',
    marginBottom: '5px',
  };

  const statLabelStyles: React.CSSProperties = {
    fontSize: '0.9rem',
    color: 'var(--hero-stat-label-color, #94a3b8)',
    fontWeight: 500,
  };

  // Button styles
  const heroButtonsStyles: React.CSSProperties = {
    display: 'flex',
    gap: '20px',
    marginBottom: '40px',
    flexWrap: 'wrap',
  };

  const baseButtonStyles: React.CSSProperties = {
    padding: '14px 32px',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 600,
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    border: 'none',
    cursor: 'pointer',
  };

  const btnPrimaryStyles: React.CSSProperties = {
    ...baseButtonStyles,
    background: 'var(--primary-btn-gradient, linear-gradient(90deg, #3b82f6, #6366f1))',
    color: 'white',
    boxShadow: '0 4px 20px rgba(var(--color-accent-rgb, 59, 130, 246), 0.4)',
  };

  const btnSecondaryStyles: React.CSSProperties = {
    ...baseButtonStyles,
    background: 'var(--secondary-btn-bg, rgba(99, 102, 241, 0.1))',
    color: 'var(--secondary-btn-color, #818cf8)',
    border: 'var(--secondary-btn-border, 1px solid rgba(99, 102, 241, 0.2))',
  };

  const btnOutlineStyles: React.CSSProperties = {
    ...baseButtonStyles,
    background: 'transparent',
    color: 'var(--outline-btn-color, #cbd5e1)',
    border: 'var(--outline-btn-border, 1px solid rgba(203, 213, 225, 0.3))',
  };

  // Social styles
  const heroSocialStyles: React.CSSProperties = {
    display: 'flex',
    gap: '20px',
    marginTop: '30px',
  };

  const socialLinkStyles: React.CSSProperties = {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    background: 'var(--social-bg, rgba(30, 41, 59, 0.8))',
    border: 'var(--social-border, 1px solid rgba(148, 163, 184, 0.2))',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--social-color, #cbd5e1)',
    fontSize: '1.2rem',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
  };

  // Image section styles
  const heroImageStyles: React.CSSProperties = {
    position: 'relative',
  };

  const imageWrapperStyles: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto',
  };

  const profileImageStyles: React.CSSProperties = {
    width: '100%',
    height: 'auto',
    borderRadius: '50%',
    position: 'relative',
    zIndex: 2,
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
    border: '4px solid rgba(var(--color-accent-rgb, 59, 130, 246), 0.3)',
  };

  const imageDecorationStyles: React.CSSProperties = {
    top: '20px',
    right: '-20px',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(45deg, var(--color-accent, #3b82f6), #8b5cf6)',
    borderRadius: '20px',
    opacity: 0.2,
    zIndex: 1,
  };

  // CV Download Links
  const cvGoogleDriveLink = 'https://drive.google.com/file/d/1TULXbQw0UPWSDkzYJJDwtj7olDv0Rvd5/view?usp=drive_link';
  const cvDirectDownloadLink = 'https://drive.google.com/uc?export=download&id=1TULXbQw0UPWSDkzYJJDwtj7olDv0Rvd5';

  // Floating elements
  const floatingElements = [
    { icon: <FaCode />, top: '10%', left: '5%', delay: '0s' },
    { icon: <FaTools />, top: '20%', right: '10%', delay: '0.5s' },
    { icon: <FaRocket />, bottom: '30%', left: '8%', delay: '1s' },
  ];

  // Hover effects
  const [hoverState, setHoverState] = React.useState({
    hireMe: false,
    viewProjects: false,
    downloadCV: false,
    github: false,
    linkedin: false,
  });

  const hoverEffects = {
    btnPrimary: {
      transform: 'translateY(-3px)',
      boxShadow: '0 8px 30px rgba(var(--color-accent-rgb, 59, 130, 246), 0.6)',
    },
    btnSecondary: {
      background: 'var(--secondary-btn-bg, rgba(99, 102, 241, 0.2))',
      transform: 'translateY(-3px)',
      borderColor: 'rgba(var(--color-accent-rgb, 99, 102, 241), 0.4)',
    },
    btnOutline: {
      background: 'rgba(var(--color-border-rgb, 203, 213, 225), 0.1)',
      transform: 'translateY(-3px)',
      borderColor: 'rgba(var(--color-border-rgb, 203, 213, 225), 0.5)',
    },
    socialLink: {
      background: 'var(--social-hover-bg, rgba(59, 130, 246, 0.2))',
      color: 'var(--social-hover-color, #60a5fa)',
      transform: 'translateY(-3px)',
      borderColor: 'var(--social-hover-border, rgba(96, 165, 250, 0.4))',
    },
  };

  const handleDownloadCV = () => {
    // Create a hidden link for download
    const link = document.createElement('a');
    link.href = cvDirectDownloadLink;
    link.download = 'Peter_Muturi_Muigai_CV.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Fallback: If download doesn't start, open the view link
    setTimeout(() => {
      window.open(cvGoogleDriveLink, '_blank', 'noopener,noreferrer');
    }, 1000);
  };

  return (
    <section style={sectionStyles}>
      {/* Floating background elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        zIndex: 1,
      }}>
        {floatingElements.map((element, index) => (
          <div key={index} style={{
            position: 'absolute',
            top: element.top,
            left: element.left,
            right: element.right,
            bottom: element.bottom,
            fontSize: '2rem',
            color: 'rgba(var(--color-accent-rgb, 59, 130, 246), 0.1)',
            animation: `float 6s ease-in-out ${element.delay} infinite`,
          }}>
            {element.icon}
          </div>
        ))}
      </div>

      <div style={containerStyles}>
        <div style={heroContentStyles}>
          <span style={heroBadgeStyles}>Full Stack Developer</span>
          <h1 style={heroTitleStyles}>
            Peter Muturi <span style={accentTextStyles}>Muigai</span>
          </h1>
          <h2 style={heroSubtitleStyles}>
            <FaRocket style={{ fontSize: '1.2rem' }} />
            {SITE_INFO.title}
          </h2>
          <p style={heroDescriptionStyles}>
            {SITE_INFO.description}
          </p>
          
          <div style={heroStatsStyles}>
            <div style={statItemStyles}>
              <span style={statNumberStyles}>5+</span>
              <span style={statLabelStyles}>Projects</span>
            </div>
            <div style={statItemStyles}>
              <span style={statNumberStyles}>1+</span>
              <span style={statLabelStyles}>Year Experience</span>
            </div>
            <div style={statItemStyles}>
              <span style={statNumberStyles}>100%</span>
              <span style={statLabelStyles}>Satisfaction</span>
            </div>
          </div>
          
          <div style={heroButtonsStyles}>
            <Link 
              to="/contact" 
              style={{
                ...btnPrimaryStyles,
                ...(hoverState.hireMe && hoverEffects.btnPrimary)
              }}
              onMouseEnter={() => setHoverState(prev => ({...prev, hireMe: true}))}
              onMouseLeave={() => setHoverState(prev => ({...prev, hireMe: false}))}
            >
              Hire Me
            </Link>
            <Link 
              to="/projects" 
              style={{
                ...btnSecondaryStyles,
                ...(hoverState.viewProjects && hoverEffects.btnSecondary)
              }}
              onMouseEnter={() => setHoverState(prev => ({...prev, viewProjects: true}))}
              onMouseLeave={() => setHoverState(prev => ({...prev, viewProjects: false}))}
            >
              View Projects
            </Link>
            <button 
              onClick={handleDownloadCV}
              style={{
                ...btnOutlineStyles,
                ...(hoverState.downloadCV && hoverEffects.btnOutline)
              }}
              onMouseEnter={() => setHoverState(prev => ({...prev, downloadCV: true}))}
              onMouseLeave={() => setHoverState(prev => ({...prev, downloadCV: false}))}
              title="Download CV as PDF"
            >
              <FaDownload /> Download CV
            </button>
          </div>
          
          <div style={heroSocialStyles}>
            <a 
              href={SITE_INFO.github} 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...socialLinkStyles,
                ...(hoverState.github && hoverEffects.socialLink)
              }}
              onMouseEnter={() => setHoverState(prev => ({...prev, github: true}))}
              onMouseLeave={() => setHoverState(prev => ({...prev, github: false}))}
            >
              <FaGithub />
            </a>
            <a 
              href={SITE_INFO.linkedin} 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...socialLinkStyles,
                ...(hoverState.linkedin && hoverEffects.socialLink)
              }}
              onMouseEnter={() => setHoverState(prev => ({...prev, linkedin: true}))}
              onMouseLeave={() => setHoverState(prev => ({...prev, linkedin: false}))}
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        
        <div style={heroImageStyles}>
          <div style={imageWrapperStyles}>
            <img 
              src="/src/assets/WhatsApp Image 2025-12-11 at 8.49.39 AM.jpeg" 
              alt="Peter Muturi Muigai" 
              style={profileImageStyles}
            />
            <div style={imageDecorationStyles}></div>
          </div>
        </div>
      </div>

      {/* CSS Animation definitions */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
        
        /* Responsive styles */
        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 60px;
          }
          
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            justify-content: center;
          }
          
          .hero-description {
            margin: 0 auto 40px;
          }
          
          .hero-stats {
            justify-content: center;
          }
          
          .hero-buttons {
            justify-content: center;
          }
          
          .hero-social {
            justify-content: center;
          }
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.2rem;
          }
          
          .hero-stats {
            flex-wrap: wrap;
            justify-content: center;
          }
          
          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .hero-buttons a, .hero-buttons .link-button, .hero-buttons button {
            width: 100%;
            max-width: 300px;
          }
        }
        
        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .hero-subtitle {
            font-size: 1rem;
          }
          
          .hero-stats {
            gap: 15px;
          }
          
          .stat-item {
            flex: 1;
            min-width: 100px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;