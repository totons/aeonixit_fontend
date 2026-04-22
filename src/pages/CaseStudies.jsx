import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './CaseStudies.module.css';

const CaseStudies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const caseStudies = [
    {
      id: 'inventory-saas',
      number: '01',
      title: 'Inventory Management SaaS',
      description: 'Building a cloud-based inventory system for retail logistics.',
      year: '2023',
      client: 'Client Project',
      tags: ['SaaS', 'Logistics', 'Real-time'],
    },
    {
      id: 'hr-automation',
      number: '02',
      title: 'Internal HR Automation Tool',
      description: 'Streamlining hiring, onboarding, and people operations.',
      year: '2024',
      client: 'Internal Product',
      tags: ['Automation', 'HR', 'Tools'],
    },
    {
      id: 'consulting-portal',
      number: '03',
      title: 'Consulting Firm Client Portal',
      description: 'Secure client communication and project management hub.',
      year: '2023',
      client: 'Client Project',
      tags: ['Portal', 'Consulting', 'Security'],
    },
    {
      id: 'field-service',
      number: '04',
      title: 'Field Service Scheduling App',
      description: 'Mobile-first scheduling for field technicians and route optimization.',
      year: '2022',
      client: 'Client Project',
      tags: ['Mobile', 'Scheduling', 'Maps'],
    },
    {
      id: 'analytics-dashboard',
      number: '05',
      title: 'Business Analytics Dashboard',
      description: 'Real-time data visualization and reporting for C-level executives.',
      year: '2024',
      client: 'Client Project',
      tags: ['Analytics', 'BI', 'Dashboards'],
    },
  ];

  return (
    <div className={styles.caseStudies}>
      <section className={styles.pageHeader}>
        <div className={styles.container}>
          <span className="section-label reveal">CASE STUDIES</span>
          <h1 className="reveal">In-depth looks at how we work.</h1>
          <p className="reveal">Selected projects with full process breakdowns — from brief to build.</p>
        </div>
      </section>

      <section className={styles.studiesList}>
        <div className={styles.container}>
          {caseStudies.map((study, index) => (
            <Link
              key={study.id}
              to={`/case-studies/${study.id}`}
              className={`${styles.studyRow} reveal`}
            >
              <div className={styles.studyNumber}>{study.number}</div>
              <div className={styles.studyContent}>
                <h3>{study.title}</h3>
                <p>{study.description}</p>
                <div className={styles.studyTags}>
                  {study.tags.map((tag, idx) => (
                    <span key={idx} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.studyMeta}>
                <span className={styles.year}>{study.year}</span>
                <span className={styles.arrow}>→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.bottomText}>
        <div className={styles.container}>
          <p className="reveal">More work available on request.</p>
        </div>
      </section>

      <section className={styles.ctaBanner}>
        <div className={styles.container}>
          <h2 className="reveal">Interested in working together?</h2>
          <p className="reveal">Let's talk about your project.</p>
          <Link to="/contact" className={`${styles.ctaButton} reveal`}>
            Get in touch <span className={`${styles.arrow} cta-arrow`}>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
