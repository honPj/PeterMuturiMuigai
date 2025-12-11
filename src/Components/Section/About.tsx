import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaDownload } from 'react-icons/fa';

const About: React.FC = () => {
  const personalInfo = {
    name: 'Peter Muturi Muigai',
    title: 'Full Stack Developer | IT Support Specialist',
    location: 'Embu, Kenya, 60100',
    email: 'muigaipeter61@gmail.com',
    phone: '+254703551225',
    secondaryPhone: '+254720017232',
    summary: `Versatile Business Information Technology graduate with a hybrid skill set across full-stack development, hands-on ICT support, and AI/ML applications. Combines end-to-end web development expertise with practical AI/ML project experience and robust technical troubleshooting abilities. Builds modern, scalable applications while supporting and maintaining digital infrastructure, automating workflows, and translating data into actionable insights.`,
  };

  const stats = [
    { label: 'Projects Completed', value: '5+' },
    { label: 'Years Experience', value: '1+' },
    { label: 'Technologies', value: '10+' },
    { label: 'Certifications', value: '4' },
  ];

  // Main container styles
  const sectionStyles: React.CSSProperties = {
    padding: '80px 0',
    background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
    position: 'relative',
  };

  const containerStyles: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  };

  // Header styles
  const sectionHeaderStyles: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '60px',
  };

  const sectionTitleStyles: React.CSSProperties = {
    fontSize: '2.5rem',
    fontWeight: 700,
    color: '#1e293b',
    marginBottom: '12px',
    position: 'relative',
    display: 'inline-block',
  };

  const sectionDividerStyles: React.CSSProperties = {
    width: '80px',
    height: '4px',
    background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
    margin: '0 auto 16px',
    borderRadius: '2px',
  };

  const sectionSubtitleStyles: React.CSSProperties = {
    fontSize: '1.1rem',
    color: '#64748b',
    fontWeight: 500,
  };

  // Content layout
  const aboutContentStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 1.5fr',
    gap: '60px',
    alignItems: 'start',
  };

  // Info card styles
  const infoCardStyles: React.CSSProperties = {
    background: '#ffffff',
    borderRadius: '16px',
    padding: '32px',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
    border: '1px solid #e2e8f0',
    marginBottom: '32px',
  };

  const infoTitleStyles: React.CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: '#1e293b',
    marginBottom: '24px',
    paddingBottom: '16px',
    borderBottom: '2px solid #f1f5f9',
  };

  const infoGridStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '20px',
  };

  const infoItemStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '120px 1fr',
    gap: '12px',
    alignItems: 'center',
  };

  const infoLabelStyles: React.CSSProperties = {
    fontSize: '0.95rem',
    color: '#64748b',
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  };

  const infoIconStyles: React.CSSProperties = {
    color: '#3b82f6',
    fontSize: '0.9rem',
  };

  const infoValueStyles: React.CSSProperties = {
    fontSize: '1rem',
    color: '#1e293b',
    fontWeight: 500,
  };

  const linkStyles: React.CSSProperties = {
    color: '#3b82f6',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  };

  // Stats grid
  const statsGridStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
  };

  const statCardStyles: React.CSSProperties = {
    background: '#ffffff',
    borderRadius: '12px',
    padding: '24px',
    textAlign: 'center',
    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)',
    border: '1px solid #e2e8f0',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const statNumberStyles: React.CSSProperties = {
    fontSize: '2rem',
    fontWeight: 700,
    color: '#3b82f6',
    marginBottom: '8px',
    background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const statLabelStyles: React.CSSProperties = {
    fontSize: '0.9rem',
    color: '#64748b',
    fontWeight: 500,
  };

  // About text section
  const aboutTitleStyles: React.CSSProperties = {
    fontSize: '1.8rem',
    fontWeight: 600,
    color: '#1e293b',
    marginBottom: '24px',
  };

  const summaryTextStyles: React.CSSProperties = {
    fontSize: '1.05rem',
    lineHeight: '1.8',
    color: '#475569',
    marginBottom: '32px',
  };

  // Action buttons
  const actionButtonsStyles: React.CSSProperties = {
    display: 'flex',
    gap: '16px',
    marginBottom: '40px',
  };

  const btnPrimaryStyles: React.CSSProperties = {
    background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
    color: 'white',
    border: 'none',
    padding: '14px 28px',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
  };

  const btnOutlineStyles: React.CSSProperties = {
    background: 'transparent',
    color: '#3b82f6',
    border: '2px solid #3b82f6',
    padding: '14px 28px',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
  };

  // Additional info
  const additionalInfoStyles: React.CSSProperties = {
    background: '#f8fafc',
    borderRadius: '12px',
    padding: '28px',
    borderLeft: '4px solid #3b82f6',
  };

  const additionalTitleStyles: React.CSSProperties = {
    fontSize: '1.2rem',
    fontWeight: 600,
    color: '#1e293b',
    marginBottom: '20px',
  };

  const currentWorkStyles: React.CSSProperties = {
    display: 'grid',
    gap: '20px',
  };

  const workItemStyles: React.CSSProperties = {
    paddingBottom: '16px',
    borderBottom: '1px solid #e2e8f0',
  };

  const workItemTitleStyles: React.CSSProperties = {
    fontSize: '1.1rem',
    fontWeight: 600,
    color: '#1e293b',
    marginBottom: '4px',
  };

  const workItemDescStyles: React.CSSProperties = {
    fontSize: '0.95rem',
    color: '#64748b',
  };

  // Hover effects
  const hoverEffects = {
    btnPrimary: {
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 20px rgba(59, 130, 246, 0.4)',
    },
    btnOutline: {
      background: '#3b82f6',
      color: 'white',
      transform: 'translateY(-2px)',
    },
    statCard: {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    },
    link: {
      color: '#2563eb',
      textDecoration: 'underline',
    },
  };

  // State for hover effects
  const [hoverState, setHoverState] = React.useState({
    cvBtn: false,
    contactBtn: false,
    stats: Array(stats.length).fill(false),
  });

  return (
    <section style={sectionStyles}>
      <div style={containerStyles}>
        <div style={sectionHeaderStyles}>
          <h2 style={sectionTitleStyles}>About Me</h2>
          <div style={sectionDividerStyles}></div>
          <p style={sectionSubtitleStyles}>Get to know me better</p>
        </div>

        <div style={aboutContentStyles}>
          <div>
            <div style={infoCardStyles}>
              <h3 style={infoTitleStyles}>Personal Information</h3>
              <div style={infoGridStyles}>
                <div style={infoItemStyles}>
                  <span style={infoLabelStyles}>Full Name:</span>
                  <span style={infoValueStyles}>{personalInfo.name}</span>
                </div>
                <div style={infoItemStyles}>
                  <span style={infoLabelStyles}>Title:</span>
                  <span style={infoValueStyles}>{personalInfo.title}</span>
                </div>
                <div style={infoItemStyles}>
                  <span style={infoLabelStyles}>
                    <span style={infoIconStyles}><FaMapMarkerAlt /></span>
                    Location:
                  </span>
                  <span style={infoValueStyles}>{personalInfo.location}</span>
                </div>
                <div style={infoItemStyles}>
                  <span style={infoLabelStyles}>
                    <span style={infoIconStyles}><FaEnvelope /></span>
                    Email:
                  </span>
                  <span style={infoValueStyles}>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      style={{
                        ...linkStyles,
                        ...(hoverState.contactBtn && hoverEffects.link)
                      }}
                      onMouseEnter={() => setHoverState(prev => ({...prev, contactBtn: true}))}
                      onMouseLeave={() => setHoverState(prev => ({...prev, contactBtn: false}))}
                    >
                      {personalInfo.email}
                    </a>
                  </span>
                </div>
                <div style={infoItemStyles}>
                  <span style={infoLabelStyles}>
                    <span style={infoIconStyles}><FaPhone /></span>
                    Phone:
                  </span>
                  <span style={infoValueStyles}>
                    <a 
                      href={`tel:${personalInfo.phone}`}
                      style={{
                        ...linkStyles,
                        ...(hoverState.contactBtn && hoverEffects.link)
                      }}
                      onMouseEnter={() => setHoverState(prev => ({...prev, contactBtn: true}))}
                      onMouseLeave={() => setHoverState(prev => ({...prev, contactBtn: false}))}
                    >
                      {personalInfo.phone}
                    </a>
                  </span>
                </div>
                <div style={infoItemStyles}>
                  <span style={infoLabelStyles}>
                    <span style={infoIconStyles}><FaPhone /></span>
                    Secondary:
                  </span>
                  <span style={infoValueStyles}>
                    <a 
                      href={`tel:${personalInfo.secondaryPhone}`}
                      style={{
                        ...linkStyles,
                        ...(hoverState.contactBtn && hoverEffects.link)
                      }}
                      onMouseEnter={() => setHoverState(prev => ({...prev, contactBtn: true}))}
                      onMouseLeave={() => setHoverState(prev => ({...prev, contactBtn: false}))}
                    >
                      {personalInfo.secondaryPhone}
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div style={statsGridStyles}>
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  style={{
                    ...statCardStyles,
                    ...(hoverState.stats[index] && hoverEffects.statCard)
                  }}
                  onMouseEnter={() => setHoverState(prev => ({
                    ...prev, 
                    stats: prev.stats.map((val, i) => i === index ? true : val)
                  }))}
                  onMouseLeave={() => setHoverState(prev => ({
                    ...prev, 
                    stats: prev.stats.map((val, i) => i === index ? false : val)
                  }))}
                >
                  <div style={statNumberStyles}>{stat.value}</div>
                  <div style={statLabelStyles}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 style={aboutTitleStyles}>Professional Summary</h3>
            <div style={summaryTextStyles}>
              <p>{personalInfo.summary}</p>
              <p>
                Adaptable and solutions-focused, with a proven ability to deliver reliable, 
                user-centered systems across both development and operational environments.
              </p>
            </div>

            <div style={actionButtonsStyles}>
              <a 
                href="/resume.pdf" 
                style={{
                  ...btnPrimaryStyles,
                  ...(hoverState.cvBtn && hoverEffects.btnPrimary)
                }}
                onMouseEnter={() => setHoverState(prev => ({...prev, cvBtn: true}))}
                onMouseLeave={() => setHoverState(prev => ({...prev, cvBtn: false}))}
                download="Peter_Muturi_Resume.pdf"
              >
                <span style={{ marginRight: '8px' }}><FaDownload /></span>
                Download CV
              </a>
              <a 
                href="#contact" 
                style={{
                  ...btnOutlineStyles,
                  ...(hoverState.contactBtn && hoverEffects.btnOutline)
                }}
                onMouseEnter={() => setHoverState(prev => ({...prev, contactBtn: true}))}
                onMouseLeave={() => setHoverState(prev => ({...prev, contactBtn: false}))}
              >
                Contact Me
              </a>
            </div>

            <div style={additionalInfoStyles}>
              <h4 style={additionalTitleStyles}>Currently Working At:</h4>
              <div style={currentWorkStyles}>
                <div style={workItemStyles}>
                  <h5 style={workItemTitleStyles}>University of Embu</h5>
                  <p style={workItemDescStyles}>ICT Intern (July 2025 - Present)</p>
                </div>
                <div style={workItemStyles}>
                  <h5 style={workItemTitleStyles}>Teach2Give</h5>
                  <p style={workItemDescStyles}>Software Development Trainee (Sep 2025 - Present)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;