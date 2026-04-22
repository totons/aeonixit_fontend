import React, { useState, useEffect } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend-only submit
    setSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className={styles.contact}>
      <section className={styles.pageHeader}>
        <div className={styles.container}>
          <h1 className="reveal">Get in touch</h1>
          <p className="reveal">Let's talk about your project.</p>
        </div>
      </section>

      <section className={styles.contactContent}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            {/* Left Column - Contact Info */}
            <div className={styles.contactInfo}>
              <div className={`${styles.infoBlock} reveal`}>
                <h3>Email</h3>
                <a href="mailto:ceo@aeonixit.com" className={styles.email}>
                  ceo@aeonixit.com
                </a>
              </div>

              <div className={`${styles.infoBlock} reveal`}>
                <h3>Address</h3>
                <p>Kazi Para, Second Road<br />Jashore, Bangladesh</p>
              </div>

              <div className={`${styles.infoBlock} reveal`}>
                <h3>Location</h3>
                <p>Based in Bangladesh. Working with clients globally.</p>
              </div>

              <div className={`${styles.infoBlock} reveal`}>
                <h3>Response Time</h3>
                <p>We're selective about projects. We'll get back to you within 2 business days with an initial assessment.</p>
              </div>

              <div className={`${styles.infoBlock} reveal`}>
                <h3>What We're Looking For</h3>
                <p>Projects where we can add real value. Technical founders and leaders who understand that good software is an investment, not a commodity.</p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className={styles.formContainer}>
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={`${styles.formGroup} reveal`}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={`${styles.formGroup} reveal`}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={`${styles.formGroup} reveal`}>
                  <label htmlFor="company">Company (Optional)</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div className={`${styles.formGroup} reveal`}>
                  <label htmlFor="message">Tell us about your project</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className={`${styles.formGroup} reveal`}>
                  <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={submitted}
                  >
                    {submitted ? 'Sent ✓' : 'Send message'}
                  </button>
                </div>

                {submitted && (
                  <p className={styles.successMessage}>
                    Thanks for reaching out. We'll be in touch soon.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
