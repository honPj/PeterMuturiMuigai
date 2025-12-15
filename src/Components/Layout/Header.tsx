import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from './ThemContext';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const navLinks = [
    { id: 'home', path: '/', label: 'Home' },
    { id: 'about', path: '/about', label: 'About' },
    { id: 'resume', path: '/resume', label: 'Resume' },
    { id: 'skills', path: '/skills', label: 'Skills' },
    { id: 'projects', path: '/projects', label: 'Projects' },
    { id: 'blog', path: '/blog', label: 'Blog' },
    { id: 'contact', path: '/contact', label: 'Contact' },
  ];

  // Responsive breakpoints
  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;
  

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    // Close mobile menu on resize to desktop
    if (windowWidth > 768 && isMenuOpen) {
      setIsMenuOpen(false);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth, isMenuOpen]);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  // Responsive Styles
  const headerStyles: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: 'all 0.3s ease',
    backdropFilter: isMobile ? 'blur(5px)' : 'blur(10px)',
    backgroundColor: isScrolled 
      ? theme === 'dark' 
        ? 'rgba(26, 32, 44, 0.95)' 
        : 'rgba(255, 255, 255, 0.95)'
      : theme === 'dark' 
        ? '#1a202c' 
        : '#ffffff',
    borderBottom: `1px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
    boxShadow: isScrolled 
      ? theme === 'dark' 
        ? '0 4px 20px rgba(0, 0, 0, 0.3)' 
        : '0 4px 20px rgba(0, 0, 0, 0.08)'
      : 'none',
    height: isMobile ? '60px' : '70px',
  };

  const containerStyles: React.CSSProperties = {
    maxWidth: isMobile ? '100%' : isTablet ? '100%' : '1200px',
    margin: '0 auto',
    padding: isMobile ? '0 15px' : isTablet ? '0 20px' : '0 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  };

  const logoStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: isMobile ? '0.5rem' : '0.75rem',
    textDecoration: 'none',
    flexShrink: 0,
  };

  const h1Styles: React.CSSProperties = {
    margin: 0,
    fontSize: isMobile ? '1.25rem' : isTablet ? '1.35rem' : '1.5rem',
    fontWeight: 700,
    background: 'linear-gradient(135deg, #3182ce, #4fd1c7)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: isMobile ? '150px' : 'none',
  };

  const dotStyles: React.CSSProperties = {
    width: isMobile ? '6px' : '8px',
    height: isMobile ? '6px' : '8px',
    backgroundColor: '#3182ce',
    borderRadius: '50%',
    marginLeft: '4px',
    flexShrink: 0,
  };

  // Desktop Navigation
  const navStyles: React.CSSProperties = {
    display: isMobile ? 'none' : 'flex',
    gap: isTablet ? '1rem' : '2rem',
    alignItems: 'center',
  };

  const navListStyles: React.CSSProperties = {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    gap: isTablet ? '1rem' : '2rem',
    flexWrap: isTablet ? 'wrap' : 'nowrap',
    justifyContent: isTablet ? 'center' : 'flex-start',
  };

  const navLinkStyles = (active: boolean): React.CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    gap: isTablet ? '0.25rem' : '0.5rem',
    color: active ? '#3182ce' : theme === 'dark' ? '#e2e8f0' : '#4a5568',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: isTablet ? '0.85rem' : '0.95rem',
    padding: isTablet ? '0.25rem 0.5rem' : '0.5rem 0',
    transition: 'all 0.3s ease',
    position: 'relative',
    whiteSpace: 'nowrap',
  });

  const activeIndicatorStyles: React.CSSProperties = {
    position: 'absolute',
    bottom: '-2px',
    left: 0,
    right: 0,
    height: '2px',
    backgroundColor: '#3182ce',
    borderRadius: '2px',
  };

  const controlsStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: isMobile ? '0.75rem' : '1rem',
  };

  const themeToggleStyles: React.CSSProperties = {
    width: isMobile ? '40px' : '44px',
    height: isMobile ? '22px' : '24px',
    backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
    borderRadius: '12px',
    position: 'relative',
    cursor: 'pointer',
    border: 'none',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.3s ease',
    flexShrink: 0,
  };

  const themeToggleInnerStyles: React.CSSProperties = {
    width: isMobile ? '18px' : '20px',
    height: isMobile ? '18px' : '20px',
    backgroundColor: theme === 'dark' ? '#e2e8f0' : '#ffffff',
    borderRadius: '50%',
    position: 'absolute',
    left: theme === 'dark' ? `calc(100% - ${isMobile ? '20px' : '22px'})` : '2px',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  };

  const themeIconStyles: React.CSSProperties = {
    fontSize: isMobile ? '8px' : '10px',
    color: theme === 'dark' ? '#1a202c' : '#f6ad55',
  };

  const menuButtonStyles: React.CSSProperties = {
    display: isMobile ? 'block' : 'none',
    backgroundColor: 'transparent',
    border: 'none',
    color: theme === 'dark' ? '#e2e8f0' : '#4a5568',
    fontSize: '1.25rem',
    cursor: 'pointer',
    padding: '0.5rem',
    flexShrink: 0,
  };

  // Mobile Menu Styles
  const mobileMenuStyles: React.CSSProperties = {
    position: 'fixed',
    top: isMobile ? '60px' : '70px',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: theme === 'dark' ? '#1a202c' : '#ffffff',
    zIndex: 999,
    padding: isMobile ? '1.5rem' : '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
    transition: 'transform 0.3s ease',
    overflowY: 'auto',
  };

  const mobileNavLinkStyles = (active: boolean): React.CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    color: active ? '#3182ce' : theme === 'dark' ? '#e2e8f0' : '#4a5568',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '1rem',
    padding: isMobile ? '0.875rem' : '1rem',
    borderRadius: '8px',
    backgroundColor: active 
      ? theme === 'dark' 
        ? 'rgba(49, 130, 206, 0.2)' 
        : 'rgba(49, 130, 206, 0.1)'
      : 'transparent',
    transition: 'all 0.3s ease',
    minHeight: '44px', // Minimum touch target size
  });

  return (
    <>
      <header style={headerStyles}>
        <div style={containerStyles}>
          <Link to="/" style={logoStyles}>
            <h1 style={h1Styles}>
              {isMobile ? 'Peter M' : 'Peter Muturi'}
              <span style={dotStyles}></span>
            </h1>
          </Link>

          {/* Desktop & Tablet Navigation */}
          <nav style={navStyles}>
            <ul style={navListStyles}>
              {navLinks.map(link => {
                const active = isActive(link.path);
                return (
                  <li key={link.id}>
                    <Link
                      to={link.path}
                      style={navLinkStyles(active)}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        {link.label}
                      </span>
                      {active && <span style={activeIndicatorStyles}></span>}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div style={controlsStyles}>
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              style={themeToggleStyles}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              <div style={themeToggleInnerStyles}>
                {theme === 'dark' ? (
                  <FaMoon style={themeIconStyles} />
                ) : (
                  <FaSun style={themeIconStyles} />
                )}
              </div>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={menuButtonStyles}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div style={mobileMenuStyles}>
        {navLinks.map(link => {
          const active = isActive(link.path);
          return (
            <Link
              key={link.id}
              to={link.path}
              style={mobileNavLinkStyles(active)}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          );
        })}
        
        <div style={{
          marginTop: 'auto',
          padding: isMobile ? '1.5rem 0.5rem' : '2rem 1rem',
          borderTop: `1px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <span style={{
              color: theme === 'dark' ? '#e2e8f0' : '#4a5568',
              fontSize: isMobile ? '0.85rem' : '0.9rem',
            }}>
              Switch theme:
            </span>
            <button
              onClick={toggleTheme}
              style={{
                ...themeToggleStyles,
                width: isMobile ? '50px' : '60px',
                height: isMobile ? '26px' : '30px',
              }}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              <div style={{
                ...themeToggleInnerStyles,
                width: isMobile ? '22px' : '26px',
                height: isMobile ? '22px' : '26px',
                left: theme === 'dark' ? `calc(100% - ${isMobile ? '24px' : '28px'})` : '2px',
              }}>
                {theme === 'dark' ? (
                  <FaMoon style={{ fontSize: isMobile ? '10px' : '12px', color: '#1a202c' }} />
                ) : (
                  <FaSun style={{ fontSize: isMobile ? '10px' : '12px', color: '#f6ad55' }} />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          style={{
            position: 'fixed',
            top: isMobile ? '60px' : '70px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 998,
          }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* CSS for animations and additional responsive tweaks */}
      <style>{`
        /* Smooth transitions */
        * {
          -webkit-tap-highlight-color: transparent;
        }
        
        /* Better touch interactions on mobile */
        @media (hover: none) and (pointer: coarse) {
          button, a {
            min-height: 44px;
            min-width: 44px;
          }
          
          .mobile-nav-link {
            padding: 16px !important;
          }
        }
        
        /* Tablet specific adjustments */
        @media (min-width: 769px) and (max-width: 1024px) {
          .nav-list {
            max-width: 600px;
            justify-content: center;
          }
        }
        
        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .logo-text {
            background: none !important;
            -webkit-text-fill-color: ${theme === 'dark' ? '#ffffff' : '#000000'} !important;
            color: ${theme === 'dark' ? '#ffffff' : '#000000'} !important;
          }
        }
        
        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          * {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
};

export default Header;