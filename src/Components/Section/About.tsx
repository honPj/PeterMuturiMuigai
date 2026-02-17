import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';

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

  const cvGoogleDriveLink = 'https://drive.google.com/file/d/1TULXbQw0UPWSDkzYJJDwtj7olDv0Rvd5/view?usp=drive_link';
  
  // Direct download link (converted from view link)
  const cvDirectDownloadLink = 'https://drive.google.com/uc?export=download&id=1TULXbQw0UPWSDkzYJJDwtj7olDv0Rvd5';

  const handleViewCV = () => {
    // Open the CV in a new tab for viewing
    window.open(cvGoogleDriveLink, '_blank', 'noopener,noreferrer');
  };

  const handleDownloadCV = () => {
    // Create a hidden link for download
    const link = document.createElement('a');
    link.href = cvDirectDownloadLink;
    link.download = 'https://drive.google.com/uc?export=download&id=1TULXbQw0UPWSDkzYJJDwtj7olDv0Rvd5';
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
    <section className="about-section">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">Get to know me better</p>
        </div>

        <div className="about-content">
          <div className="info-column">
            <div className="info-card">
              <h3 className="info-title">Personal Information</h3>
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Full Name:</span>
                  <span className="info-value">{personalInfo.name}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Title:</span>
                  <span className="info-value">{personalInfo.title}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">
                    <span className="info-icon"><FaMapMarkerAlt /></span>
                    Location:
                  </span>
                  <span className="info-value">{personalInfo.location}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">
                    <span className="info-icon"><FaEnvelope /></span>
                    Email:
                  </span>
                  <span className="info-value">
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="info-link"
                    >
                      {personalInfo.email}
                    </a>
                  </span>
                </div>
                <div className="info-item">
                  <span className="info-label">
                    <span className="info-icon"><FaPhone /></span>
                    Phone:
                  </span>
                  <span className="info-value">
                    <a 
                      href={`tel:${personalInfo.phone}`}
                      className="info-link"
                    >
                      {personalInfo.phone}
                    </a>
                  </span>
                </div>
                <div className="info-item">
                  <span className="info-label">
                    <span className="info-icon"><FaPhone /></span>
                    Secondary:
                  </span>
                  <span className="info-value">
                    <a 
                      href={`tel:${personalInfo.secondaryPhone}`}
                      className="info-link"
                    >
                      {personalInfo.secondaryPhone}
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-number">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="content-column">
            <h3 className="about-title">Professional Summary</h3>
            <div className="summary-text">
              <p>{personalInfo.summary}</p>
              <p>
                Adaptable and solutions-focused, with a proven ability to deliver reliable, 
                user-centered systems across both development and operational environments.
              </p>
            </div>

            <div className="action-buttons">
              <button 
                onClick={handleDownloadCV}
                className="btn-primary"
                title="Download CV as PDF"
              >
                <span className="btn-icon"><FaDownload /></span>
                Download CV
              </button>
              <button 
                onClick={handleViewCV}
                className="btn-outline"
                title="View CV in Google Drive"
              >
                <span className="btn-icon"><FaExternalLinkAlt /></span>
                View CV Online
              </button>
              <a 
                href="#contact" 
                className="btn-outline"
              >
                Contact Me
              </a>
            </div>

            <div className="additional-info">
              <h4 className="additional-title">Currently Working At:</h4>
              <div className="current-work">
                <div className="work-item">
                  <h5 className="work-item-title">University of Embu</h5>
                  <p className="work-item-desc">ICT Intern (July 2025 - Present)</p>
                </div>
                <div className="work-item">
                  <h5 className="work-item-title">Teach2Give</h5>
                  <p className="work-item-desc">Software Development Trainee (Sep 2025 - Dec 2025)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style >{`
        .about-section {
          padding: 80px 0;
          background: var(--hero-bg-gradient);
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          transition: background 0.3s ease;
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 2;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--hero-text-color);
          margin-bottom: 12px;
          position: relative;
          display: inline-block;
          transition: color 0.3s ease;
        }

        .section-divider {
          width: 80px;
          height: 4px;
          background: var(--hero-badge-gradient);
          margin: 0 auto 16px;
          border-radius: 2px;
          transition: background 0.3s ease;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: var(--hero-description-color);
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 60px;
          align-items: start;
        }

        @media (max-width: 992px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        .info-card {
          background: var(--color-surface);
          border-radius: 16px;
          padding: 32px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          border: 1px solid var(--color-border);
          margin-bottom: 32px;
          transition: all 0.3s ease;
        }

        .info-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 2px solid rgba(var(--color-border-rgb), 0.3);
          transition: color 0.3s ease;
        }

        .info-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        .info-item {
          display: grid;
          grid-template-columns: 120px 1fr;
          gap: 12px;
          align-items: center;
        }

        @media (max-width: 480px) {
          .info-item {
            grid-template-columns: 1fr;
            gap: 4px;
          }
        }

        .info-label {
          font-size: 0.95rem;
          color: var(--color-text-light);
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: color 0.3s ease;
        }

        .info-icon {
          color: var(--color-accent);
          font-size: 0.9rem;
        }

        .info-value {
          font-size: 1rem;
          color: var(--color-text);
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .info-link {
          color: var(--color-accent);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .info-link:hover {
          color: var(--hero-accent-color);
          text-decoration: underline;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .stat-card {
          background: var(--color-surface);
          border-radius: 12px;
          padding: 24px;
          text-align: center;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
          border: 1px solid var(--color-border);
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: var(--color-accent);
          margin-bottom: 8px;
          background: var(--hero-badge-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--color-text-light);
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .about-title {
          font-size: 1.8rem;
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: 24px;
          transition: color 0.3s ease;
        }

        .summary-text {
          font-size: 1.05rem;
          line-height: 1.8;
          color: var(--color-secondary);
          margin-bottom: 32px;
          transition: color 0.3s ease;
        }

        .action-buttons {
          display: flex;
          gap: 16px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: var(--hero-badge-gradient);
          color: white;
          border: none;
          padding: 14px 28px;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(var(--color-accent-rgb), 0.3);
          min-width: 160px;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(var(--color-accent-rgb), 0.4);
        }

        .btn-outline {
          background: transparent;
          color: var(--color-accent);
          border: 2px solid var(--color-accent);
          padding: 14px 28px;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          min-width: 160px;
        }

        .btn-outline:hover {
          background: var(--color-accent);
          color: white;
          transform: translateY(-2px);
        }

        .btn-icon {
          margin-right: 8px;
        }

        .additional-info {
          background: var(--card-bg);
          border-radius: 12px;
          padding: 28px;
          border-left: 4px solid var(--color-accent);
          transition: all 0.3s ease;
        }

        .additional-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: 20px;
          transition: color 0.3s ease;
        }

        .current-work {
          display: grid;
          gap: 20px;
        }

        .work-item {
          padding-bottom: 16px;
          border-bottom: 1px solid var(--color-border);
          transition: border-color 0.3s ease;
        }

        .work-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .work-item-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: 4px;
          transition: color 0.3s ease;
        }

        .work-item-desc {
          font-size: 0.95rem;
          color: var(--color-text-light);
          transition: color 0.3s ease;
        }

        .cv-link-container {
          margin-top: 20px;
          padding: 15px;
          background: rgba(var(--color-accent-rgb), 0.05);
          border-radius: 8px;
          border-left: 3px solid var(--color-accent);
        }

        .cv-link-text {
          font-size: 0.9rem;
          color: var(--color-text-light);
          margin-bottom: 8px;
        }

        .cv-direct-link {
          color: var(--color-accent);
          text-decoration: none;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: color 0.3s ease;
        }

        .cv-direct-link:hover {
          color: var(--hero-accent-color);
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .about-section {
            padding: 60px 0;
          }

          .section-title {
            font-size: 2rem;
          }

          .about-title {
            font-size: 1.5rem;
          }

          .info-card {
            padding: 24px;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .stat-number {
            font-size: 1.8rem;
          }

          .action-buttons {
            flex-direction: column;
          }

          .btn-primary, .btn-outline {
            width: 100%;
            text-align: center;
            min-width: auto;
          }
        }

        @media (max-width: 480px) {
          .about-content {
            gap: 30px;
          }

          .section-title {
            font-size: 1.8rem;
          }

          .info-title, .about-title {
            font-size: 1.3rem;
          }

          .stats-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .info-grid {
            gap: 15px;
          }

          .info-item {
            grid-template-columns: 1fr;
            gap: 4px;
          }

          .info-label, .info-value {
            font-size: 0.9rem;
          }

          .summary-text {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;