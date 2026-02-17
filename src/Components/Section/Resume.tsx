import React, { useState } from 'react';
import { FaBriefcase, FaGraduationCap, FaCertificate, FaMapMarkerAlt, FaCalendarAlt, FaDownload } from 'react-icons/fa';

// Define TypeScript interfaces
interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  type: 'work';
  current: boolean;
}

interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description: string[];
  type: 'education';
}

interface Certification {
  id: number;
  name: string;
  issuer: string;
  year: string;
  type: 'certification';
}

const Resume: React.FC = () => {
  
  const [activeTab, setActiveTab] = useState<'education' | 'certifications' | 'experience'>('education');

  const handleDownloadResume = () => {
    // Open in new tab for Google Drive
    window.open('https://drive.google.com/file/d/1DnIF4m2-J1yJzXWpHlss5lu3Gd-x3R-0/view?usp=drive_link', '_blank');
  };

  // Type the arrays with proper interfaces
  const experiences: Experience[] = [
    {
      id: 1,
      title: 'ICT Intern',
      company: 'University of Embu',
      location: 'Embu, Kenya',
      period: 'July 2025 - Present',
      description: [
        'Software & Hardware Management: Installed, updated, and troubleshoot software and hardware, including assistive technologies.',
        'Network & Security Management: Monitored network performance, implemented security protocols, and ensured compliance with IT policies.',
        'Inventory & Resource Management: Tracked and managed lab equipment and scheduled maintenance.',
        'Lab Administration & Maintenance: Oversaw daily lab operations, ensuring all systems were secure and functional.',
        'Data Analysis & Reporting: Used Excel and Power BI to generate lab usage reports and troubleshoot trends.'
      ],
      type: 'work',
      current: true
    },
    {
      id: 2,
      title: 'Software Development Trainee',
      company: 'Teach2Give',
      location: 'Embu, Kenya',
      period: 'September 2025 - December 2025',
      description: [
        'Completed comprehensive training in full-stack development',
        'Designed and developed RESTful APIs for web application integration',
        'Built responsive web applications and websites with focus on performance and user experience',
        'Collaborated on team projects using Git for version control and code collaboration',
        'Applied AI concepts to develop intelligent features in web applications'
      ],
      type: 'work',
      current: false
    },
    {
      id: 3,
      title: 'ICT Attachee',
      company: 'ICT Department and Governor\'s Delivery Unit, Embu County HeadQuater',
      location: 'Embu, Kenya',
      period: 'May 2024 – September 2024',
      description: [
        'Provided comprehensive ICT support across county departments, ensuring smooth digital operations',
        'Conducted computer training for county staff and community members, improving digital literacy level',
        'Assisted in website content management and updates for county digital platforms',
        'Supported the digitization of county records and services, contributing to e-government initiatives',
        'Troubleshot hardware and software issues, providing timely technical support to county employees'
      ],
      type: 'work',
      current: false
    },
    {
      id: 4,
      title: 'Cyber Attendant',
      company: 'Palmshade Cyber',
      location: 'Embu, Kenya',
      period: 'May 2021 – August 2021',
      description: [
        'Designed promotional posters and marketing materials using graphic design software',
        'Assisted customers with printing, scanning, and document services',
        'Resolved technical issues related to computers, printers, and internet connectivity',
        'Delivered exceptional customer service and technical support',
        'Managed digital services and maintained cyber café equipment'
      ],
      type: 'work',
      current: false
    }
  ];

  const education: Education[] = [
    {
      id: 1,
      degree: 'Bachelor of Business Information Technology',
      institution: 'University of Embu',
      period: 'September 2021 - September 2025',
      description: [
        'Key coursework: Programming Fundamentals, Object-Oriented Programming, Database Management Systems (DBMS), Computer Networks, Web Development, System Analysis & Design, Software Engineering, IT Project Management, Mobile Application Development, AI & ML'
      ],
      type: 'education'
    },
    {
      id: 2,
      degree: 'Kenya Certificate of Secondary Education (K.C.S.E)',
      institution: 'Geta Secondary School',
      period: 'January 2016 – April 2021',
      description: [
        'Completed secondary education with focus on sciences and mathematics',
        'Participated in computer studies and technical drawing programs',
        'Developed foundational skills in problem-solving and analytical thinking'
      ],
      type: 'education'
    }
  ];

  const certifications: Certification[] = [
    {
      id: 1,
      name: 'Full Stack Developer',
      issuer: 'Teach2Give',
      year: '2025',
      type: 'certification'
    },
    {
      id: 2,
      name: 'Cisco Networking Basics',
      issuer: 'Cisco Networking Academy',
      year: '2024',
      type: 'certification'
    },
    {
      id: 3,
      name: 'Foundation to Artificial Intelligence',
      issuer: 'ICT Authority Kenya',
      year: '2024',
      type: 'certification'
    },
    {
      id: 4,
      name: 'Huawei Certified ICT Professional',
      issuer: 'Huawei',
      year: 'Ongoing',
      type: 'certification'
    }
  ];

  return (
    <section className="resume-section">
      <div className="resume-container">
        {/* Header with download button on the right */}
        <div className="section-header-with-button">
          <div className="header-content">
            <h2 className="section-title">My Resume</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Professional Journey & Education</p>
          </div>
          
          <button 
            className="download-resume-btn"
            onClick={handleDownloadResume}
            aria-label="Download Resume"
          >
            <FaDownload className="download-icon" />
            Download Resume
          </button>
        </div>

        {/* Tabs and content */}
        <div className="resume-tabs">
          <button
            className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            <FaGraduationCap /> Education
          </button>
          <button
            className={`tab-button ${activeTab === 'certifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('certifications')}
          >
            <FaCertificate /> Certifications
          </button>
          <button
            className={`tab-button ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            <FaBriefcase /> Experience
          </button>
        </div>

        {/* Tab content */}
        {activeTab === 'education' && (
          <div className="education-section">
            <h3 className="subsection-title">
              <span className="subsection-icon"><FaGraduationCap /></span>
              Education Background
            </h3>
            <div className="education-grid">
              {education.map((edu) => (
                <div key={edu.id} className="education-card">
                  <div className="education-header">
                    <h4 className="education-degree">{edu.degree}</h4>
                    <div className="education-institution">{edu.institution}</div>
                    <div className="education-period">{edu.period}</div>
                  </div>
                  <ul className="education-description">
                    {edu.description.map((item, idx) => (
                      <li key={idx} className="education-list-item">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'certifications' && (
          <div className="certifications-section">
            <h3 className="subsection-title">
              <span className="subsection-icon"><FaCertificate /></span>
              Certifications & Training
            </h3>
            <div className="certifications-grid">
              {certifications.map((cert) => (
                <div key={cert.id} className="certification-card">
                  <div className="certification-icon">
                    <FaCertificate />
                  </div>
                  <div className="certification-content">
                    <h4 className="certification-name">{cert.name}</h4>
                    <div className="certification-issuer">{cert.issuer}</div>
                    <div className="certification-year">{cert.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'experience' && (
          <div className="timeline-container">
            <div className="timeline-line"></div>
            <div className="timeline">
              {experiences.map((exp) => (
                <div key={exp.id} className="timeline-item">
                  <div className="timeline-marker">
                    <FaBriefcase />
                    {exp.current && <span className="current-badge">Current</span>}
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h3 className="timeline-title">{exp.title}</h3>
                      <div className="timeline-meta">
                        <span className="company">{exp.company}</span>
                        <span className="period">
                          <FaCalendarAlt />
                          {exp.period}
                        </span>
                      </div>
                      <div className="location">
                        <FaMapMarkerAlt />
                        {exp.location}
                      </div>
                    </div>
                    <ul className="timeline-description">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="timeline-list-item">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="leadership-section">
          <h3 className="subsection-title">Leadership & Community Engagement</h3>
          <div className="leadership-content">
            <div className="leadership-item">
              <h4 className="leadership-item-title">Leadership Roles</h4>
              <ul className="leadership-list">
                <li className="leadership-list-item">Male Representative – University of Embu Student Association (2024–2025)</li>
                <li className="leadership-list-item">CIT Departmental Representative – University of Embu Student Association (2023–2024)</li>
                <li className="leadership-list-item">Founder & Coordinator – Code and Tech Club, University of Embu</li>
                <li className="leadership-list-item">Treasurer – University of Embu Christian Union IT Ministry (2023–2024)</li>
              </ul>
            </div>
            <div className="leadership-item">
              <h4 className="leadership-item-title">Voluntary & Community Engagement</h4>
              <ul className="leadership-list">
                <li className="leadership-list-item">Trained peers in multimedia skills (projection, posters, photography)</li>
                <li className="leadership-list-item">Participated in Kangaru market cleanup activity organized by University of Embu student association</li>
                <li className="leadership-list-item">Participated in Tree planting activity organized by University of Embu on 10th November 2023</li>
                <li className="leadership-list-item">Participated in Embu town clean up activity organized by University of Embu on 8th October 2022</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style >{`
        :root {
          /* Light Mode Colors */
          --color-light-primary: #2563eb;
          --color-light-primary-dark: #1d4ed8;
          --color-light-accent: #3b82f6;
          --color-light-accent-light: #60a5fa;
          --color-light-accent-dark: #1e40af;
          --color-light-accent-rgb: 59, 130, 246;
          
          --color-light-surface: #ffffff;
          --color-light-border: #e5e7eb;
          --color-light-text: #1f2937;
          --color-light-text-light: #6b7280;
          --color-light-secondary: #4b5563;
          
          --hero-light-bg-gradient: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          --hero-light-text-color: #1e293b;
          --hero-light-description-color: #64748b;
          --hero-light-badge-gradient: linear-gradient(135deg, var(--color-light-accent) 0%, var(--color-light-accent-dark) 100%);
          
          /* Dark Mode Colors (keep your existing ones) */
          --color-accent: #3b82f6;
          --color-accent-light: #60a5fa;
          --color-accent-dark: #1e40af;
          --color-accent-rgb: 59, 130, 246;
          --color-surface: rgba(255, 255, 255, 0.05);
          --color-border: rgba(255, 255, 255, 0.1);
          --color-text: #ffffff;
          --color-text-light: rgba(255, 255, 255, 0.7);
          --color-secondary: rgba(255, 255, 255, 0.6);
          --hero-bg-gradient: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          --hero-text-color: #ffffff;
          --hero-description-color: rgba(255, 255, 255, 0.8);
          --hero-badge-gradient: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%);
        }

        /* Light Mode Detection */
        @media (prefers-color-scheme: light) {
          :root {
            --color-accent: var(--color-light-accent);
            --color-accent-light: var(--color-light-accent-light);
            --color-accent-dark: var(--color-light-accent-dark);
            --color-accent-rgb: var(--color-light-accent-rgb);
            --color-surface: var(--color-light-surface);
            --color-border: var(--color-light-border);
            --color-text: var(--color-light-text);
            --color-text-light: var(--color-light-text-light);
            --color-secondary: var(--color-light-secondary);
            --hero-bg-gradient: var(--hero-light-bg-gradient);
            --hero-text-color: var(--hero-light-text-color);
            --hero-description-color: var(--hero-light-description-color);
            --hero-badge-gradient: var(--hero-light-badge-gradient);
          }
        }

        .resume-section {
          padding: 80px 0;
          background: var(--hero-bg-gradient);
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          transition: background 0.3s ease;
        }

        .resume-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 2;
        }

        /* Updated header with button layout */
        .section-header-with-button {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 60px;
          flex-wrap: wrap;
          gap: 20px;
        }

        .header-content {
          flex: 1;
          min-width: 300px;
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
          margin: 0 0 16px 0;
          border-radius: 2px;
          transition: background 0.3s ease;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: var(--hero-description-color);
          font-weight: 500;
          transition: color 0.3s ease;
        }

        /* Download Resume Button - Enhanced for Light/Dark Mode */
        .download-resume-btn {
          background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-light) 100%);
          color: white;
          border: none;
          padding: 14px 32px;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          box-shadow: 0 4px 15px rgba(var(--color-accent-rgb), 0.3);
          white-space: nowrap;
          margin-top: 10px;
          height: fit-content;
          align-self: center;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        .download-resume-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, var(--color-accent-dark) 0%, var(--color-accent) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        .download-resume-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(var(--color-accent-rgb), 0.4);
        }

        .download-resume-btn:hover::before {
          opacity: 1;
        }

        .download-resume-btn:active {
          transform: translateY(-1px);
        }

        .download-icon {
          font-size: 0.9em;
        }

        /* Light Mode specific button adjustments */
        @media (prefers-color-scheme: light) {
          .download-resume-btn {
            border: 2px solid transparent;
            background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-light) 100%);
          }
          
          .download-resume-btn::before {
            background: linear-gradient(135deg, var(--color-accent-dark) 0%, var(--color-accent) 100%);
          }
          
          .download-resume-btn:hover {
            box-shadow: 0 8px 25px rgba(var(--color-accent-rgb), 0.4);
          }
        }

        /* Rest of your existing styles */
        .resume-tabs {
          display: flex;
          justify-content: center;
          gap: 4px;
          margin-bottom: 50px;
          background: var(--color-surface);
          padding: 8px;
          border-radius: 50px;
          border: 1px solid var(--color-border);
          max-width: 400px;
          margin: 0 auto 50px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .tab-button {
          padding: 12px 32px;
          border-radius: 50px;
          border: none;
          background: transparent;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: var(--color-text-light);
        }

        .tab-button:hover {
          background: rgba(var(--color-accent-rgb), 0.1);
          color: var(--color-accent);
        }

        .tab-button.active {
          background: var(--hero-badge-gradient);
          color: white;
          box-shadow: 0 4px 15px rgba(var(--color-accent-rgb), 0.3);
        }

        .timeline-container {
          position: relative;
          margin-bottom: 60px;
        }

        .timeline-line {
          position: absolute;
          left: 20px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--hero-badge-gradient);
          transform: translateX(-50%);
        }

        .timeline {
          position: relative;
          padding-left: 30px;
          max-width: 800px;
          margin: 0 auto;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 40px;
        }

        .timeline-marker {
          position: absolute;
          left: -40px;
          top: 0;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--color-surface);
          border: 3px solid var(--color-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-accent);
          font-size: 1rem;
          box-shadow: 0 4px 12px rgba(var(--color-accent-rgb), 0.2);
          z-index: 2;
          transition: all 0.3s ease;
        }

        .current-badge {
          position: absolute;
          top: -8px;
          right: -25px;
          background: linear-gradient(90deg, #10b981, #34d399);
          color: white;
          font-size: 0.7rem;
          padding: 2px 8px;
          border-radius: 12px;
          font-weight: 600;
        }

        .timeline-content {
          background: var(--color-surface);
          border-radius: 12px;
          padding: 32px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
          border: 1px solid var(--color-border);
          transition: all 0.3s ease;
        }

        .timeline-content:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .timeline-header {
          margin-bottom: 20px;
        }

        .timeline-title {
          font-size: 1.4rem;
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: 8px;
          transition: color 0.3s ease;
        }

        .timeline-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
          flex-wrap: wrap;
          gap: 10px;
        }

        .company {
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--color-accent);
          transition: color 0.3s ease;
        }

        .period {
          font-size: 0.95rem;
          color: var(--color-text-light);
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 5px;
          transition: color 0.3s ease;
        }

        .location {
          font-size: 0.95rem;
          color: var(--color-text-light);
          display: flex;
          align-items: center;
          gap: 5px;
          transition: color 0.3s ease;
        }

        .timeline-description {
          padding-left: 20px;
        }

        .timeline-list-item {
          margin-bottom: 10px;
          color: var(--color-secondary);
          line-height: 1.6;
          position: relative;
          transition: color 0.3s ease;
        }

        .timeline-list-item::before {
          content: '•';
          color: var(--color-accent);
          font-weight: bold;
          display: inline-block;
          width: 1em;
          margin-left: -1em;
        }

        .subsection-title {
          font-size: 1.8rem;
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: 30px;
          display: flex;
          align-items: center;
          transition: color 0.3s ease;
        }

        .subsection-icon {
          margin-right: 10px;
        }

        .education-section {
          margin-bottom: 60px;
        }

        .education-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }

        .education-card {
          background: var(--color-surface);
          border-radius: 12px;
          padding: 32px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
          border: 1px solid var(--color-border);
          transition: all 0.3s ease;
        }

        .education-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .education-header {
          margin-bottom: 20px;
        }

        .education-degree {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: 8px;
          transition: color 0.3s ease;
        }

        .education-institution {
          font-size: 1.1rem;
          color: var(--color-accent);
          font-weight: 500;
          margin-bottom: 8px;
          transition: color 0.3s ease;
        }

        .education-period {
          font-size: 0.95rem;
          color: var(--color-text-light);
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .education-description {
          padding-left: 20px;
          color: var(--color-secondary);
          line-height: 1.6;
        }

        .education-list-item {
          margin-bottom: 10px;
          color: var(--color-secondary);
          line-height: 1.6;
          transition: color 0.3s ease;
        }

        .education-list-item::before {
          content: '•';
          color: var(--color-accent);
          font-weight: bold;
          display: inline-block;
          width: 1em;
          margin-left: -1em;
        }

        .certifications-section {
          margin-bottom: 60px;
        }

        .certifications-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .certification-card {
          background: var(--color-surface);
          border-radius: 12px;
          padding: 24px;
          display: flex;
          align-items: center;
          gap: 20px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
          border: 1px solid var(--color-border);
          transition: all 0.3s ease;
        }

        .certification-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .certification-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--hero-badge-gradient);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .certification-content {
          flex: 1;
        }

        .certification-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: 4px;
          transition: color 0.3s ease;
        }

        .certification-issuer {
          font-size: 0.95rem;
          color: var(--color-text-light);
          margin-bottom: 4px;
          transition: color 0.3s ease;
        }

        .certification-year {
          font-size: 0.9rem;
          color: var(--color-accent);
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .leadership-section {
          margin-top: 60px;
        }

        .leadership-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
          margin-top: 30px;
        }

        .leadership-item {
          background: var(--color-surface);
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
          border: 1px solid var(--color-border);
          transition: all 0.3s ease;
        }

        .leadership-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .leadership-item-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 2px solid var(--color-border);
          transition: color 0.3s ease, border-color 0.3s ease;
        }

        .leadership-list {
          padding-left: 20px;
          color: var(--color-secondary);
          line-height: 1.6;
        }

        .leadership-list-item {
          margin-bottom: 10px;
          transition: color 0.3s ease;
        }

        .leadership-list-item::before {
          content: '•';
          color: var(--color-accent);
          font-weight: bold;
          display: inline-block;
          width: 1em;
          margin-left: -1em;
        }

        @media (max-width: 768px) {
          .resume-section {
            padding: 60px 0;
          }

          .section-header-with-button {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 30px;
          }

          .header-content {
            width: 100%;
          }

          .section-divider {
            margin: 0 auto 16px;
          }

          .section-title {
            font-size: 2rem;
          }

          .resume-tabs {
            flex-direction: column;
            max-width: 300px;
            border-radius: 12px;
          }

          .tab-button {
            padding: 12px 20px;
          }

          .timeline-line {
            left: 50%;
            transform: translateX(-50%);
          }

          .timeline-marker {
            left: 50%;
            transform: translateX(-50%);
          }

          .timeline-content {
            margin-top: 40px;
            margin-left: 0;
            padding: 20px;
          }

          .education-grid {
            grid-template-columns: 1fr;
          }

          .certifications-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }

          .leadership-content {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .timeline-meta {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }

          .period, .location {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 1.8rem;
          }

          .subsection-title {
            font-size: 1.5rem;
          }

          .download-resume-btn {
            width: 100%;
            padding: 12px 24px;
          }

          .certifications-grid {
            grid-template-columns: 1fr;
          }

          .certification-card {
            flex-direction: column;
            text-align: center;
            gap: 15px;
          }

          .certification-icon {
            margin: 0 auto;
          }

          .timeline-content {
            padding: 16px;
          }

          .timeline-title {
            font-size: 1.2rem;
          }

          .company {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Resume;