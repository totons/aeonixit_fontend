import React, { useEffect } from 'react';
import styles from './Work.module.css';

const Work = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const workItems = [
    {
      title: 'Real-Time Analytics Platform',
      client: 'Internal Product',
      year: '2024',
      description: 'A real-time data visualization dashboard built from the ground up. Processes 50M+ events daily with sub-second latency. Interactive charts, custom dashboards, predictive insights. Used by data teams at Series B+ SaaS companies for real-time decision making.',
      challenge: 'Legacy analytics tools couldn\'t handle event volume. Teams waited hours for insights. Need: ingest 50M events/day, serve query results in <500ms, real-time collaborative dashboards.',
      solution: 'Built event ingestion layer with PostgreSQL + TimescaleDB. React frontend with D3.js/Plotly visualizations. WebSocket connections for real-time updates. Redis caching for 99% query cache hit rate.',
      results: ['50M events/day processed', 'Sub-second query latency', '99.97% platform uptime', '3x more users than previous tool'],
      tags: ['React', 'PostgreSQL', 'TimescaleDB', 'D3.js', 'Node.js', 'WebSockets', 'Redis'],
      thumbnail: (
        <div style={{
          background: 'linear-gradient(135deg, #2C3E50 0%, #3D5A80 100%)',
          width: '100%',
          height: '100%',
        }}></div>
      ),
    },
    {
      title: 'E-Commerce Platform Modernization',
      client: 'Mid-Market SaaS',
      year: '2023',
      description: 'Migrated a legacy PHP monolith (built in 2008) to a modern Next.js stack. Eliminated 15 years of technical debt. Zero downtime across 500k active users. Cut server infrastructure costs by 60% and page load time from 4 seconds to 600ms.',
      challenge: 'Aging codebase made feature development painful. Server costs spiraling. Page load times driving conversion loss. Risk: migration would break for 500k users. Required: complete rewrite without downtime.',
      solution: 'Planned gradual migration with blue-green deployment. Built Next.js app alongside existing PHP. Migrated data in batches. Used feature flags to gradually route traffic. Final cutover during low-traffic window.',
      results: ['60% server cost reduction ($2.4M → $1M annually)', '4s → 600ms page load time', '+200% conversion rate', '+80 NPS score', 'Zero downtime migration'],
      tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS', 'Docker', 'Redis'],
      thumbnail: (
        <div style={{
          background: 'linear-gradient(135deg, #6B8E99 0%, #9DB8C4 100%)',
          width: '100%',
          height: '100%',
        }}></div>
      ),
    },
    {
      title: 'Mobile Warehouse Inventory System',
      client: 'International Logistics',
      year: '2023',
      description: 'Mobile-first inventory management system deployed across 5 warehouses on 3 continents. 200+ workers using barcode scanning. Real-time alerts. Reduced manual data entry by 95%, stockouts by 70%, picking time by 40%.',
      challenge: 'Manual spreadsheet tracking causing $2M in annual losses (expired inventory, stockouts, picking delays). 200 warehouse workers across multiple locations. Needed: offline-first app, barcode scanning, real-time sync.',
      solution: 'Built React Native app with offline-first architecture. IndexedDB for local state. Firebase for sync. Barcode camera scanning via WebCamera API. Geo-tagged inventory tracking. Automated alerts for low stock.',
      results: ['95% reduction in manual data entry', '70% fewer stockouts', '40% faster picking', '$800k annual savings', 'Deployed to 5 warehouses in 6 weeks'],
      tags: ['React Native', 'Firebase', 'Expo', 'IndexedDB', 'Barcode API', 'Geolocation'],
      thumbnail: (
        <div style={{
          background: 'linear-gradient(135deg, #4A6B7C 0%, #7A9BAC 100%)',
          width: '100%',
          height: '100%',
        }}></div>
      ),
    },
    {
      title: 'SaaS Customer Onboarding Platform',
      client: 'B2B SaaS Company',
      year: '2022',
      description: 'Automated customer onboarding system. Reduced new customer setup time from 2 weeks to 48 hours. Self-service setup flows, automated data migration, guided interactive tours. Used by 500+ customers.',
      challenge: 'Each new customer took 2 weeks to onboard manually. Support team bottleneck. Needed: self-service setup, automated data import from multiple formats, interactive product tours.',
      solution: 'Built step-by-step onboarding flow in React. CSV/JSON data import engine. Integration framework for common connectors (Stripe, Google Sheets, Zapier). Interactive tours using Shepherd.js.',
      results: ['2 weeks → 48 hours setup', '90% self-service completion', '$500k in annual support cost savings', '35% faster time-to-value'],
      tags: ['React', 'Node.js', 'MongoDB', 'CSV Parser', 'Zapier API', 'Shepherd.js'],
      thumbnail: (
        <div style={{
          background: 'linear-gradient(135deg, #5A7D8E 0%, #8AADBE 100%)',
          width: '100%',
          height: '100%',
        }}></div>
      ),
    },
    {
      title: 'Startup Consulting Marketplace MVP',
      client: 'Founder-Led Startup',
      year: '2022',
      description: 'Built marketplace connecting expert consultants with businesses seeking advice. Payment processing, rating system, scheduling, video calls. Launched MVP in 8 weeks. Now doing $2M annual GMV.',
      challenge: 'Founder had idea but zero technical team. Needed: marketplace platform with payments, ratings, scheduling, video capability. Tight timeline: get to market in 8 weeks.',
      solution: 'Built with React + Express + PostgreSQL. Integrated Stripe for payments, Calendly API for scheduling, Twilio for video. Simple but complete MVP.',
      results: ['MVP launched in 8 weeks', '$2M annual GMV', '3,000+ active consultants', 'Raised $3M Series A'],
      tags: ['React', 'Express', 'PostgreSQL', 'Stripe', 'Twilio', 'Calendly API'],
      thumbnail: (
        <div style={{
          background: 'linear-gradient(135deg, #3D5F6F 0%, #6D8D9F 100%)',
          width: '100%',
          height: '100%',
        }}></div>
      ),
    },
  ];

  return (
    <div className={styles.work}>
      <section className={styles.pageHeader}>
        <div className={styles.container}>
          <h1 className="reveal">Selected Work</h1>
          <p className="reveal">Five detailed case studies of projects we've shipped. Each represents our commitment to solving real problems with production-quality code.</p>
        </div>
      </section>

      <section className={styles.workList}>
        <div className={styles.container}>
          {workItems.map((item, index) => (
            <div key={index} className={`${styles.workItem} reveal`}>
              <div className={styles.workImage}>
                {item.thumbnail}
              </div>

              <div className={styles.workContent}>
                <div className={styles.workMeta}>
                  <span className={styles.client}>{item.client}</span>
                  <span className={styles.year}>{item.year}</span>
                </div>

                <h2>{item.title}</h2>

                <p className={styles.workDescription}>{item.description}</p>

                <div className={styles.caseStudy}>
                  <div className={styles.caseStudySection}>
                    <h4>Challenge</h4>
                    <p>{item.challenge}</p>
                  </div>

                  <div className={styles.caseStudySection}>
                    <h4>Solution</h4>
                    <p>{item.solution}</p>
                  </div>

                  <div className={styles.caseStudySection}>
                    <h4>Results</h4>
                    <ul>
                      {item.results.map((result, idx) => (
                        <li key={idx}>{result}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={styles.workTags}>
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.caseStudiesSection}>
        <div className={styles.container}>
          <span className="section-label reveal">CASE STUDIES</span>
          <h2 className="reveal">Want the full story?</h2>
          <p className="reveal">We document select projects in detail — process, decisions, and outcomes.</p>
          <a href="/case-studies" className={`${styles.caseStudiesLink} reveal`}>
            Read case studies <span className={`${styles.arrow} cta-arrow`}>→</span>
          </a>
        </div>
      </section>

      <section className={styles.ctaBanner}>
        <div className={styles.container}>
          <h2 className="reveal">Your project could be next.</h2>
          <p className="reveal">Let's talk about what you're building and how we can help.</p>
          <a href="/contact" className={`${styles.ctaButton} reveal`}>
            Start a conversation <span className={`${styles.arrow} cta-arrow`}>→</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Work;
