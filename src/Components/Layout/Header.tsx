import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from './ThemContext';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { id: 'home', path: '/', label: 'Home' },
    { id: 'about', path: '/about', label: 'About' },
    { id: 'resume', path: '/resume', label: 'Resume' },
    { id: 'skills', path: '/skills', label: 'Skills' },
    { id: 'projects', path: '/projects', label: 'Projects' },
    { id: 'blog', path: '/blog', label: 'Blog' },
    { id: 'contact', path: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if a link is active based on current path
  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const headerStyles: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
    backgroundColor: isScrolled 
      ? theme === 'dark' 
        ? 'rgba(26, 32, 44, 0.9)' 
        : 'rgba(255, 255, 255, 0.9)'
      : theme === 'dark' 
        ? 'var(--color-background-dark, #1a202c)' 
        : 'var(--color-background, #ffffff)',
    borderBottom: `1px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
    boxShadow: isScrolled 
      ? theme === 'dark' 
        ? '0 4px 20px rgba(0, 0, 0, 0.3)' 
        : '0 4px 20px rgba(0, 0, 0, 0.08)'
      : 'none',
  };

  const containerStyles: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '70px',
  };

  const logoStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    textDecoration: 'none',
  };

  const h1Styles: React.CSSProperties = {
    margin: 0,
    fontSize: '1.5rem',
    fontWeight: 700,
    background: 'linear-gradient(135deg, var(--color-accent, #3182ce), #4fd1c7)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const dotStyles: React.CSSProperties = {
    width: '8px',
    height: '8px',
    backgroundColor: 'var(--color-accent, #3182ce)',
    borderRadius: '50%',
    marginLeft: '4px',
  };

  const navStyles: React.CSSProperties = {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
  };

  const navListStyles: React.CSSProperties = {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    gap: '2rem',
  };

  const navLinkStyles = (active: boolean): React.CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: active ? 'var(--color-accent, #3182ce)' : theme === 'dark' ? '#e2e8f0' : '#4a5568',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '0.95rem',
    padding: '0.5rem 0',
    transition: 'all 0.3s ease',
    position: 'relative',
  });

  const activeIndicatorStyles: React.CSSProperties = {
    position: 'absolute',
    bottom: '-2px',
    left: 0,
    right: 0,
    height: '2px',
    backgroundColor: 'var(--color-accent, #3182ce)',
    borderRadius: '2px',
  };

  const controlsStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  };

  const themeToggleStyles: React.CSSProperties = {
    width: '44px',
    height: '24px',
    backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
    borderRadius: '12px',
    position: 'relative',
    cursor: 'pointer',
    border: 'none',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.3s ease',
  };

  const themeToggleInnerStyles: React.CSSProperties = {
    width: '20px',
    height: '20px',
    backgroundColor: theme === 'dark' ? '#e2e8f0' : '#ffffff',
    borderRadius: '50%',
    position: 'absolute',
    left: theme === 'dark' ? 'calc(100% - 22px)' : '2px',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  };

  const themeIconStyles: React.CSSProperties = {
    fontSize: '10px',
    color: theme === 'dark' ? '#1a202c' : '#f6ad55',
  };

  const menuButtonStyles: React.CSSProperties = {
    display: 'none',
    backgroundColor: 'transparent',
    border: 'none',
    color: theme === 'dark' ? '#e2e8f0' : '#4a5568',
    fontSize: '1.5rem',
    cursor: 'pointer',
    padding: '0.5rem',
  };

  const mobileMenuStyles: React.CSSProperties = {
    position: 'fixed',
    top: '70px',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: theme === 'dark' ? 'var(--color-background-dark, #1a202c)' : 'var(--color-background, #ffffff)',
    zIndex: 999,
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
    transition: 'transform 0.3s ease',
    overflowY: 'auto',
  };

  const mobileNavLinkStyles = (active: boolean): React.CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    color: active ? 'var(--color-accent, #3182ce)' : theme === 'dark' ? '#e2e8f0' : '#4a5568',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '1.1rem',
    padding: '1rem',
    borderRadius: '8px',
    backgroundColor: active 
      ? theme === 'dark' 
        ? 'rgba(49, 130, 206, 0.2)' 
        : 'rgba(49, 130, 206, 0.1)'
      : 'transparent',
    transition: 'all 0.3s ease',
  });

  // Media query for responsive design
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  return (
    <>
      <header style={headerStyles}>
        <div style={containerStyles}>
          <Link to="/" style={logoStyles}>
            <h1 style={h1Styles}>
              Peter Muturi
              <span style={dotStyles}></span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
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
          padding: '2rem 1rem',
          borderTop: `1px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <span style={{
              color: theme === 'dark' ? '#e2e8f0' : '#4a5568',
              fontSize: '0.9rem',
            }}>
              Switch theme:
            </span>
            <button
              onClick={toggleTheme}
              style={{
                ...themeToggleStyles,
                width: '60px',
                height: '30px',
              }}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              <div style={{
                ...themeToggleInnerStyles,
                width: '26px',
                height: '26px',
                left: theme === 'dark' ? 'calc(100% - 28px)' : '2px',
              }}>
                {theme === 'dark' ? (
                  <FaMoon style={{ fontSize: '12px', color: '#1a202c' }} />
                ) : (
                  <FaSun style={{ fontSize: '12px', color: '#f6ad55' }} />
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
            top: '70px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 998,
          }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          nav {
            display: none;
          }
          
          .menu-button {
            display: block;
          }
        }
        
        @media (min-width: 769px) {
          .mobile-menu {
            display: none;
          }
          
          .menu-button {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Header;