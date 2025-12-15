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
      color: '#8B5CF6',
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

  return (
    <section className="skills-section">
      {/* Floating background elements like Hero */}
      <div className="floating-elements">
        {['💻', '🌐', '🗄️', '🤖', '🔧', '🎨'].map((icon, index) => (
          <div key={index} className="floating-element">
            {icon}
          </div>
        ))}
      </div>

      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">My Skills</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">Technical expertise & capabilities</p>
        </div>

        <div className="skills-categories">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''} ${
                hoverState.categories[category.id] ? 'hover' : ''
              }`}
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
              <span className="category-icon">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((category) => (
            <div 
              key={category.key}
              className={`skill-category ${hoverState.skillItems[category.key] ? 'hover' : ''}`}
              onMouseEnter={() => setHoverState(prev => ({
                ...prev,
                skillItems: { ...prev.skillItems, [category.key]: true }
              }))}
              onMouseLeave={() => setHoverState(prev => ({
                ...prev,
                skillItems: { ...prev.skillItems, [category.key]: false }
              }))}
            >
              <div className="category-header">
                <div className="category-icon-wrapper" style={{ 
                  background: `linear-gradient(135deg, ${category.color}20, ${category.color}40)`,
                  border: `1px solid ${category.color}30`,
                  color: category.color 
                }}>
                  {category.icon}
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-info">
                      <div className="skill-name-row">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}</span>
                      </div>
                      <div className="skill-meta">
                        {skill.proficiency}%
                      </div>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress animate-progress"
                        style={{
                          width: `${skill.proficiency}%`,
                          background: `linear-gradient(90deg, ${category.color}, ${category.color}dd)`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="other-skills-section">
          <div>
            <h3 className="subsection-title">Professional Skills</h3>
            <div className="skills-tags">
              {professionalSkills.map((skill) => (
                <span 
                  key={skill}
                  className={`skill-tag ${hoverState.tags[skill] ? 'hover' : ''}`}
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
            <h3 className="subsection-title">Tools & Technologies</h3>
            <div className="tools-grid">
              {tools.map((tool) => (
                <div 
                  key={tool}
                  className={`tool-item ${hoverState.tools[tool] ? 'hover' : ''}`}
                  onMouseEnter={() => setHoverState(prev => ({
                    ...prev,
                    tools: { ...prev.tools, [tool]: true }
                  }))}
                  onMouseLeave={() => setHoverState(prev => ({
                    ...prev,
                    tools: { ...prev.tools, [tool]: false }
                  }))}
                >
                  <div className="tool-icon">🛠️</div>
                  <span className="tool-name">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="languages-section">
          <h3 className="subsection-title">Languages</h3>
          <div className="languages-container">
            <div className="language-item">
              <div className="language-name">English</div>
              <div className="language-level">
                <span className="level-dot active"></span>
                <span className="level-dot active"></span>
                <span className="level-dot active"></span>
                <span className="level-dot active"></span>
                <span className="level-dot active"></span>
              </div>
              <div className="language-proficiency">Fluent</div>
            </div>
            <div className="language-item">
              <div className="language-name">Kiswahili</div>
              <div className="language-level">
                <span className="level-dot active"></span>
                <span className="level-dot active"></span>
                <span className="level-dot active"></span>
                <span className="level-dot active"></span>
                <span className="level-dot active"></span>
              </div>
              <div className="language-proficiency">Native</div>
            </div>
          </div>
        </div>
      </div>

      <style >{`
        .skills-section {
          padding: 80px 0;
          background: var(--hero-bg-gradient);
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          transition: background 0.3s ease;
        }

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          z-index: 1;
        }

        .floating-element {
          position: absolute;
          font-size: 2rem;
          color: rgba(var(--color-accent-rgb), 0.1);
          animation: float 6s ease-in-out infinite;
        }

        .skills-container {
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

        .skills-categories {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
          margin-bottom: 50px;
        }

        .category-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 24px;
          border-radius: 50px;
          border: 1px solid var(--color-border);
          background: var(--color-surface);
          color: var(--color-text-light);
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .category-btn:hover:not(.active) {
          background: var(--color-background);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .category-btn.active {
          background: var(--hero-badge-gradient);
          color: white;
          border: none;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
          transform: translateY(-2px);
        }

        .category-icon {
          font-size: 1.1rem;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }

        .skill-category {
          background: var(--color-surface);
          border-radius: 16px;
          padding: 30px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
          border: 1px solid var(--color-border);
          transition: all 0.3s ease;
        }

        .skill-category.hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 25px;
          padding-bottom: 20px;
          border-bottom: 2px solid rgba(var(--color-border-rgb), 0.3);
        }

        .category-icon-wrapper {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
        }

        .category-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--color-text);
          transition: color 0.3s ease;
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .skill-item {
          position: relative;
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .skill-name-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .skill-name {
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-text);
          transition: color 0.3s ease;
        }

        .skill-level {
          font-size: 0.85rem;
          font-weight: 500;
          padding: 2px 8px;
          border-radius: 12px;
          background: rgba(var(--color-border-rgb), 0.1);
          color: var(--color-text-light);
          transition: all 0.3s ease;
        }

        .skill-meta {
          font-size: 0.9rem;
          color: var(--color-text-light);
          transition: color 0.3s ease;
        }

        .skill-bar {
          height: 8px;
          background: rgba(var(--color-border-rgb), 0.1);
          border-radius: 4px;
          overflow: hidden;
          position: relative;
          transition: background 0.3s ease;
        }

        .skill-progress {
          height: 100%;
          border-radius: 4px;
          position: relative;
          transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .other-skills-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          margin-bottom: 60px;
        }

        .subsection-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: 25px;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: color 0.3s ease;
        }

        .skills-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .skill-tag {
          background: var(--tech-tag-bg);
          color: var(--color-text-light);
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 0.95rem;
          font-weight: 500;
          border: 1px solid var(--color-border);
          transition: all 0.3s ease;
        }

        .skill-tag.hover {
          background: var(--hero-badge-gradient);
          color: white;
          border-color: var(--color-accent);
          transform: translateY(-2px);
        }

        .tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 15px;
        }

        .tool-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px;
          background: var(--tech-tag-bg);
          border-radius: 8px;
          border: 1px solid var(--color-border);
          transition: all 0.3s ease;
        }

        .tool-item.hover {
          background: var(--color-surface);
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          border-color: var(--color-border);
        }

        .tool-icon {
          font-size: 1.2rem;
          color: var(--color-text-light);
          transition: color 0.3s ease;
        }

        .tool-name {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--color-text-light);
          transition: color 0.3s ease;
        }

        .languages-section {
          background: var(--color-surface);
          border-radius: 16px;
          padding: 30px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
          border: 1px solid var(--color-border);
          transition: all 0.3s ease;
        }

        .languages-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
        }

        .language-item {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .language-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-text);
          width: 100px;
          transition: color 0.3s ease;
        }

        .language-level {
          display: flex;
          gap: 5px;
          flex: 1;
        }

        .level-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--color-border);
          transition: all 0.3s ease;
        }

        .level-dot.active {
          background: var(--hero-badge-gradient);
        }

        .language-proficiency {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-accent);
          width: 80px;
          text-align: right;
        }

        @keyframes progressAnimation {
          0% {
            width: 0%;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
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

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .tools-grid {
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          }

          .section-title {
            font-size: 2rem;
          }

          .skills-categories {
            gap: 8px;
          }

          .category-btn {
            padding: 10px 16px;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }

          .category-btn {
            padding: 8px 12px;
            font-size: 0.85rem;
          }

          .skill-category {
            padding: 20px;
          }

          .subsection-title {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;