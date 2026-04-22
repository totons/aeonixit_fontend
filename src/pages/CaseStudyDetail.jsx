import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './CaseStudyDetail.module.css';

const CaseStudyDetail = () => {
  // eslint-disable-next-line no-unused-vars
  const { slug } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sample case study data
  const caseStudy = {
    slug: 'inventory-saas',
    title: 'Inventory Management SaaS',
    breadcrumb: 'Work → Case Studies → Inventory Management SaaS',
    client: 'Client Project',
    industry: 'Retail / Logistics',
    year: '2023',
    duration: '4 months',
    heroCaption: 'Dashboard overview — Inventory Management SaaS, 2023',
    summary: 'A mid-market retail company was drowning in spreadsheets. Their warehouse operations spanned 3 locations across the country, with 50+ staff managing inventory manually. We built a cloud-based inventory management system that eliminated manual data entry, cut stockouts by 70%, and reduced picking time by 40%.',
    services: ['SaaS Development', 'Mobile-first Design', 'Real-time Sync', 'API Integration'],
    techStack: ['React', 'React Native', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Firebase'],
    outcome: 'The platform went live after 4 months and was adopted by all 50+ warehouse staff within the first month. Real-time stock visibility eliminated guesswork, and automated low-stock alerts prevented expensive stockouts.',
    challenge: 'The business was losing $120K annually to expired inventory, stockouts, and inefficient picking routes. Manual spreadsheet tracking meant data was always 3-6 hours stale. Staff wasted 2 hours daily on data entry. The team needed a real-time system that could sync across locations and work offline when internet was spotty.',
    approach: [
      { step: 'Discovery & Audit', description: 'Spent a week in the warehouses observing actual workflows, interviewing staff, understanding pain points.' },
      { step: 'Information Architecture', description: 'Mapped the data model around real warehouse operations, not theoretical best practices.' },
      { step: 'Iterative Prototyping', description: 'Built prototypes focusing on the most painful workflows first — barcode scanning, low-stock alerts, picking optimization.' },
      { step: 'Development & QA', description: 'Built the web app and mobile apps in parallel. Staged deployments let the client test with small groups first.' },
      { step: 'Training & Handoff', description: 'Trained all 50+ staff with video tutorials and in-person sessions. Provided 30 days of on-call support.' },
    ],
    metrics: [
      { number: '95%', label: 'Reduction in manual data entry' },
      { number: '70%', label: 'Fewer stockouts' },
      { number: '40%', label: 'Faster picking' },
    ],
    reflection: 'The hardest part wasn\'t the technology — it was getting buy-in from long-time warehouse managers who were skeptical of "another software." We solved it by involving them in the design process and showing working prototypes early. By the time we deployed, they were advocates.',
  };

  return (
    <div className={styles.caseStudyDetail}>
      <section className={styles.pageHeader}>
        <div className={styles.container}>
          <p className={styles.breadcrumb}>{caseStudy.breadcrumb}</p>
          <h1 className="reveal">{caseStudy.title}</h1>
          <p className={styles.meta}>
            <span>{caseStudy.client}</span>
            <span>·</span>
            <span>{caseStudy.industry}</span>
            <span>·</span>
            <span>{caseStudy.year}</span>
            <span>·</span>
            <span>{caseStudy.duration}</span>
          </p>
        </div>
      </section>

      {/* Hero Visual */}
      <section className={styles.heroVisual}>
        <div className={styles.visualPlaceholder}></div>
        <p className={styles.caption}>{caseStudy.heroCaption}</p>
      </section>

      {/* Summary Section */}
      <section className={styles.summary}>
        <div className={styles.container}>
          <div className={styles.summaryGrid}>
            <div className={styles.summaryText}>
              <p className="reveal">{caseStudy.summary}</p>
            </div>
            <div className={styles.factsSidebar}>
              <div className={styles.factsBox}>
                <h4>Services</h4>
                <ul>
                  {caseStudy.services.map((service, idx) => (
                    <li key={idx}>{service}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.factsBox}>
                <h4>Tech Stack</h4>
                <ul>
                  {caseStudy.techStack.map((tech, idx) => (
                    <li key={idx}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.factsBox}>
                <h4>Outcome</h4>
                <p>{caseStudy.outcome}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className={styles.challengeSection}>
        <div className={styles.container}>
          <span className="section-label reveal">01 — THE CHALLENGE</span>
          <h2 className="reveal">A business running on spreadsheets and guesswork.</h2>
          <p className={`${styles.sectionBody} reveal`}>{caseStudy.challenge}</p>
        </div>
      </section>

      {/* Approach Section */}
      <section className={styles.approachSection}>
        <div className={styles.container}>
          <span className="section-label reveal">02 — OUR APPROACH</span>
          <h2 className="reveal">Simplify first. Then build.</h2>
          <div className={styles.processSteps}>
            {caseStudy.approach.map((item, idx) => (
              <div key={idx} className={`${styles.processStep} reveal`}>
                <div className={styles.stepNumber}>{String(idx + 1).padStart(2, '0')}</div>
                <div className={styles.stepContent}>
                  <h4>{item.step}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Build Section */}
      <section className={styles.buildSection}>
        <div className={styles.container}>
          <span className="section-label reveal">03 — THE BUILD</span>
          <h2 className="reveal">From design to deployment.</h2>
          <div className={styles.buildVisuals}>
            <div className={`${styles.visual} ${styles.fullWidth} reveal`}></div>
            <div className={`${styles.visual} ${styles.halfWidth} reveal`}></div>
            <div className={`${styles.visual} ${styles.halfWidth} reveal`}></div>
          </div>
        </div>
      </section>

      {/* Outcome Section */}
      <section className={styles.outcomeSection}>
        <div className={styles.container}>
          <span className="section-label reveal">04 — THE OUTCOME</span>
          <h2 className="reveal">Shipped in 16 weeks. Used every day by all 50+ staff.</h2>
          <p className={`${styles.sectionBody} reveal`}>{caseStudy.outcome}</p>

          <div className={styles.metricsRow}>
            {caseStudy.metrics.map((metric, idx) => (
              <div key={idx} className={`${styles.metric} reveal`}>
                <div className={styles.metricNumber}>{metric.number}</div>
                <p className={styles.metricLabel}>{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reflections */}
      <section className={styles.reflectionsSection}>
        <div className={styles.container}>
          <span className="section-label reveal">05 — REFLECTIONS</span>
          <p className={`${styles.reflection} reveal`}>{caseStudy.reflection}</p>
        </div>
      </section>

      {/* Navigation */}
      <section className={styles.navigation}>
        <div className={styles.container}>
          <div className={styles.navItems}>
            <Link to="/case-studies" className={styles.backLink}>
              ← All case studies
            </Link>
            <Link to="/case-studies" className={styles.nextLink}>
              Next project →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaBanner}>
        <div className={styles.container}>
          <h2 className="reveal">Have a project like this?</h2>
          <p className="reveal">Let's build something great together.</p>
          <Link to="/contact" className={`${styles.ctaButton} reveal`}>
            Get in touch <span className={`${styles.arrow} cta-arrow`}>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;
