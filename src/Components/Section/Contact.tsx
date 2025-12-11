import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaLinkedin, FaGithub} from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = {
    email: 'muigaipeter61@gmail.com',
    phone: '+254703551225',
    phone2: '+254720017232',
    location: 'Embu, Kenya, 60100',
    workingHours: 'Mon - Fri: 9:00 AM - 6:00 PM',
    responseTime: 'Usually within 24 hours',
  };

  const socialLinks = [
    { icon: <FaLinkedin />, label: 'LinkedIn', url: 'www.linkedin.com/in/peter-muturi-303089306' },
    { icon: <FaGithub />, label: 'GitHub', url: 'https://github.com/honPj' },
    // { icon: <FaTwitter />, label: 'Twitter', url: '#' },
    // { icon: <FaInstagram />, label: 'Instagram', url: '#' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const containerStyles = {
    padding: '5rem 0',
    backgroundColor: 'var(--color-surface)',
    position: 'relative' as const,
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

  const contentStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'start',
  };

  const infoCardStyles = {
    backgroundColor: 'var(--color-background)',
    borderRadius: '20px',
    padding: '3rem',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    border: '1px solid var(--color-border)',
  };

  const infoTitleStyles = {
    fontSize: '1.5rem',
    color: 'var(--color-primary)',
    marginBottom: '2rem',
    fontWeight: '700',
  };

  const infoItemStyles = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1.5rem',
    marginBottom: '2rem',
    paddingBottom: '2rem',
    borderBottom: '1px solid var(--color-border)',
  };

  const infoIconStyles = {
    width: '50px',
    height: '50px',
    backgroundColor: 'var(--color-accent)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '1.25rem',
    flexShrink: 0,
  };

  const infoContentStyles = {
    flex: 1,
  };

  const infoLabelStyles = {
    fontSize: '1rem',
    color: 'var(--color-text-light)',
    marginBottom: '0.5rem',
    fontWeight: '500',
  };

  const infoValueStyles = {
    fontSize: '1.1rem',
    color: 'var(--color-primary)',
    fontWeight: '600',
  };

  const socialContainerStyles = {
    marginTop: '2rem',
  };

  const socialTitleStyles = {
    fontSize: '1.1rem',
    color: 'var(--color-primary)',
    marginBottom: '1rem',
    fontWeight: '600',
  };

  const socialGridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1rem',
  };

  const socialLinkStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '0.75rem 1rem',
    backgroundColor: 'var(--color-surface)',
    borderRadius: '12px',
    textDecoration: 'none',
    color: 'var(--color-text)',
    transition: 'all 0.3s ease',
    border: '1px solid var(--color-border)',
    ':hover': {
      transform: 'translateY(-3px)',
      boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
      borderColor: 'var(--color-accent)',
      color: 'var(--color-accent)',
    },
  };

  const formCardStyles = {
    backgroundColor: 'var(--color-background)',
    borderRadius: '20px',
    padding: '3rem',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    border: '1px solid var(--color-border)',
  };

  const formTitleStyles = {
    fontSize: '1.5rem',
    color: 'var(--color-primary)',
    marginBottom: '2rem',
    fontWeight: '700',
  };

  const formGroupStyles = {
    marginBottom: '1.5rem',
  };

  const labelStyles = {
    display: 'block',
    marginBottom: '0.5rem',
    color: 'var(--color-text)',
    fontWeight: '600',
    fontSize: '0.9rem',
  };

  const inputStyles = {
    width: '100%',
    padding: '1rem',
    backgroundColor: 'var(--color-surface)',
    border: '2px solid var(--color-border)',
    borderRadius: '12px',
    color: 'var(--color-text)',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    ':focus': {
      outline: 'none',
      borderColor: 'var(--color-accent)',
      boxShadow: '0 0 0 3px rgba(49, 130, 206, 0.1)',
    },
  };

  const textareaStyles = {
    ...inputStyles,
    minHeight: '150px',
    resize: 'vertical' as const,
    fontFamily: 'inherit',
  };

  const submitButtonStyles = {
    width: '100%',
    padding: '1rem',
    backgroundColor: 'var(--color-accent)',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.75rem',
    ':hover': {
      backgroundColor: 'var(--color-primary)',
      transform: 'translateY(-3px)',
      boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
    },
    ':disabled': {
      opacity: 0.7,
      cursor: 'not-allowed',
      transform: 'none',
    },
  };

  const successMessageStyles = {
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    border: '1px solid rgba(16, 185, 129, 0.2)',
    color: '#10b981',
    padding: '1rem',
    borderRadius: '12px',
    marginTop: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    fontSize: '0.9rem',
    fontWeight: '600',
  };

  const statsContainerStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
    marginTop: '4rem',
  };

  const statCardStyles = {
    textAlign: 'center' as const,
    padding: '2rem',
    backgroundColor: 'var(--color-background)',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
    border: '1px solid var(--color-border)',
  };

  const statIconStyles = {
    fontSize: '2.5rem',
    color: 'var(--color-accent)',
    marginBottom: '1rem',
  };

  const statTitleStyles = {
    fontSize: '1rem',
    color: 'var(--color-text-light)',
    marginBottom: '0.5rem',
    fontWeight: '500',
  };

  const statValueStyles = {
    fontSize: '1.5rem',
    color: 'var(--color-primary)',
    fontWeight: '700',
  };

  return (
    <section id="contact" style={containerStyles}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
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
                  <div style={{ fontSize: '1rem', color: 'var(--color-text-light)', marginTop: '0.25rem' }}>
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
                  fontSize: '0.9rem', 
                  color: 'var(--color-text-light)', 
                  marginTop: '0.5rem' 
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
            <form onSubmit={handleSubmit}>
              <div style={formGroupStyles}>
                <label style={labelStyles}>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  style={inputStyles}
                />
              </div>

              <div style={formGroupStyles}>
                <label style={labelStyles}>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                  style={inputStyles}
                />
              </div>

              <div style={formGroupStyles}>
                <label style={labelStyles}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?"
                  style={inputStyles}
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
                  style={textareaStyles}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={submitButtonStyles}
              >
                {isSubmitting ? (
                  <>
                    <div style={{
                      width: '16px',
                      height: '16px',
                      border: '2px solid rgba(255,255,255,0.3)',
                      borderTopColor: 'white',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite',
                    }}></div>
                    Sending...
                  </>
                ) : (
                  <>
                    
                    Send Message
                  </>
                )}
              </button>

              {isSubmitted && (
                <div style={successMessageStyles}>
                  <FaCheckCircle />
                  Thank you! Your message has been sent successfully. I'll get back to you soon.
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
      `}</style>
    </section>
  );
};

export default Contact;