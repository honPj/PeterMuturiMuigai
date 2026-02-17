import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaFilter, FaCode, FaServer, FaRobot, FaShoppingCart, FaCheckCircle, FaClock, FaCalendarAlt } from 'react-icons/fa';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  github: string;
  liveUrl?: string;
  category: string;
  status: 'completed' | 'in-progress' | 'planned';
  year: string;
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const sampleProjects: Project[] = [
    {
      id: '1',
      title: 'PJ Vehicle Renting System',
      description: 'Full-stack vehicle rental platform with real-time booking management',
      longDescription: 'A comprehensive vehicle rental system featuring user authentication, payment integration, real-time booking management, and admin dashboard for fleet management. Built with modern technologies for scalability and performance.',
      technologies: ['React', 'Node.js', 'MSSQL', 'TypeScript', 'Express'],
      features: [
        'User & Admin Authentication System',
        'Stripe Payment Integration',
        'Real-time Booking Management',
        'Admin Dashboard Analytics',
        'Vehicle Inventory Management',
        'Booking History & Reports'
      ],
      github: 'https://github.com/honPj',
      liveUrl: '#',
      category: 'Full Stack',
      status: 'completed',
      year: '2025'
    },
    {
      id: '2',
      title: 'AI-Powered Macadamia Sales forecasting model',
      description: 'An Intelligentsystem for predicting future sales of macadamia in kenya ',
      longDescription: 'Machine learning-powered expense tracker that analyzes spending patterns, predicts future expenses, and provides personalized financial insights and savings recommendations.',
      technologies: ['Python', 'Lavrel', 'PHP', 'FastAPI', 'MYSQL'],
      features: [
        'AI-Powered Expense Categorization',
        'Predictive Budget Forecasting',
        'Smart Savings Recommendations',
        'Data Visualization Dashboard',
        'Multi-platform Sync',
        'Financial Goal Tracking'
      ],
      github: 'https://github.com/honPj/macadamia_forecast-.git',
      liveUrl: '#',
      category: 'AI/ML',
      status: 'completed',
      year: '2024'
    },
    {
      id: '3',
      title: 'Resturant Management System',
      description: 'Comprehensive Order making and Resturant management system',
      longDescription: 'Centralized platform for managing and making orders,Accomodation reservations, Resturant coordination with real-time notifications and reporting.',
      technologies: ['React', 'Node.js', 'MSSQL', 'Tailwind'],
      features: [
        'Food ordering System',
        'user and admin Dashboards',
        'Resturant Management',
        'Automated Notifications',
        'Analytics Dashboard',
        
      ],
      github: '#',
      category: 'Web Application',
      status: 'in-progress',
      year: '2024'
    },
    
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: <FaFilter />, count: sampleProjects.length },
    { id: 'Full Stack', name: 'Full Stack', icon: <FaCode />, count: sampleProjects.filter(p => p.category === 'Full Stack').length },
    { id: 'AI/ML', name: 'AI/ML', icon: <FaRobot />, count: sampleProjects.filter(p => p.category === 'AI/ML').length },
    { id: 'Web Application', name: 'Web Apps', icon: <FaServer />, count: sampleProjects.filter(p => p.category === 'Web Application').length },
    { id: 'Analytics', name: 'Analytics', icon: <FaShoppingCart />, count: sampleProjects.filter(p => p.category === 'Analytics').length }
  ];

  const filteredProjects = filter === 'all' 
    ? sampleProjects 
    : sampleProjects.filter(project => project.category === filter);

  const containerStyles = {
    padding: '5rem 0',
    backgroundColor: 'var(--color-surface)',
  };

  const headerStyles = {
    textAlign: 'center' as const,
    marginBottom: '3rem',
  };

  const titleStyles = {
    fontSize: '2.5rem',
    color: 'var(--color-primary)',
    marginBottom: '1rem',
    position: 'relative' as const,
  };

  const dividerStyles = {
    width: '60px',
    height: '4px',
    background: 'linear-gradient(90deg, var(--color-accent), transparent)',
    margin: '0 auto 1rem',
    borderRadius: '4px',
  };

  const subtitleStyles = {
    color: 'var(--color-text-light)',
    fontSize: '1.1rem',
    maxWidth: '600px',
    margin: '0 auto',
  };

  const filterContainerStyles = {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '1rem',
    marginBottom: '3rem',
    justifyContent: 'center',
  };

  const filterButtonStyles = (isActive: boolean) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.5rem',
    backgroundColor: isActive ? 'var(--color-accent)' : 'var(--color-surface)',
    border: `2px solid ${isActive ? 'var(--color-accent)' : 'var(--color-border)'}`,
    borderRadius: '50px',
    color: isActive ? 'white' : 'var(--color-text)',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    ':hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    },
  });

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem',
  };

  const cardStyles = (isExpanded: boolean, status: string) => ({
    backgroundColor: 'var(--color-surface)',
    borderRadius: '16px',
    overflow: 'hidden' as const,
    boxShadow: isExpanded ? '0 20px 40px rgba(0,0,0,0.12)' : '0 4px 20px rgba(0,0,0,0.08)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    position: 'relative' as const,
    transform: isExpanded ? 'translateY(-10px)' : 'none',
    border: `1px solid ${status === 'completed' ? 'rgba(16, 185, 129, 0.2)' : status === 'in-progress' ? 'rgba(245, 158, 11, 0.2)' : 'var(--color-border)'}`,
  });

  const cardHeaderStyles = {
    padding: '2rem 2rem 1rem',
    position: 'relative' as const,
  };

  const statusBadgeStyles = (status: string) => ({
    position: 'absolute' as const,
    top: '1rem',
    right: '1rem',
    padding: '6px 12px',
    borderRadius: '20px',
    fontSize: '0.75rem',
    fontWeight: '600',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
    backgroundColor: status === 'completed' ? 'rgba(16, 185, 129, 0.1)' : 
                    status === 'in-progress' ? 'rgba(245, 158, 11, 0.1)' : 
                    'rgba(148, 163, 184, 0.1)',
    color: status === 'completed' ? '#10b981' : 
           status === 'in-progress' ? '#f59e0b' : 
           'var(--color-text-light)',
    border: `1px solid ${status === 'completed' ? 'rgba(16, 185, 129, 0.2)' : 
                          status === 'in-progress' ? 'rgba(245, 158, 11, 0.2)' : 
                          'var(--color-border)'}`,
  });

  const titleCardStyles = {
    fontSize: '1.5rem',
    color: 'var(--color-primary)',
    marginBottom: '0.5rem',
    fontWeight: '700',
    lineHeight: '1.3',
  };

  const descriptionStyles = {
    color: 'var(--color-text-light)',
    fontSize: '0.95rem',
    lineHeight: '1.6',
    marginBottom: '1rem',
  };

  const techContainerStyles = {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '0.5rem',
    marginBottom: '1rem',
  };

  const techTagStyles = {
    backgroundColor: 'var(--color-background)',
    color: 'var(--color-text)',
    fontSize: '0.8rem',
    padding: '6px 12px',
    borderRadius: '20px',
    border: '1px solid var(--color-border)',
    fontWeight: '500',
  };

  const detailsStyles = {
    padding: '1.5rem',
    backgroundColor: 'var(--color-background)',
    borderTop: '1px solid var(--color-border)',
  };

  const featuresListStyles = {
    listStyle: 'none',
    padding: '0',
    margin: '0 0 1rem 0',
  };

  const featureItemStyles = {
    padding: '0.5rem 0',
    paddingLeft: '1.5rem',
    position: 'relative' as const,
    color: 'var(--color-text)',
    fontSize: '0.9rem',
    lineHeight: '1.5',
  };

  const featureIconStyles = {
    position: 'absolute' as const,
    left: '0',
    color: 'var(--color-accent)',
  };

  const linkContainerStyles = {
    display: 'flex',
    gap: '1rem',
    padding: '1.5rem',
    borderTop: '1px solid var(--color-border)',
  };

  const linkStyles = (type: 'github' | 'live') => ({
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    padding: '0.75rem',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '0.9rem',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    backgroundColor: type === 'github' ? '#24292e' : 'var(--color-accent)',
    color: 'white',
    border: `2px solid ${type === 'github' ? '#24292e' : 'var(--color-accent)'}`,
    ':hover': {
      backgroundColor: 'transparent',
      color: type === 'github' ? '#24292e' : 'var(--color-accent)',
      transform: 'translateY(-2px)',
    },
  });

  const statsContainerStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
    marginTop: '3rem',
  };

  const statCardStyles = {
    textAlign: 'center' as const,
    padding: '2rem',
    backgroundColor: 'var(--color-surface)',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
    border: '1px solid var(--color-border)',
    transition: 'transform 0.3s ease',
    ':hover': {
      transform: 'translateY(-5px)',
    },
  };

  const statNumberStyles = {
    fontSize: '3rem',
    fontWeight: '700',
    color: 'var(--color-accent)',
    lineHeight: '1',
    marginBottom: '0.5rem',
    background: 'linear-gradient(135deg, var(--color-accent), #4fd1c7)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const statLabelStyles = {
    color: 'var(--color-text-light)',
    fontSize: '0.9rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '1px',
    fontWeight: '600',
  };

  return (
    <section id="projects" style={containerStyles}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={headerStyles}>
          <h2 style={titleStyles}>Featured Projects</h2>
          <div style={dividerStyles}></div>
          <p style={subtitleStyles}>
            A curated collection of my most impactful work, showcasing innovative solutions across full-stack development, AI/ML, and web applications.
          </p>
        </div>

        <div style={filterContainerStyles}>
          {categories.map(category => (
            <button
              key={category.id}
              style={filterButtonStyles(filter === category.id)}
              onClick={() => setFilter(category.id)}
            >
              <span style={{ display: 'flex', alignItems: 'center' }}>{category.icon}</span>
              {category.name}
              <span style={{
                marginLeft: '8px',
                backgroundColor: filter === category.id ? 'rgba(255,255,255,0.2)' : 'var(--color-background)',
                padding: '2px 8px',
                borderRadius: '12px',
                fontSize: '0.8rem',
              }}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        <div style={gridStyles}>
          {filteredProjects.map(project => {
            const isExpanded = selectedProject === project.id;
            return (
              <div 
                key={project.id} 
                style={cardStyles(isExpanded, project.status)}
                onClick={() => setSelectedProject(isExpanded ? null : project.id)}
              >
                <div style={cardHeaderStyles}>
                  <div style={statusBadgeStyles(project.status)}>
                    {project.status === 'completed' ? <FaCheckCircle style={{ marginRight: '5px' }} /> :
                     project.status === 'in-progress' ? <FaClock style={{ marginRight: '5px' }} /> :
                     <FaCalendarAlt style={{ marginRight: '5px' }} />}
                    {project.status === 'completed' ? 'Completed' : 
                     project.status === 'in-progress' ? 'In Progress' : 'Planned'}
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <span style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: project.status === 'completed' ? '#10b981' : 
                                      project.status === 'in-progress' ? '#f59e0b' : '#94a3b8',
                    }}></span>
                    <span style={{
                      fontSize: '0.85rem',
                      color: 'var(--color-text-light)',
                      fontWeight: '500',
                    }}>
                      {project.year} • {project.category}
                    </span>
                  </div>
                  
                  <h3 style={titleCardStyles}>{project.title}</h3>
                  <p style={descriptionStyles}>{project.description}</p>
                  
                  <div style={techContainerStyles}>
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <span key={index} style={techTagStyles}>{tech}</span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span style={{
                        ...techTagStyles,
                        backgroundColor: 'var(--color-accent)',
                        color: 'white',
                      }}>
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {isExpanded && (
                  <div style={detailsStyles}>
                    <h4 style={{ 
                      color: 'var(--color-accent)', 
                      marginBottom: '1rem',
                      fontSize: '1.1rem',
                    }}>
                      Project Highlights
                    </h4>
                    <p style={{ 
                      color: 'var(--color-text)', 
                      marginBottom: '1.5rem',
                      lineHeight: '1.6',
                    }}>
                      {project.longDescription}
                    </p>
                    
                    <h4 style={{ 
                      color: 'var(--color-accent)', 
                      marginBottom: '1rem',
                      fontSize: '1.1rem',
                    }}>
                      Key Features
                    </h4>
                    <ul style={featuresListStyles}>
                      {project.features.map((feature, index) => (
                        <li key={index} style={featureItemStyles}>
                          <FaCheckCircle style={featureIconStyles} size={14} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div style={linkContainerStyles}>
                  <a
                    href={project.github}
                    style={linkStyles('github')}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub />
                    View Code
                  </a>
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      style={linkStyles('live')}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div style={statsContainerStyles}>
          {[
            { number: sampleProjects.length, label: 'Projects Delivered' },
            { number: 10, label: 'Technologies Mastered' },
            { number: 10, label: 'Client Satisfaction' },
            { number: 1, label: 'Years Experience' },
          ].map((stat, index) => (
            <div key={index} style={statCardStyles}>
              <div style={statNumberStyles}>{stat.number}+</div>
              <div style={statLabelStyles}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;