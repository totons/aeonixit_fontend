import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Process.module.css';

const Process = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const phases = [
    {
      number: '01',
      title: 'Discovery',
      duration: 'Week 1–2',
      heading: 'We listen before we build.',
      description: 'Initial conversations to understand your business problem, goals, constraints, and success metrics. We ask hard questions and listen carefully. This phase takes time because getting it right here saves time everywhere else.',
      deliverables: ['Project brief document', 'Scope of work definition', 'Rough timeline estimate'],
    },
    {
      number: '02',
      title: 'Planning & Architecture',
      duration: 'Week 2–3',
      heading: 'Structure first. Screens second.',
      description: 'We build information architecture, make technology stack decisions, and break the work into achievable milestones. Everything is documented so nothing gets lost or reworked.',
      deliverables: ['Technical architecture document', 'Milestone breakdown', 'Confirmed timeline and cost'],
    },
    {
      number: '03',
      title: 'Design & Prototyping',
      duration: 'Week 3–5',
      heading: 'We design for clarity, not awards.',
      description: 'Wireframes first, then high-fidelity UI designs for key screens. We build a clickable prototype so you can feel the product before we write production code. One round of revisions included.',
      deliverables: ['UI designs (key screens)', 'Clickable prototype', 'Design documentation'],
    },
    {
      number: '04',
      title: 'Development',
      duration: 'Week 5–12 (varies)',
      heading: 'Heads down. Code ships.',
      description: 'Iterative development in 1-week sprints. We deploy to a staging environment weekly so you can see working software. Weekly check-ins keep you informed without interrupting progress.',
      deliverables: ['Working software on staging', 'Weekly status updates', 'QA testing report'],
    },
    {
      number: '05',
      title: 'Launch & Handoff',
      duration: 'Week 12–14',
      heading: 'We don\'t disappear at go-live.',
      description: 'Production deployment, full documentation, training if needed. We stay available for 30 days post-launch to monitor, patch bugs, and optimize performance.',
      deliverables: ['Live deployment', 'Full documentation', '30-day post-launch support'],
    },
    {
      number: '06',
      title: 'Ongoing Support',
      duration: 'Ongoing',
      heading: 'Most clients stay. We make that easy.',
      description: 'Retainer-based support for maintenance, feature development, and roadmap planning. You get priority support and access to our team for strategic guidance.',
      deliverables: ['Monthly retainer options', 'Priority support', 'Roadmap planning sessions'],
    },
  ];

  const faqs = [
    {
      question: 'How do you charge?',
      answer: 'Project-based pricing for fixed-scope work. We quote after discovery, not before. For ongoing work, we offer monthly retainers.',
    },
    {
      question: 'How involved do I need to be?',
      answer: 'A weekly 30-minute check-in is usually enough. We\'ll flag when we need a decision from you. Most of our work happens async-friendly so timezone differences aren\'t a blocker.',
    },
    {
      question: 'Do you work with clients outside Bangladesh?',
      answer: 'Yes. Most of our clients are outside Bangladesh. We\'re comfortable with distributed teams and async communication.',
    },
    {
      question: 'What if scope changes mid-project?',
      answer: 'We handle it with a simple change request process. We document the impact on timeline and cost. No surprise invoices.',
    },
    {
      question: 'How do we get started?',
      answer: 'Send us a message at studio@aeonixit.com with a brief description of what you\'re building. We\'ll reply within 2 business days with next steps.',
    },
  ];

  return (
    <div className={`${styles.process} hairline-grid`}>
      <section className={styles.pageHeader}>
        <div className={styles.container}>
          <span className="section-label reveal">HOW WE WORK</span>
          <h1 className="reveal">From brief to build — how a project with Aeonixit actually runs.</h1>
          <p className="reveal">No black boxes. No surprises. Just a clear process you can follow along with.</p>
        </div>
      </section>

      <section className={styles.intro}>
        <div className={styles.container}>
          <div className={`${styles.introContent} reveal`}>
            <p>We're selective about projects and small by choice. That means we can give every client our full attention and build exactly what they need — no shortcuts, no unnecessary compromise.</p>

            <p>Our process is designed to minimize waste, keep you informed, and deliver real results. Every phase has a clear purpose, and every deliverable is documented.</p>
          </div>
        </div>
      </section>

      <section className={styles.phases}>
        <div className={styles.container}>
          {phases.map((phase, index) => (
            <div key={index} className={`${styles.phase} reveal`}>
              <div className={styles.phaseNumber}>{phase.number}</div>
              <div className={styles.phaseContent}>
                <div className={styles.phaseHeader}>
                  <span className={styles.phaseLabel}>{phase.duration}</span>
                  <h2>{phase.heading}</h2>
                </div>

                <p className={styles.phaseDescription}>{phase.description}</p>

                <div className={styles.deliverables}>
                  <h4>Deliverables</h4>
                  <ul>
                    {phase.deliverables.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.container}>
          <h2 className="reveal">Questions?</h2>

          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <div key={index} className={`${styles.faqItem} reveal`}>
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaBanner}>
        <div className={styles.container}>
          <h2 className="reveal">Ready to get started?</h2>
          <p className="reveal">Let's talk about your project and see if we're a good fit.</p>
          <Link to="/contact" className={`${styles.ctaButton} reveal`}>
            Get in touch <span className={`${styles.arrow} cta-arrow`}>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Process;
