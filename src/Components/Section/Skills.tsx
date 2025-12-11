import React, { useState } from 'react';
import { FaCode, FaServer, FaDatabase, FaRobot, FaNetworkWired, FaPaintBrush } from 'react-icons/fa';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoverState, setHoverState] = useState({
    categories: {} as Record<string, boolean>,
    skillItems: {} as Record<string, boolean>,
    tags: {} as Record<string, boolean>,
    tools: {} as Record<string, boolean>,
  });

  const skillsByCategory = {
    programming: {
      icon: <FaCode />,
      title: 'Programming Languages',
      color: '#3B82F6',
      skills: [
        { name: 'Python', proficiency: 70, level: 'Intermediate' },
        { name: 'JavaScript', proficiency: 85, level: 'Advanced' },
        { name: 'TypeScript', proficiency: 80, level: 'Advanced' },
        { name: 'Java', proficiency: 55, level: 'Intermediate' },
        { name: 'C', proficiency: 50, level: 'Intermediate' }
      ]
    },
    web: {
      icon: <FaServer />,
      title: 'Web Development',
      color: '#8B5CF6',
      skills: [
        { name: 'React', proficiency: 85, level: 'Expert' },
        { name: 'Angular', proficiency: 60, level: 'Intermediate' },
        { name: 'Node.js', proficiency: 80, level: 'Expert' },
        { name: 'Express.js', proficiency: 80, level: 'Intermediate'},
        { name: 'Hono.js', proficiency: 70, level: 'Intermediate' },
        { name: 'HTML5/CSS3', proficiency: 90, level: 'Expert' }
      ]
    },
    databases: {
      icon: <FaDatabase />,
      title: 'Databases',
      color: '#10B981',
      skills: [
        { name: 'MSSQL', proficiency: 85, level: 'Expert' },
        { name: 'MySQL', proficiency: 80, level: 'Expert' },
        { name: 'PostgreSQL', proficiency: 45, level: 'Intermediate' },
        { name: 'MongoDB', proficiency: 60, level: 'Intermediate' }
      ]
    },
    ai: {
      icon: <FaRobot />,
      title: 'AI/ML & Data Analysis',
      color: '#EF4444',
      skills: [
        { name: 'Python for AI/ML', proficiency: 50, level: 'Intermediate'},
        { name: 'Predictive Modeling', proficiency: 45, level: 'Intermediate'},
        { name: 'Forecasting Systems', proficiency: 40, level: 'Intermediate' },
        { name: 'Data Analysis', proficiency: 55, level: 'Intermediate' }
      ]
    },
    networking: {
      icon: <FaNetworkWired />,
      title: 'Networking & Security',
      color: '#F59E0B',
      skills: [
        { name: 'Network Configuration', proficiency: 65, level: 'Intermediate'},
        { name: 'Cybersecurity', proficiency: 30, level: 'Entry'},
        { name: 'Cable Termination', proficiency: 90, level: 'Expert' },
        { name: 'Troubleshooting', proficiency: 70, level: 'Intermediate' }
      ]
    },
    design: {
      icon: <FaPaintBrush />,
      title: 'Multimedia & Design',
      color: '#EC4899',
      skills: [
        { name: 'Graphic Design', proficiency: 80, level: 'Expert' },
        { name: 'Video Production', proficiency: 75, level: 'Intermediate' },
        { name: 'Photography', proficiency: 75, level: 'Intermediate' },
        { name: 'Digital Content Creation', proficiency: 60, level: 'Intermediate' }
      ]
    }
  };

  const professionalSkills = [
    'Project Coordination',
    'Technical Training',
    'Stakeholder Communication',
    'Presentation Skills',
    'Team Leadership',
    'Problem Solving',
    'Agile Methodologies',
    'Documentation'
  ];

  const tools = [
    'GitHub', 'Microsoft Office', 'Microsoft 365', 'Visual Studio', 
    'Android Studio', 'NetBeans', 'Eclipse', 'Wireshark', 'Power BI',
    'Excel', 'Photoshop', 'Premiere Pro'
  ];

  const categories = [
    { id: 'all', name: 'All Skills', icon: '📊' },
    { id: 'programming', name: 'Programming', icon: '💻' },
    { id: 'web', name: 'Web Dev', icon: '🌐' },
    { id: 'databases', name: 'Databases', icon: '🗄️' },
    { id: 'ai', name: 'AI/ML', icon: '🤖' },
    { id: 'networking', name: 'Networking', icon: '🔧' },
    { id: 'design', name: 'Design', icon: '🎨' }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? Object.entries(skillsByCategory).map(([key, value]) => ({ key, ...value }))
    : [{ key: activeCategory, ...skillsByCategory[activeCategory as keyof typeof skillsByCategory] }];

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

  // Category buttons
  const skillsCategoriesStyles: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center',
    marginBottom: '50px',
  };

  const baseCategoryBtnStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '12px 24px',
    borderRadius: '50px',
    border: '1px solid #e2e8f0',
    background: '#ffffff',
    color: '#64748b',
    fontSize: '0.95rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
  };

  const activeCategoryBtnStyles: React.CSSProperties = {
    background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
    color: 'white',
    border: 'none',
    boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
    transform: 'translateY(-2px)',
  };

  const hoverCategoryBtnStyles: React.CSSProperties = {
    background: '#f1f5f9',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  };

  // Skills container
  const skillsContainerStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '30px',
    marginBottom: '60px',
  };

  const skillCategoryStyles: React.CSSProperties = {
    background: '#ffffff',
    borderRadius: '16px',
    padding: '30px',
    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)',
    border: '1px solid #e2e8f0',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const categoryHeaderStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '25px',
    paddingBottom: '20px',
    borderBottom: '2px solid #f1f5f9',
  };

  const categoryIconWrapperStyles = (color: string): React.CSSProperties => ({
    width: '50px',
    height: '50px',
    borderRadius: '12px',
    background: `linear-gradient(135deg, ${color}20, ${color}40)`,
    border: `1px solid ${color}30`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem',
    color: color,
  });

  const categoryTitleStyles: React.CSSProperties = {
    fontSize: '1.3rem',
    fontWeight: 600,
    color: '#1e293b',
  };

  // Skills list
  const skillsListStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  };

  const skillItemStyles: React.CSSProperties = {
    position: 'relative',
  };

  const skillInfoStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  };

  const skillNameRowStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  };

  const skillNameStyles: React.CSSProperties = {
    fontSize: '1rem',
    fontWeight: 600,
    color: '#1e293b',
  };

  const skillLevelStyles: React.CSSProperties = {
    fontSize: '0.85rem',
    fontWeight: 500,
    padding: '2px 8px',
    borderRadius: '12px',
    background: '#f1f5f9',
    color: '#64748b',
  };

  const skillMetaStyles: React.CSSProperties = {
    fontSize: '0.9rem',
    color: '#64748b',
  };

  const skillBarStyles: React.CSSProperties = {
    height: '8px',
    background: '#e2e8f0',
    borderRadius: '4px',
    overflow: 'hidden',
    position: 'relative',
  };

  const skillProgressStyles = (proficiency: number, color: string): React.CSSProperties => ({
    height: '100%',
    width: `${proficiency}%`,
    background: `linear-gradient(90deg, ${color}, ${color}dd)`,
    borderRadius: '4px',
    position: 'relative',
    transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
  });

  // Other skills section
  const otherSkillsSectionStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '50px',
    marginBottom: '60px',
  };

  const subsectionTitleStyles: React.CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: '#1e293b',
    marginBottom: '25px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  };

  const skillsTagsStyles: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  };

  const skillTagStyles: React.CSSProperties = {
    background: '#f8fafc',
    color: '#475569',
    padding: '8px 16px',
    borderRadius: '8px',
    fontSize: '0.95rem',
    fontWeight: 500,
    border: '1px solid #e2e8f0',
    transition: 'all 0.3s ease',
  };

  // Tools section
  const toolsGridStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
    gap: '15px',
  };

  const toolItemStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '12px',
    background: '#f8fafc',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    transition: 'all 0.3s ease',
  };

  const toolIconStyles: React.CSSProperties = {
    fontSize: '1.2rem',
  };

  const toolNameStyles: React.CSSProperties = {
    fontSize: '0.95rem',
    fontWeight: 500,
    color: '#475569',
  };

  // Languages section
  const languagesSectionStyles: React.CSSProperties = {
    background: '#ffffff',
    borderRadius: '16px',
    padding: '30px',
    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)',
    border: '1px solid #e2e8f0',
  };

  const languagesContainerStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '25px',
  };

  const languageItemStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  };

  const languageNameStyles: React.CSSProperties = {
    fontSize: '1.1rem',
    fontWeight: 600,
    color: '#1e293b',
    width: '100px',
  };

  const languageLevelStyles: React.CSSProperties = {
    display: 'flex',
    gap: '5px',
    flex: 1,
  };

  const levelDotStyles = (active: boolean): React.CSSProperties => ({
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: active ? 'linear-gradient(90deg, #3b82f6, #8b5cf6)' : '#e2e8f0',
    transition: 'all 0.3s ease',
  });

  const languageProficiencyStyles: React.CSSProperties = {
    fontSize: '0.95rem',
    fontWeight: 600,
    color: '#3b82f6',
    width: '80px',
    textAlign: 'right',
  };

  // Hover effects
  const hoverEffects = {
    skillCategory: {
      transform: 'translateY(-5px)',
      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)',
    },
    skillTag: {
      background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
      color: 'white',
      borderColor: '#3b82f6',
      transform: 'translateY(-2px)',
    },
    toolItem: {
      background: '#ffffff',
      transform: 'translateY(-3px)',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
      borderColor: '#cbd5e1',
    },
  };

  return (
    <section style={sectionStyles}>
      <div style={containerStyles}>
        <div style={sectionHeaderStyles}>
          <h2 style={sectionTitleStyles}>My Skills</h2>
          <div style={sectionDividerStyles}></div>
          <p style={sectionSubtitleStyles}>Technical expertise & capabilities</p>
        </div>

        <div style={skillsCategoriesStyles}>
          {categories.map((category) => (
            <button
              key={category.id}
              style={{
                ...baseCategoryBtnStyles,
                ...(activeCategory === category.id && activeCategoryBtnStyles),
                ...(activeCategory !== category.id && hoverState.categories[category.id] && hoverCategoryBtnStyles),
              }}
              onClick={() => setActiveCategory(category.id)}
              onMouseEnter={() => setHoverState(prev => ({
                ...prev,
                categories: { ...prev.categories, [category.id]: true }
              }))}
              onMouseLeave={() => setHoverState(prev => ({
                ...prev,
                categories: { ...prev.categories, [category.id]: false }
              }))}
            >
              <span style={{ fontSize: '1.1rem' }}>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        <div style={skillsContainerStyles}>
          {filteredSkills.map((category) => (
            <div 
              key={category.key}
              style={{
                ...skillCategoryStyles,
                ...(hoverState.skillItems[category.key] && hoverEffects.skillCategory),
              }}
              onMouseEnter={() => setHoverState(prev => ({
                ...prev,
                skillItems: { ...prev.skillItems, [category.key]: true }
              }))}
              onMouseLeave={() => setHoverState(prev => ({
                ...prev,
                skillItems: { ...prev.skillItems, [category.key]: false }
              }))}
            >
              <div style={categoryHeaderStyles}>
                <div style={categoryIconWrapperStyles(category.color)}>
                  {category.icon}
                </div>
                <h3 style={categoryTitleStyles}>{category.title}</h3>
              </div>
              <div style={skillsListStyles}>
                {category.skills.map((skill) => (
                  <div key={skill.name} style={skillItemStyles}>
                    <div style={skillInfoStyles}>
                      <div style={skillNameRowStyles}>
                        <span style={skillNameStyles}>{skill.name}</span>
                        <span style={skillLevelStyles}>{skill.level}</span>
                      </div>
                      <div style={skillMetaStyles}>
                        
                      </div>
                    </div>
                    <div style={skillBarStyles}>
                      <div 
                        style={skillProgressStyles(skill.proficiency, category.color)}
                        className="animate-progress"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={otherSkillsSectionStyles}>
          <div>
            <h3 style={subsectionTitleStyles}>Professional Skills</h3>
            <div style={skillsTagsStyles}>
              {professionalSkills.map((skill) => (
                <span 
                  key={skill}
                  style={{
                    ...skillTagStyles,
                    ...(hoverState.tags[skill] && hoverEffects.skillTag),
                  }}
                  onMouseEnter={() => setHoverState(prev => ({
                    ...prev,
                    tags: { ...prev.tags, [skill]: true }
                  }))}
                  onMouseLeave={() => setHoverState(prev => ({
                    ...prev,
                    tags: { ...prev.tags, [skill]: false }
                  }))}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 style={subsectionTitleStyles}>Tools & Technologies</h3>
            <div style={toolsGridStyles}>
              {tools.map((tool) => (
                <div 
                  key={tool}
                  style={{
                    ...toolItemStyles,
                    ...(hoverState.tools[tool] && hoverEffects.toolItem),
                  }}
                  onMouseEnter={() => setHoverState(prev => ({
                    ...prev,
                    tools: { ...prev.tools, [tool]: true }
                  }))}
                  onMouseLeave={() => setHoverState(prev => ({
                    ...prev,
                    tools: { ...prev.tools, [tool]: false }
                  }))}
                >
                  <div style={toolIconStyles}>🛠️</div>
                  <span style={toolNameStyles}>{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={languagesSectionStyles}>
          <h3 style={subsectionTitleStyles}>Languages</h3>
          <div style={languagesContainerStyles}>
            <div style={languageItemStyles}>
              <div style={languageNameStyles}>English</div>
              <div style={languageLevelStyles}>
                <span style={levelDotStyles(true)}></span>
                <span style={levelDotStyles(true)}></span>
                <span style={levelDotStyles(true)}></span>
                <span style={levelDotStyles(true)}></span>
                <span style={levelDotStyles(true)}></span>
              </div>
              <div style={languageProficiencyStyles}>Fluent</div>
            </div>
            <div style={languageItemStyles}>
              <div style={languageNameStyles}>Kiswahili</div>
              <div style={languageLevelStyles}>
                <span style={levelDotStyles(true)}></span>
                <span style={levelDotStyles(true)}></span>
                <span style={levelDotStyles(true)}></span>
                <span style={levelDotStyles(true)}></span>
                <span style={levelDotStyles(true)}></span>
              </div>
              <div style={languageProficiencyStyles}>Native</div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes progressAnimation {
            0% {
              width: 0%;
            }
          }
          
          .animate-progress {
            animation: progressAnimation 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }
          
          @media (max-width: 768px) {
            .other-skills-section {
              grid-template-columns: 1fr;
              gap: 40px;
            }
            
            .skills-container {
              grid-template-columns: 1fr;
            }
            
            .tools-grid {
              grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Skills;