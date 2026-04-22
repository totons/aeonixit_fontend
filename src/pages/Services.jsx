import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Services.module.css';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: 'Product Engineering',
      description: 'End-to-end product development from concept to launch. We handle architecture, frontend, backend, and deployment. Full responsibility, full ownership.',
      includes: [
        'Architecture & technical planning',
        'Frontend & backend development',
        'Database design & optimization',
        'API design & integration',
        'Testing & quality assurance',
        'Deployment & DevOps setup',
        'Documentation & handover',
      ],
    },
    {
      title: 'SaaS Development',
      description: 'Building multi-tenant, cloud-native applications. Scalable infrastructure, secure authentication, and billing integration included.',
      includes: [
        'Multi-tenant architecture',
        'User management & auth',
        'Payment processing integration',
        'Analytics & reporting',
        'Security hardening',
        'Performance optimization',
        'Support portal setup',
      ],
    },
    {
      title: 'Business Software & Automation',
      description: 'Custom tools built specifically for your workflow. Automate repetitive tasks, integrate legacy systems, and eliminate manual work.',
      includes: [
        'Process analysis & optimization',
        'Custom tool development',
        'Legacy system integration',
        'Data migration & cleanup',
        'Workflow automation',
        'Team training',
        'Ongoing maintenance',
      ],
    },
    {
      title: 'Technology Consulting & Strategy',
      description: 'Strategic guidance on technology decisions. Assess your current stack, plan migrations, and advise on architecture decisions.',
      includes: [
        'Technology stack review',
        'Architecture recommendations',
        'Migration planning',
        'Performance analysis',
        'Security audit',
        'Team training & knowledge transfer',
        'Roadmap planning',
      ],
    },
    {
      title: 'Maintenance & Support Retainers',
      description: 'Ongoing support for your existing software. Bug fixes, updates, performance optimization, and feature development.',
      includes: [
        'Monthly retainer options',
        'Priority bug fixes',
        'Security updates',
        'Performance monitoring',
        'Feature requests',
        'Quarterly reviews',
        'Flexible scoping',
      ],
    },
  ];

  return (
    <div className={styles.services}>
      <section className={styles.pageHeader}>
        <div className={styles.container}>
          <h1 className="reveal">Services</h1>
          <p className="reveal">
            We offer flexible, focused services tailored to where you are in your product journey. From full development to strategic consulting, we scale our involvement to match your needs.
          </p>
        </div>
      </section>

      <section className={styles.servicesList}>
        <div className={styles.container}>
          {services.map((service, index) => (
            <div key={index} className={`${styles.serviceCard} reveal`}>
              <div className={styles.serviceHeader}>
                <h2>{service.title}</h2>
              </div>

              <p className={styles.serviceDescription}>{service.description}</p>

              <div className={styles.serviceIncludes}>
                <h3>What's Included</h3>
                <ul>
                  {service.includes.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {index < services.length - 1 && <div className={styles.divider}></div>}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.ctaBanner}>
        <div className={styles.container}>
          <h2 className="reveal">Which service is right for you?</h2>
          <p className="reveal">Let's discuss your specific needs and put together a plan.</p>
          <Link to="/contact" className={`${styles.ctaButton} reveal`}>
            Get in touch <span className={`${styles.arrow} cta-arrow`}>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
