import React, { useState } from 'react';
import { FaUser, FaArrowRight, FaSearch, FaComments } from 'react-icons/fa';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  publishedDate: string;
  category: string;
  tags: string[];
  readTime: number;
  featured: boolean;
  views: number;
  comments: number;
}

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const sampleBlogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Building Scalable React Applications with TypeScript',
      excerpt: 'Learn advanced patterns and best practices for building maintainable and scalable React applications using TypeScript.',
      author: 'Peter Muturi',
      publishedDate: '2024-02-15',
      category: 'Frontend',
      tags: ['React', 'TypeScript', 'Architecture', 'Best Practices'],
      readTime: 8,
      featured: true,
      views: 1245,
      comments: 42
    },
    {
      id: '2',
      title: 'Microservices Architecture: Patterns and Anti-patterns',
      excerpt: 'A comprehensive guide to designing robust microservices architectures while avoiding common pitfalls.',
      author: 'Peter Muturi',
      publishedDate: '2024-02-10',
      category: 'Backend',
      tags: ['Microservices', 'Architecture', 'Node.js', 'Docker'],
      readTime: 12,
      featured: true,
      views: 1890,
      comments: 56
    },
    {
      id: '3',
      title: 'Machine Learning in Production: From Model to Deployment',
      excerpt: 'Practical guide to deploying machine learning models in production environments with monitoring and scaling.',
      author: 'Peter Muturi',
      publishedDate: '2024-02-05',
      category: 'AI/ML',
      tags: ['Machine Learning', 'MLOps', 'Python', 'Deployment'],
      readTime: 10,
      featured: false,
      views: 980,
      comments: 31
    },
    {
      id: '4',
      title: 'Database Optimization Techniques for High-Traffic Applications',
      excerpt: 'Advanced database optimization strategies to handle millions of requests while maintaining performance.',
      author: 'Peter Muturi',
      publishedDate: '2024-01-28',
      category: 'Database',
      tags: ['Database', 'Performance', 'SQL', 'NoSQL'],
      readTime: 9,
      featured: false,
      views: 1120,
      comments: 38
    },
    {
      id: '5',
      title: 'Modern CSS Grid & Flexbox: Advanced Layout Techniques',
      excerpt: 'Master complex layout challenges using CSS Grid and Flexbox with real-world examples and patterns.',
      author: 'Peter Muturi',
      publishedDate: '2024-01-20',
      category: 'Frontend',
      tags: ['CSS', 'Grid', 'Flexbox', 'Layout'],
      readTime: 7,
      featured: true,
      views: 1560,
      comments: 47
    },
    {
      id: '6',
      title: 'Container Orchestration with Kubernetes: A Practical Guide',
      excerpt: 'Step-by-step guide to container orchestration, scaling, and management using Kubernetes in production.',
      author: 'Peter Muturi',
      publishedDate: '2024-01-15',
      category: 'DevOps',
      tags: ['Kubernetes', 'Docker', 'DevOps', 'Containers'],
      readTime: 11,
      featured: false,
      views: 1340,
      comments: 39
    },
    {
      id: '7',
      title: 'Real-time Applications with WebSockets and Socket.io',
      excerpt: 'Building scalable real-time applications using WebSockets and Socket.io with Node.js and React.',
      author: 'Peter Muturi',
      publishedDate: '2024-01-10',
      category: 'Full Stack',
      tags: ['WebSockets', 'Real-time', 'Node.js', 'Socket.io'],
      readTime: 6,
      featured: false,
      views: 890,
      comments: 28
    },
    {
      id: '8',
      title: 'Progressive Web Apps: From Concept to Implementation',
      excerpt: 'Complete guide to building Progressive Web Apps with offline capabilities and native app features.',
      author: 'Peter Muturi',
      publishedDate: '2024-01-05',
      category: 'Frontend',
      tags: ['PWA', 'Service Workers', 'Web App Manifest', 'Offline'],
      readTime: 8,
      featured: false,
      views: 1020,
      comments: 33
    }
  ];

  const categories = ['All', 'Frontend', 'Backend', 'AI/ML', 'Database', 'DevOps', 'Full Stack'];
  
  const filteredPosts = sampleBlogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerStyles = {
    padding: '5rem 0',
    backgroundColor: 'var(--color-background)',
  };

  const headerStyles = {
    textAlign: 'center' as const,
    marginBottom: '4rem',
  };

  const titleStyles = {
    fontSize: '2.5rem',
    color: 'var(--color-primary)',
    marginBottom: '1rem',
    fontWeight: '700',
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
    lineHeight: '1.6',
  };

  const readButtonStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.5rem',
    backgroundColor: 'var(--color-accent)',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '0.9rem',
  };

  const controlsContainerStyles = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '2rem',
    marginBottom: '3rem',
  };

  const searchContainerStyles = {
    position: 'relative' as const,
    maxWidth: '500px',
    margin: '0 auto',
    width: '100%',
  };

  const searchInputStyles = {
    width: '100%',
    padding: '1rem 1rem 1rem 3rem',
    border: '2px solid var(--color-border)',
    borderRadius: '50px',
    backgroundColor: 'var(--color-surface)',
    color: 'var(--color-text)',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
  };

  const searchIconStyles = {
    position: 'absolute' as const,
    left: '1.25rem',
    top: '50%',
    transform: 'translateY(-50%)',
    color: 'var(--color-text-light)',
  };

  const categoryContainerStyles = {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '0.75rem',
    justifyContent: 'center',
  };

  const categoryButtonStyles = (isActive: boolean) => ({
    padding: '0.75rem 1.5rem',
    backgroundColor: isActive ? 'var(--color-accent)' : 'var(--color-surface)',
    border: `2px solid ${isActive ? 'var(--color-accent)' : 'var(--color-border)'}`,
    borderRadius: '50px',
    color: isActive ? 'white' : 'var(--color-text)',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '0.9rem',
  });

  const blogGridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem',
  };

  const blogCardStyles = {
    backgroundColor: 'var(--color-surface)',
    borderRadius: '16px',
    overflow: 'hidden' as const,
    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    border: '1px solid var(--color-border)',
    height: '100%',
    display: 'flex' as const,
    flexDirection: 'column' as const,
  };

  const cardHeaderStyles = {
    padding: '1.5rem 1.5rem 0.5rem',
  };

  const categoryLabelStyles = {
    display: 'inline-block',
    padding: '4px 12px',
    backgroundColor: 'var(--color-background)',
    color: 'var(--color-accent)',
    borderRadius: '20px',
    fontSize: '0.75rem',
    fontWeight: '600',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
    marginBottom: '1rem',
  };

  const cardContentStyles = {
    padding: '0 1.5rem',
    flex: 1,
  };

  const cardTitleStyles = {
    fontSize: '1.25rem',
    color: 'var(--color-primary)',
    marginBottom: '0.75rem',
    fontWeight: '700',
    lineHeight: '1.4',
  };

  const cardExcerptStyles = {
    color: 'var(--color-text-light)',
    fontSize: '0.9rem',
    lineHeight: '1.6',
    marginBottom: '1rem',
  };

  const metaItemStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.85rem',
    color: 'var(--color-text-light)',
  };

  const cardFooterStyles = {
    padding: '1.5rem',
    borderTop: '1px solid var(--color-border)',
  };

  const paginationContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '3rem',
  };

  const paginationButtonStyles = (isActive: boolean, isDisabled: boolean = false) => ({
    padding: '0.75rem 1.25rem',
    backgroundColor: isActive ? 'var(--color-accent)' : 'var(--color-surface)',
    border: `1px solid ${isActive ? 'var(--color-accent)' : 'var(--color-border)'}`,
    borderRadius: '8px',
    color: isActive ? 'white' : isDisabled ? 'var(--color-border)' : 'var(--color-text)',
    fontWeight: '600',
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '0.9rem',
    opacity: isDisabled ? 0.5 : 1,
  });

  const ctaContainerStyles = {
    textAlign: 'center' as const,
    padding: '3rem',
    backgroundColor: 'var(--color-surface)',
    borderRadius: '16px',
    border: '2px solid var(--color-border)',
  };

  const ctaTitleStyles = {
    fontSize: '2rem',
    color: 'var(--color-primary)',
    marginBottom: '1rem',
    fontWeight: '700',
  };

  const ctaTextStyles = {
    color: 'var(--color-text-light)',
    fontSize: '1.1rem',
    maxWidth: '600px',
    margin: '0 auto 2rem',
    lineHeight: '1.6',
  };

  const ctaButtonStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '1rem 2rem',
    backgroundColor: 'var(--color-accent)',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '50px',
    fontWeight: '600',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    border: '2px solid var(--color-accent)',
  };

  return (
    <section id="blog" style={containerStyles}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={headerStyles}>
          <h2 style={titleStyles}>Tech Insights & Tutorials</h2>
          <div style={dividerStyles}></div>
          <p style={subtitleStyles}>
            Sharing knowledge, experiences, and insights from my journey in software development, 
            architecture, and emerging technologies.
          </p>
        </div>

        <div style={controlsContainerStyles}>
          <div style={searchContainerStyles}>
            <FaSearch style={searchIconStyles} />
            <input
              type="text"
              placeholder="Search articles, topics, or technologies..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              style={searchInputStyles}
            />
          </div>

          <div style={categoryContainerStyles}>
            {categories.map(category => (
              <button
                key={category}
                style={categoryButtonStyles(selectedCategory === category)}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
              >
                {category}
                <span style={{
                  marginLeft: '8px',
                  backgroundColor: selectedCategory === category ? 'rgba(255,255,255,0.2)' : 'var(--color-background)',
                  padding: '2px 8px',
                  borderRadius: '12px',
                  fontSize: '0.8rem',
                }}>
                  {sampleBlogPosts.filter(p => category === 'All' || p.category === category).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div style={blogGridStyles}>
          {currentPosts.length > 0 ? (
            currentPosts.map(post => (
              <article key={post.id} style={blogCardStyles}>
                <div style={cardHeaderStyles}>
                  <span style={categoryLabelStyles}>{post.category}</span>
                </div>
                
                <div style={cardContentStyles}>
                  <h4 style={cardTitleStyles}>{post.title}</h4>
                  <p style={cardExcerptStyles}>{post.excerpt}</p>
                </div>
                
                <div style={cardFooterStyles}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={metaItemStyles}>
                      <FaUser size={12} />
                      {post.author}
                    </div>
                    <button style={{
                      ...readButtonStyles,
                      padding: '0.5rem 1rem',
                      fontSize: '0.85rem',
                    }}>
                      Read <FaArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div style={{
              gridColumn: '1 / -1',
              textAlign: 'center',
              padding: '3rem',
            }}>
              <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
                No articles found
              </h3>
              <p style={{ color: 'var(--color-text-light)' }}>
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>

        {totalPages > 1 && (
          <div style={paginationContainerStyles}>
            <button
              style={paginationButtonStyles(false, currentPage === 1)}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            
            {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }
              
              return (
                <button
                  key={pageNum}
                  style={paginationButtonStyles(currentPage === pageNum)}
                  onClick={() => setCurrentPage(pageNum)}
                >
                  {pageNum}
                </button>
              );
            })}
            
            <button
              style={paginationButtonStyles(false, currentPage === totalPages)}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}

        <div style={ctaContainerStyles}>
          <h3 style={ctaTitleStyles}>Want to Collaborate or Discuss Tech?</h3>
          <p style={ctaTextStyles}>
            I'm always open to interesting discussions, collaboration opportunities, 
            or sharing knowledge about software development, architecture, and emerging technologies.
          </p>
          <a href="#contact" style={ctaButtonStyles}>
            <FaComments />
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;