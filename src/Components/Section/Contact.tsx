import React, { useState, useRef, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaLinkedin, FaGithub, FaExclamationTriangle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formErrors, setFormErrors] = useState({
    from_name: '',
    reply_to: '',
    message: '',
  });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Responsive breakpoints
  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const contactInfo = {
    email: 'muigaipeter61@gmail.com',
    phone: '+254703551225',
    phone2: '+254720017232',
    location: 'Embu, Kenya, 60100',
    workingHours: 'Mon - Fri: 9:00 AM - 6:00 PM',
    responseTime: 'Usually within 24 hours',
  };

  const socialLinks = [
    { icon: <FaLinkedin />, label: 'LinkedIn', url: 'https://www.linkedin.com/in/peter-muturi-303089306' },
    { icon: <FaGithub />, label: 'GitHub', url: 'https://github.com/honPj' },
  ];

  // Email validation function
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Form validation function
  const validateForm = (): boolean => {
    const errors = {
      from_name: '',
      reply_to: '',
      message: '',
    };
    let isValid = true;

    // Validate name
    if (!formData.from_name.trim()) {
      errors.from_name = 'Full name is required';
      isValid = false;
    }

    // Validate email
    if (!formData.reply_to.trim()) {
      errors.reply_to = 'Email address is required';
      isValid = false;
    } else if (!validateEmail(formData.reply_to)) {
      errors.reply_to = 'Please enter a valid email address';
      isValid = false;
    }

    // Validate message
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    
    // Validate form before submission
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      if (form.current) {
        const result = await emailjs.sendForm(
          'service_y3a62rg',
          'template_wezqqoh',
          form.current,
          'ExzmFqrSqTxWvr1LN'
        );
        
        console.log('Email sent successfully!', result.text);
        
        // Reset form and show success message
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ 
          from_name: '', 
          reply_to: '', 
          subject: '', 
          message: '' 
        });
        
        // Reset form errors
        setFormErrors({
          from_name: '',
          reply_to: '',
          message: '',
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
      setSubmitError('Failed to send message. Please try again later.');
      
      // Clear error after 5 seconds
      setTimeout(() => setSubmitError(''), 5000);
    }
  };

  // Error message styles
  const errorTextStyles = {
    color: '#ef4444',
    fontSize: isMobile ? '0.8rem' : '0.85rem',
    marginTop: '0.25rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
  };

  // Responsive container styles
  const containerStyles = {
    padding: isMobile ? '3rem 0' : isTablet ? '4rem 0' : '5rem 0',
    backgroundColor: 'var(--color-surface)',
    position: 'relative' as const,
  };

  const headerStyles = {
    textAlign: 'center' as const,
    marginBottom: isMobile ? '2.5rem' : isTablet ? '3rem' : '4rem',
    padding: isMobile ? '0 1rem' : '0',
  };

  const titleStyles = {
    fontSize: isMobile ? '2rem' : isTablet ? '2.25rem' : '2.5rem',
    color: 'var(--color-primary)',
    marginBottom: '1rem',
    fontWeight: '700' as const,
    lineHeight: 1.2,
  };

  const dividerStyles = {
    width: isMobile ? '50px' : '60px',
    height: '4px',
    background: 'linear-gradient(90deg, var(--color-accent), transparent)',
    margin: '0 auto 1rem',
    borderRadius: '4px',
  };

  const subtitleStyles = {
    color: 'var(--color-text-light)',
    fontSize: isMobile ? '1rem' : '1.1rem',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: 1.6,
    padding: isMobile ? '0 1rem' : '0',
  };

  // Responsive grid layout
  const contentStyles = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
    gap: isMobile ? '2rem' : isTablet ? '3rem' : '4rem',
    alignItems: 'start' as const,
    marginBottom: isMobile ? '2.5rem' : '3rem',
  };

  const infoCardStyles = {
    backgroundColor: 'var(--color-background)',
    borderRadius: isMobile ? '16px' : '20px',
    padding: isMobile ? '1.5rem' : isTablet ? '2rem' : '3rem',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    border: '1px solid var(--color-border)',
    order: isMobile ? 2 : 1,
  };

  const infoTitleStyles = {
    fontSize: isMobile ? '1.25rem' : isTablet ? '1.35rem' : '1.5rem',
    color: 'var(--color-primary)',
    marginBottom: isMobile ? '1.5rem' : '2rem',
    fontWeight: '700' as const,
  };

  const infoItemStyles = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: isMobile ? '1rem' : '1.5rem',
    marginBottom: isMobile ? '1.5rem' : '2rem',
    paddingBottom: isMobile ? '1.5rem' : '2rem',
    borderBottom: '1px solid var(--color-border)',
  };

  const infoIconStyles = {
    width: isMobile ? '44px' : '50px',
    height: isMobile ? '44px' : '50px',
    backgroundColor: 'var(--color-accent)',
    borderRadius: isMobile ? '10px' : '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: isMobile ? '1.1rem' : '1.25rem',
    flexShrink: 0,
  };

  const infoContentStyles = {
    flex: 1,
  };

  const infoLabelStyles = {
    fontSize: isMobile ? '0.9rem' : '1rem',
    color: 'var(--color-text-light)',
    marginBottom: isMobile ? '0.25rem' : '0.5rem',
    fontWeight: '500' as const,
  };

  const infoValueStyles = {
    fontSize: isMobile ? '1rem' : '1.1rem',
    color: 'var(--color-primary)',
    fontWeight: '600' as const,
    wordBreak: 'break-word' as const,
  };

  const socialContainerStyles = {
    marginTop: isMobile ? '1.5rem' : '2rem',
  };

  const socialTitleStyles = {
    fontSize: isMobile ? '1rem' : '1.1rem',
    color: 'var(--color-primary)',
    marginBottom: isMobile ? '0.75rem' : '1rem',
    fontWeight: '600' as const,
  };

  const socialGridStyles = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
    gap: isMobile ? '0.75rem' : '1rem',
  };

  const socialLinkStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: isMobile ? '0.5rem' : '0.75rem',
    padding: isMobile ? '0.75rem' : '0.75rem 1rem',
    backgroundColor: 'var(--color-surface)',
    borderRadius: isMobile ? '10px' : '12px',
    textDecoration: 'none',
    color: 'var(--color-text)',
    transition: 'all 0.3s ease',
    border: '1px solid var(--color-border)',
    minHeight: isMobile ? '44px' : 'auto',
    fontSize: isMobile ? '0.9rem' : '1rem',
  };

  const formCardStyles = {
    backgroundColor: 'var(--color-background)',
    borderRadius: isMobile ? '16px' : '20px',
    padding: isMobile ? '1.5rem' : isTablet ? '2rem' : '3rem',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    border: '1px solid var(--color-border)',
    order: isMobile ? 1 : 2,
  };

  const formTitleStyles = {
    fontSize: isMobile ? '1.25rem' : isTablet ? '1.35rem' : '1.5rem',
    color: 'var(--color-primary)',
    marginBottom: isMobile ? '1.5rem' : '2rem',
    fontWeight: '700' as const,
  };

  const formGroupStyles = {
    marginBottom: isMobile ? '1rem' : '1.25rem',
  };

  const labelStyles = {
    display: 'block',
    marginBottom: isMobile ? '0.375rem' : '0.5rem',
    color: 'var(--color-text)',
    fontWeight: '600' as const,
    fontSize: isMobile ? '0.85rem' : '0.9rem',
  };

  // Add error border to input styles when there's an error
  const getInputStyles = (hasError: boolean) => ({
    width: '100%',
    padding: isMobile ? '0.875rem' : '1rem',
    backgroundColor: 'var(--color-surface)',
    border: hasError ? '2px solid #ef4444' : '2px solid var(--color-border)',
    borderRadius: isMobile ? '10px' : '12px',
    color: 'var(--color-text)',
    fontSize: isMobile ? '0.95rem' : '1rem',
    transition: 'all 0.3s ease',
  });

  const getTextareaStyles = (hasError: boolean) => ({
    ...getInputStyles(hasError),
    minHeight: isMobile ? '120px' : '150px',
    resize: 'vertical' as const,
    fontFamily: 'inherit',
  });

  const submitButtonStyles = {
    width: '100%',
    padding: isMobile ? '0.875rem' : '1rem',
    backgroundColor: 'var(--color-accent)',
    color: 'white',
    border: 'none',
    borderRadius: isMobile ? '10px' : '12px',
    fontSize: isMobile ? '0.95rem' : '1rem',
    fontWeight: '600' as const,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: isMobile ? '0.5rem' : '0.75rem',
    minHeight: isMobile ? '44px' : 'auto',
    marginTop: isMobile ? '0.5rem' : '0.75rem',
  };

  const successMessageStyles = {
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    border: '1px solid rgba(16, 185, 129, 0.2)',
    color: '#10b981',
    padding: isMobile ? '0.875rem' : '1rem',
    borderRadius: isMobile ? '10px' : '12px',
    marginTop: isMobile ? '0.875rem' : '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: isMobile ? '0.5rem' : '0.75rem',
    fontSize: isMobile ? '0.85rem' : '0.9rem',
    fontWeight: '600' as const,
  };

  const errorMessageStyles = {
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    border: '1px solid rgba(239, 68, 68, 0.2)',
    color: '#ef4444',
    padding: isMobile ? '0.875rem' : '1rem',
    borderRadius: isMobile ? '10px' : '12px',
    marginTop: isMobile ? '0.875rem' : '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: isMobile ? '0.5rem' : '0.75rem',
    fontSize: isMobile ? '0.85rem' : '0.9rem',
    fontWeight: '600' as const,
  };

  const statsContainerStyles = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
    gap: isMobile ? '1rem' : isTablet ? '1.5rem' : '2rem',
    marginTop: isMobile ? '2rem' : isTablet ? '3rem' : '4rem',
  };

  const statCardStyles = {
    textAlign: 'center' as const,
    padding: isMobile ? '1.5rem' : '2rem',
    backgroundColor: 'var(--color-background)',
    borderRadius: isMobile ? '14px' : '16px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
    border: '1px solid var(--color-border)',
  };

  const statIconStyles = {
    fontSize: isMobile ? '2rem' : isTablet ? '2.25rem' : '2.5rem',
    color: 'var(--color-accent)',
    marginBottom: isMobile ? '0.75rem' : '1rem',
  };

  const statTitleStyles = {
    fontSize: isMobile ? '0.85rem' : '1rem',
    color: 'var(--color-text-light)',
    marginBottom: isMobile ? '0.25rem' : '0.5rem',
    fontWeight: '500' as const,
  };

  const statValueStyles = {
    fontSize: isMobile ? '1.25rem' : isTablet ? '1.35rem' : '1.5rem',
    color: 'var(--color-primary)',
    fontWeight: '700' as const,
  };

  // Check if form can be submitted (for button disabling)
  const isFormValid = () => {
    return formData.from_name.trim() && 
           validateEmail(formData.reply_to) && 
           formData.message.trim();
  };

  return (
    <section id="contact" style={containerStyles}>
      <div className="container" style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: isMobile ? '0 1rem' : isTablet ? '0 1.25rem' : '0 1.5rem' 
      }}>
        <div style={headerStyles}>
          <h2 style={titleStyles}>Get In Touch</h2>
          <div style={dividerStyles}></div>
          <p style={subtitleStyles}>
            Have a project in mind or want to discuss potential collaboration opportunities? 
            I'm always open to interesting conversations about technology and innovation.
          </p>
        </div>

        <div style={contentStyles}>
          <div style={infoCardStyles}>
            <h3 style={infoTitleStyles}>Contact Information</h3>
            
            <div style={infoItemStyles}>
              <div style={infoIconStyles}>
                <FaEnvelope />
              </div>
              <div style={infoContentStyles}>
                <div style={infoLabelStyles}>Email Address</div>
                <a href={`mailto:${contactInfo.email}`} style={{ ...infoValueStyles, textDecoration: 'none' }}>
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <div style={infoItemStyles}>
              <div style={infoIconStyles}>
                <FaPhone />
              </div>
              <div style={infoContentStyles}>
                <div style={infoLabelStyles}>Phone Numbers</div>
                <div style={infoValueStyles}>
                  <div>
                    <a href={`tel:${contactInfo.phone}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      {contactInfo.phone}
                    </a>
                  </div>
                  <div style={{ 
                    fontSize: isMobile ? '0.9rem' : '1rem', 
                    color: 'var(--color-text-light)', 
                    marginTop: isMobile ? '0.125rem' : '0.25rem' 
                  }}>
                    <a href={`tel:${contactInfo.phone2}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      {contactInfo.phone2}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ ...infoItemStyles, borderBottom: 'none', paddingBottom: '0' }}>
              <div style={infoIconStyles}>
                <FaMapMarkerAlt />
              </div>
              <div style={infoContentStyles}>
                <div style={infoLabelStyles}>Location</div>
                <div style={infoValueStyles}>{contactInfo.location}</div>
                <div style={{ 
                  fontSize: isMobile ? '0.85rem' : '0.9rem', 
                  color: 'var(--color-text-light)', 
                  marginTop: isMobile ? '0.375rem' : '0.5rem' 
                }}>
                  <div>{contactInfo.workingHours}</div>
                  <div>{contactInfo.responseTime}</div>
                </div>
              </div>
            </div>

            <div style={socialContainerStyles}>
              <h4 style={socialTitleStyles}>Connect With Me</h4>
              <div style={socialGridStyles}>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    style={socialLinkStyles}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div style={formCardStyles}>
            <h3 style={formTitleStyles}>Send a Message</h3>
            <form ref={form} onSubmit={handleSubmit}>
              <div style={formGroupStyles}>
                <label style={labelStyles}>Full Name *</label>
                <input
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  style={getInputStyles(!!formErrors.from_name)}
                />
                {formErrors.from_name && (
                  <div style={errorTextStyles}>
                    <FaExclamationTriangle style={{ fontSize: '0.8rem' }} />
                    {formErrors.from_name}
                  </div>
                )}
              </div>

              <div style={formGroupStyles}>
                <label style={labelStyles}>Email Address *</label>
                <input
                  type="email"
                  name="reply_to"
                  value={formData.reply_to}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                  style={getInputStyles(!!formErrors.reply_to)}
                />
                {formErrors.reply_to && (
                  <div style={errorTextStyles}>
                    <FaExclamationTriangle style={{ fontSize: '0.8rem' }} />
                    {formErrors.reply_to}
                  </div>
                )}
              </div>

              <div style={formGroupStyles}>
                <label style={labelStyles}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?"
                  style={getInputStyles(false)}
                />
              </div>

              <div style={formGroupStyles}>
                <label style={labelStyles}>Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project or inquiry..."
                  style={getTextareaStyles(!!formErrors.message)}
                />
                {formErrors.message && (
                  <div style={errorTextStyles}>
                    <FaExclamationTriangle style={{ fontSize: '0.8rem' }} />
                    {formErrors.message}
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !isFormValid()}
                style={{
                  ...submitButtonStyles,
                  opacity: !isFormValid() ? 0.7 : 1,
                  cursor: !isFormValid() ? 'not-allowed' : 'pointer',
                }}
                title={!isFormValid() ? 'Please fill in all required fields' : 'Send message'}
              >
                {isSubmitting ? (
                  <>
                    <div style={{
                      width: isMobile ? '14px' : '16px',
                      height: isMobile ? '14px' : '16px',
                      border: '2px solid rgba(255,255,255,0.3)',
                      borderTopColor: 'white',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite',
                    }}></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>

              {isSubmitted && (
                <div style={successMessageStyles}>
                  <FaCheckCircle />
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {submitError && (
                <div style={errorMessageStyles}>
                  <FaExclamationTriangle />
                  {submitError}
                </div>
              )}
            </form>
          </div>
        </div>

        <div style={statsContainerStyles}>
          <div style={statCardStyles}>
            <div style={statIconStyles}>
              <FaPaperPlane />
            </div>
            <div style={statTitleStyles}>Response Time</div>
            <div style={statValueStyles}>24 Hours</div>
          </div>

          <div style={statCardStyles}>
            <div style={statIconStyles}>
              <FaCheckCircle />
            </div>
            <div style={statTitleStyles}>Project Success Rate</div>
            <div style={statValueStyles}>100%</div>
          </div>

          <div style={statCardStyles}>
            <div style={statIconStyles}>
              <FaEnvelope />
            </div>
            <div style={statTitleStyles}>Messages Received</div>
            <div style={statValueStyles}>20+</div>
          </div>

          <div style={statCardStyles}>
            <div style={statIconStyles}>
              <FaMapMarkerAlt />
            </div>
            <div style={statTitleStyles}>Remote Collaboration</div>
            <div style={statValueStyles}>Available</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        a:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          border-color: var(--color-accent);
          color: var(--color-accent);
        }
        
        button:hover:not(:disabled) {
          background-color: var(--color-primary);
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }
        
        button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }
        
        input:focus, textarea:focus {
          outline: none;
          border-color: var(--color-accent);
          box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.1);
        }
        
        @media (hover: none) and (pointer: coarse) {
          a, button {
            min-height: 44px;
          }
          
          input, textarea {
            font-size: 16px;
          }
        }
        
        @media (prefers-contrast: high) {
          .info-card, .form-card, .stat-card {
            border: 2px solid var(--color-text);
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
          
          button:disabled {
            transition: none;
          }
        }
        
        @media (max-width: 480px) {
          .contact-header h2 {
            font-size: 1.75rem !important;
          }
          
          .contact-subtitle {
            font-size: 0.95rem !important;
          }
          
          .info-icon, .social-link, button {
            min-height: 44px;
          }
        }
        
        @media (max-height: 600px) and (orientation: landscape) {
          .contact-container {
            padding-top: 2rem !important;
            padding-bottom: 2rem !important;
          }
          
          .contact-content {
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;