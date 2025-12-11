import React, { useState } from 'react';
import { FaBriefcase, FaGraduationCap, FaCertificate, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const Resume: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education' | 'certifications'>('experience');

  const experiences = [
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
      location: 'Remote',
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

  const education = [
    {
      id: 1,
      degree: 'Bachelor of Business Information Technology',
      institution: 'University of Embu',
      period: 'September 2021 - September 2025',
      description: [
        
        'Key coursework:Programming Fundamentals, Object-Oriented Programming, Database Management Systems (DBMS), Computer Networks, Web Development, System Analysis & Design, Software Engineering, IT Project Management, Mobile Application Development, AI & ML'
      ],
      type: 'education'
    },
    {
      id: 2,
      degree: 'Kenya Certificate of Secondary Education (K.C.S.E)',
      institution: 'Geta Secondary School',
      period: 'January 2016 – April 2021',
      description: [
        
      ],
      type: 'education'
    }
  ];

  const certifications = [
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

  // Main container styles
  const sectionStyles: React.CSSProperties = {
    padding: '80px 0',
    background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
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

  // Tab styles
  const resumeTabsStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    gap: '4px',
    marginBottom: '50px',
    background: '#ffffff',
    padding: '8px',
    borderRadius: '50px',
    border: '1px solid #e2e8f0',
    maxWidth: '400px',
    margin: '0 auto 50px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  };

  const baseTabButtonStyles: React.CSSProperties = {
    padding: '12px 32px',
    borderRadius: '50px',
    border: 'none',
    background: 'transparent',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
  };

  const activeTabButtonStyles: React.CSSProperties = {
    background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
    color: 'white',
    boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
  };

  // Timeline styles
  const timelineContainerStyles: React.CSSProperties = {
    position: 'relative',
    marginBottom: '60px',
  };

  const timelineStyles: React.CSSProperties = {
    position: 'relative',
    paddingLeft: '30px',
    maxWidth: '800px',
    margin: '0 auto',
  };

  const timelineLineStyles: React.CSSProperties = {
    position: 'absolute',
    left: '20px',
    top: '0',
    bottom: '0',
    width: '2px',
    background: 'linear-gradient(to bottom, #3b82f6, #8b5cf6)',
  };

  const timelineItemStyles: React.CSSProperties = {
    position: 'relative',
    marginBottom: '40px',
  };

  const timelineMarkerStyles: React.CSSProperties = {
    position: 'absolute',
    left: '-40px',
    top: '0',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'white',
    border: '3px solid #3b82f6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#3b82f6',
    fontSize: '1rem',
    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.2)',
    zIndex: 2,
  };

  const currentBadgeStyles: React.CSSProperties = {
    position: 'absolute',
    top: '-8px',
    right: '-25px',
    background: 'linear-gradient(90deg, #10b981, #34d399)',
    color: 'white',
    fontSize: '0.7rem',
    padding: '2px 8px',
    borderRadius: '12px',
    fontWeight: 600,
  };

  const timelineContentStyles: React.CSSProperties = {
    background: 'white',
    borderRadius: '12px',
    padding: '32px',
    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)',
    border: '1px solid #e2e8f0',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const timelineHeaderStyles: React.CSSProperties = {
    marginBottom: '20px',
  };

  const timelineTitleStyles: React.CSSProperties = {
    fontSize: '1.4rem',
    fontWeight: 600,
    color: '#1e293b',
    marginBottom: '8px',
  };

  const timelineMetaStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px',
    flexWrap: 'wrap',
    gap: '10px',
  };

  const companyStyles: React.CSSProperties = {
    fontSize: '1.1rem',
    fontWeight: 500,
    color: '#3b82f6',
  };

  const periodStyles: React.CSSProperties = {
    fontSize: '0.95rem',
    color: '#64748b',
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  };

  const locationStyles: React.CSSProperties = {
    fontSize: '0.95rem',
    color: '#64748b',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  };

  const timelineDescriptionStyles: React.CSSProperties = {
    paddingLeft: '20px',
  };

  const timelineListItemStyles: React.CSSProperties = {
    marginBottom: '10px',
    color: '#475569',
    lineHeight: 1.6,
    position: 'relative',
  };

  // Education styles
  const subsectionTitleStyles: React.CSSProperties = {
    fontSize: '1.8rem',
    fontWeight: 600,
    color: '#1e293b',
    marginBottom: '30px',
    display: 'flex',
    alignItems: 'center',
  };

  const educationSectionStyles: React.CSSProperties = {
    marginBottom: '60px',
  };

  const educationGridStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '30px',
  };

  const educationCardStyles: React.CSSProperties = {
    background: 'white',
    borderRadius: '12px',
    padding: '32px',
    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)',
    border: '1px solid #e2e8f0',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const educationHeaderStyles: React.CSSProperties = {
    marginBottom: '20px',
  };

  const educationDegreeStyles: React.CSSProperties = {
    fontSize: '1.3rem',
    fontWeight: 600,
    color: '#1e293b',
    marginBottom: '8px',
  };

  const educationInstitutionStyles: React.CSSProperties = {
    fontSize: '1.1rem',
    color: '#3b82f6',
    fontWeight: 500,
    marginBottom: '8px',
  };

  const educationPeriodStyles: React.CSSProperties = {
    fontSize: '0.95rem',
    color: '#64748b',
    fontWeight: 500,
  };

  const educationDescriptionStyles: React.CSSProperties = {
    paddingLeft: '20px',
    color: '#475569',
    lineHeight: 1.6,
  };

  // Certifications styles
  const certificationsSectionStyles: React.CSSProperties = {
    marginBottom: '60px',
  };

  const certificationsGridStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  };

  const certificationCardStyles: React.CSSProperties = {
    background: 'white',
    borderRadius: '12px',
    padding: '24px',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)',
    border: '1px solid #e2e8f0',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const certificationIconStyles: React.CSSProperties = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '1.2rem',
    flexShrink: 0,
  };

  const certificationContentStyles: React.CSSProperties = {
    flex: 1,
  };

  const certificationNameStyles: React.CSSProperties = {
    fontSize: '1.1rem',
    fontWeight: 600,
    color: '#1e293b',
    marginBottom: '4px',
  };

  const certificationIssuerStyles: React.CSSProperties = {
    fontSize: '0.95rem',
    color: '#64748b',
    marginBottom: '4px',
  };

  const certificationYearStyles: React.CSSProperties = {
    fontSize: '0.9rem',
    color: '#3b82f6',
    fontWeight: 600,
  };

  // Leadership styles
  const leadershipSectionStyles: React.CSSProperties = {
    marginTop: '60px',
  };

  const leadershipContentStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '40px',
    marginTop: '30px',
  };

  const leadershipItemStyles: React.CSSProperties = {
    background: 'white',
    borderRadius: '12px',
    padding: '30px',
    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)',
    border: '1px solid #e2e8f0',
  };

  const leadershipItemTitleStyles: React.CSSProperties = {
    fontSize: '1.2rem',
    fontWeight: 600,
    color: '#1e293b',
    marginBottom: '20px',
    paddingBottom: '10px',
    borderBottom: '2px solid #f1f5f9',
  };

  const leadershipListStyles: React.CSSProperties = {
    paddingLeft: '20px',
    color: '#475569',
    lineHeight: 1.6,
  };

  const leadershipListItemStyles: React.CSSProperties = {
    marginBottom: '10px',
  };

  // Hover effects
  const [hoverState, setHoverState] = useState({
    experience: false,
    education: false,
    certifications: false,
    timelineItems: Array(experiences.length).fill(false),
    educationCards: Array(education.length).fill(false),
    certificationCards: Array(certifications.length).fill(false),
  });

  const hoverEffects = {
    timelineContent: {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    },
    educationCard: {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    },
    certificationCard: {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    },
    tabButton: {
      background: 'rgba(59, 130, 246, 0.1)',
      color: '#3b82f6',
    },
  };

  return (
    <section style={sectionStyles}>
      <div style={containerStyles}>
        <div style={sectionHeaderStyles}>
          <h2 style={sectionTitleStyles}>My Resume</h2>
          <div style={sectionDividerStyles}></div>
          <p style={sectionSubtitleStyles}>Professional Journey & Education</p>
        </div>

        <div style={resumeTabsStyles}>
          <button
            style={{
              ...baseTabButtonStyles,
              ...(activeTab === 'experience' && activeTabButtonStyles),
              ...(activeTab !== 'experience' && hoverState.experience && hoverEffects.tabButton),
            }}
            onClick={() => setActiveTab('experience')}
            onMouseEnter={() => setHoverState(prev => ({ ...prev, experience: true }))}
            onMouseLeave={() => setHoverState(prev => ({ ...prev, experience: false }))}
          >
            <FaBriefcase /> Experience
          </button>
          <button
            style={{
              ...baseTabButtonStyles,
              ...(activeTab === 'education' && activeTabButtonStyles),
              ...(activeTab !== 'education' && hoverState.education && hoverEffects.tabButton),
            }}
            onClick={() => setActiveTab('education')}
            onMouseEnter={() => setHoverState(prev => ({ ...prev, education: true }))}
            onMouseLeave={() => setHoverState(prev => ({ ...prev, education: false }))}
          >
            <FaGraduationCap /> Education
          </button>
          <button
            style={{
              ...baseTabButtonStyles,
              ...(activeTab === 'certifications' && activeTabButtonStyles),
              ...(activeTab !== 'certifications' && hoverState.certifications && hoverEffects.tabButton),
            }}
            onClick={() => setActiveTab('certifications')}
            onMouseEnter={() => setHoverState(prev => ({ ...prev, certifications: true }))}
            onMouseLeave={() => setHoverState(prev => ({ ...prev, certifications: false }))}
          >
            <FaCertificate /> Certifications
          </button>
        </div>

        {activeTab === 'experience' && (
          <div style={timelineContainerStyles}>
            <div style={timelineLineStyles} />
            <div style={timelineStyles}>
              {experiences.map((exp, index) => (
                <div key={exp.id} style={timelineItemStyles}>
                  <div style={timelineMarkerStyles}>
                    <FaBriefcase />
                    {exp.current && <span style={currentBadgeStyles}>Current</span>}
                  </div>
                  <div
                    style={{
                      ...timelineContentStyles,
                      ...(hoverState.timelineItems[index] && hoverEffects.timelineContent),
                    }}
                    onMouseEnter={() => setHoverState(prev => ({
                      ...prev,
                      timelineItems: prev.timelineItems.map((val, i) => i === index ? true : val)
                    }))}
                    onMouseLeave={() => setHoverState(prev => ({
                      ...prev,
                      timelineItems: prev.timelineItems.map((val, i) => i === index ? false : val)
                    }))}
                  >
                    <div style={timelineHeaderStyles}>
                      <h3 style={timelineTitleStyles}>{exp.title}</h3>
                      <div style={timelineMetaStyles}>
                        <span style={companyStyles}>{exp.company}</span>
                        <span style={periodStyles}>
                          <FaCalendarAlt style={{ fontSize: '0.8rem' }} />
                          {exp.period}
                        </span>
                      </div>
                      <div style={locationStyles}>
                        <FaMapMarkerAlt style={{ fontSize: '0.8rem' }} />
                        {exp.location}
                      </div>
                    </div>
                    <ul style={timelineDescriptionStyles}>
                      {exp.description.map((item, idx) => (
                        <li key={idx} style={timelineListItemStyles}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'education' && (
          <div style={educationSectionStyles}>
            <h3 style={subsectionTitleStyles}>
              <span style={{ marginRight: '10px' }}><FaGraduationCap /></span>
              Education Background
            </h3>
            <div style={educationGridStyles}>
              {education.map((edu, index) => (
                <div
                  key={edu.id}
                  style={{
                    ...educationCardStyles,
                    ...(hoverState.educationCards[index] && hoverEffects.educationCard),
                  }}
                  onMouseEnter={() => setHoverState(prev => ({
                    ...prev,
                    educationCards: prev.educationCards.map((val, i) => i === index ? true : val)
                  }))}
                  onMouseLeave={() => setHoverState(prev => ({
                    ...prev,
                    educationCards: prev.educationCards.map((val, i) => i === index ? false : val)
                  }))}
                >
                  <div style={educationHeaderStyles}>
                    <h4 style={educationDegreeStyles}>{edu.degree}</h4>
                    <div style={educationInstitutionStyles}>{edu.institution}</div>
                    <div style={educationPeriodStyles}>{edu.period}</div>
                  </div>
                  <ul style={educationDescriptionStyles}>
                    {edu.description.map((item, idx) => (
                      <li key={idx} style={timelineListItemStyles}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'certifications' && (
          <div style={certificationsSectionStyles}>
            <h3 style={subsectionTitleStyles}>
              <span style={{ marginRight: '10px' }}><FaCertificate /></span>
              Certifications & Training
            </h3>
            <div style={certificationsGridStyles}>
              {certifications.map((cert, index) => (
                <div
                  key={cert.id}
                  style={{
                    ...certificationCardStyles,
                    ...(hoverState.certificationCards[index] && hoverEffects.certificationCard),
                  }}
                  onMouseEnter={() => setHoverState(prev => ({
                    ...prev,
                    certificationCards: prev.certificationCards.map((val, i) => i === index ? true : val)
                  }))}
                  onMouseLeave={() => setHoverState(prev => ({
                    ...prev,
                    certificationCards: prev.certificationCards.map((val, i) => i === index ? false : val)
                  }))}
                >
                  <div style={certificationIconStyles}>
                    <FaCertificate />
                  </div>
                  <div style={certificationContentStyles}>
                    <h4 style={certificationNameStyles}>{cert.name}</h4>
                    <div style={certificationIssuerStyles}>{cert.issuer}</div>
                    <div style={certificationYearStyles}>{cert.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={leadershipSectionStyles}>
          <h3 style={subsectionTitleStyles}>Leadership & Community Engagement</h3>
          <div style={leadershipContentStyles}>
            <div style={leadershipItemStyles}>
              <h4 style={leadershipItemTitleStyles}>Leadership Roles</h4>
              <ul style={leadershipListStyles}>
                <li style={leadershipListItemStyles}>Male Representative – University of Embu Student Association (2024–2025)</li>
                <li style={leadershipListItemStyles}>CIT Departmental Representative – University of Embu Student Association (2023–2024)</li>
                <li style={leadershipListItemStyles}>Founder & Coordinator – Code and Tech Club, University of Embu</li>
                <li style={leadershipListItemStyles}>Treasurer – University of Embu Christian Union IT Ministry (2023–2024)</li>
              </ul>
            </div>
            <div style={leadershipItemStyles}>
              <h4 style={leadershipItemTitleStyles}>Voluntary & Community Engagement</h4>
              <ul style={leadershipListStyles}>
                <li style={leadershipListItemStyles}>Trained peers in multimedia skills (projection, posters, photography)</li>
                <li style={leadershipListItemStyles}>Participated in Kangaru market cleanup activity organized by University of Embu student association</li>
                <li style={leadershipListItemStyles}>Participated in Tree planting activity organized by University of Embu on 10th November 2023</li>
                <li style={leadershipListItemStyles}>Participated in Embu town clean up activity organized by University of Embu on 8th October 2022</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;