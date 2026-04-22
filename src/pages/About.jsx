import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.css';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const content = document.querySelector(`.${styles.container}`);
    if (content) {
      const reveals = content.querySelectorAll('.reveal');
      reveals.forEach((el, idx) => {
        el.style.animationDelay = `${idx * 100}ms`;
      });
    }
  }, []);

  const principles = [
    {
      number: '01',
      title: 'Simplicity over cleverness',
      description: 'The most elegant solution is often the simplest. We avoid unnecessary complexity that creates technical debt and maintenance headaches.',
    },
    {
      number: '02',
      title: 'Solve real problems',
      description: 'Every feature we build solves a real problem for real users. We start with problems, not with technology.',
    },
    {
      number: '03',
      title: 'Ship early, iterate often',
      description: 'We believe in shipping working software quickly and improving based on real feedback. Perfect is the enemy of good.',
    },
    {
      number: '04',
      title: 'Code lives forever',
      description: 'We write code with the assumption that someone (possibly us) will be maintaining it years later. Clarity and maintainability matter.',
    },
  ];

  return (
    <div className={`${styles.about} hairline-grid`}>
      <section className={styles.pageHeader}>
        <div className={styles.container}>
          <h1 className="reveal">We build what businesses run on.</h1>
          <p className="reveal">Strategic software that solves real problems without unnecessary complexity.</p>
        </div>
      </section>

      <section className={styles.story}>
        <div className={styles.container}>
          <div className={styles.storyContent}>
            <p className="reveal">
              Aeonixit exists because we got tired of watching businesses waste resources on over-engineered solutions. Too many software projects fail not because they lack features, but because they're bloated, hard to maintain, and don't actually solve the core problem.
            </p>

            <p className="reveal">
              We started with a simple belief: software should be built precisely for the job it needs to do, no more, no less. That philosophy guides everything we build. We work with founders and leaders who think the same way — who value efficiency, reliability, and code that lasts.
            </p>

            <p className="reveal">
              Our team brings 15+ years of combined experience building and scaling software products. We've seen what works and what doesn't. We build software once, and we build it right.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.principles}>
        <div className={styles.container}>
          <h2 className="reveal">How We Work</h2>

          <div className={styles.principlesList}>
            {principles.map((principle, index) => (
              <div key={index} className={`${styles.principleItem} reveal`}>
                <span className={styles.principleNumber}>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.process}>
        <div className={styles.container}>
          <h2 className="reveal">Our Process</h2>

          <div className={styles.steps}>
            <div className={`${styles.step} reveal`}>
              <div className={styles.stepNumber}>01</div>
              <h3>Understand</h3>
              <p>We start by deeply understanding your business, your users, and your constraints. No assumptions.</p>
            </div>

            <div className={`${styles.step} reveal`}>
              <div className={styles.stepNumber}>02</div>
              <h3>Plan</h3>
              <p>We create a strategic plan that prioritizes what matters most. We align on scope, timeline, and success criteria.</p>
            </div>

            <div className={`${styles.step} reveal`}>
              <div className={styles.stepNumber}>03</div>
              <h3>Build</h3>
              <p>We ship incrementally. You see working software early and often, so you can guide the direction.</p>
            </div>

            <div className={`${styles.step} reveal`}>
              <div className={styles.stepNumber}>04</div>
              <h3>Maintain</h3>
              <p>We hand over clean, well-documented code. We're available for ongoing support and evolution.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.tech}>
        <div className={styles.container}>
          <h2 className="reveal">What We Build With</h2>
          <p className="reveal" style={{ marginBottom: '2rem', color: 'var(--text-secondary)', maxWidth: '70ch' }}>
            We choose tools based on what solves your problem best. Not on hype. We work with modern, proven technologies that scale with your business.
          </p>

          <div className={styles.techGrid}>
            <div className={`${styles.techBox} reveal`}>
              <h4>Frontend</h4>
              <p>React · Next.js · TypeScript · Tailwind · Vue</p>
            </div>
            <div className={`${styles.techBox} reveal`}>
              <h4>Backend</h4>
              <p>Node.js · Python · Express · Django · FastAPI</p>
            </div>
            <div className={`${styles.techBox} reveal`}>
              <h4>Databases</h4>
              <p>PostgreSQL · MongoDB · Redis · Elasticsearch</p>
            </div>
            <div className={`${styles.techBox} reveal`}>
              <h4>Infrastructure</h4>
              <p>AWS · GCP · Docker · Kubernetes · GitHub Actions</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaBanner}>
        <div className={styles.container}>
          <h2 className="reveal">Ready to build something great?</h2>
          <p className="reveal">Let's talk about your project and see if we're a fit.</p>
          <Link to="/contact" className={`${styles.ctaButton} reveal`}>
            Get in touch <span className={`${styles.arrow} cta-arrow`}>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
