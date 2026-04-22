import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import Marquee from '../components/Marquee';
import { staggerChildren } from '../utils/scrollReveal';
import { animateHeroSequence, wrapHeadlineWords } from '../utils/heroAnimation';
import { prefersReducedMotion } from '../utils/animations';

const Home = () => {
  useEffect(() => {
    let timeoutId;

    // Wrap headline words for animation
    const heroHeading = document.querySelector(`.${styles.heroHeading}`);
    if (heroHeading && !prefersReducedMotion) {
      const headings = heroHeading.querySelectorAll('h1');
      headings.forEach(h1 => {
        if (h1) {
          wrapHeadlineWords(h1);
        }
      });
    }

    // Trigger hero sequence animations
    timeoutId = setTimeout(() => {
      if (!prefersReducedMotion) {
        animateHeroSequence();
      }

      // Stagger hero animations
      const heroContent = document.querySelector(`.${styles.heroContent}`);
      if (heroContent && !prefersReducedMotion) {
        staggerChildren(heroContent, 150);
      }
    }, 50);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const services = [
    {
      number: '01',
      title: 'Product Engineering',
      description: 'Full-stack development from concept to production. We handle architecture, design, implementation, testing, and deployment. You get a product that works.',
    },
    {
      number: '02',
      title: 'SaaS Development',
      description: 'Multi-tenant cloud applications built for scale. User management, payment processing, analytics — everything a modern SaaS needs, handled right.',
    },
    {
      number: '03',
      title: 'Business Automation',
      description: 'Custom tools that eliminate manual work. Integration, data processing, workflow automation. We automate what keeps you up at night.',
    },
  ];

  const workItems = [
    {
      title: 'Real-Time Analytics Dashboard',
      client: 'Internal Product',
      year: '2024',
      description: 'Built a real-time analytics platform that processes 50M+ events daily. Features interactive visualizations, custom dashboards, and predictive insights. Tech leads depend on it for business decisions.',
      metrics: '40% faster insights | 3x more users | 99.97% uptime',
      tags: ['React', 'PostgreSQL', 'D3.js', 'WebSockets', 'Redis'],
      Link: 'https://www.northway.cloud/signin',
      thumbnail: (
        <div className={styles.thumbnailPlaceholder} style={{
          background: 'linear-gradient(135deg, #2C3E50 0%, #3D5A80 100%)',
        }}></div>
      ),
    },
    {
      title: 'E-Commerce Platform Migration',
      client: 'Mid-Market SaaS',
      year: '2023',
      description: 'Migrated legacy PHP monolith (2008 codebase) to modern Next.js architecture. Eliminated technical debt, cut server costs by 60%, and reduced page load times from 4s to 600ms. Zero downtime migration across 500k+ active users.',
      metrics: '60% cost reduction | 4s → 600ms page load | +200% conversion',
      tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      Link: 'https://ruposhee.com/',
      thumbnail: (
        <div className={styles.thumbnailPlaceholder} style={{
          background: 'linear-gradient(135deg, #6B8E99 0%, #9DB8C4 100%)',
        }}></div>
      ),
    },
    {
      title: 'Warehouse Inventory System',
      client: 'Logistics Company',
      year: '2023',
      description: 'Deployed mobile-first inventory management system with barcode scanning and real-time alerts. Reduced manual data entry by 95%, stockouts by 70%, and picking time by 40%. 200+ warehouse workers on 5 continents.',
      metrics: '95% less manual work | 70% fewer stockouts | 40% faster picking',
      Link: 'https://www.datasoft.icu/admin/login/?next=/admin/',
      tags: ['React Native', 'Firebase', 'BarcodeAPI', 'Offline-First'],
      thumbnail: (
        <div className={styles.thumbnailPlaceholder} style={{
          background: 'linear-gradient(135deg, #4A6B7C 0%, #7A9BAC 100%)',
        }}></div>
      ),
    },
  ];

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        {/* Ambient Orb */}
        <div className="ambient-orb" style={{
          right: '0',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 0,
        }}></div>
        
        <div className={styles.container}>
          <div className={styles.heroContent}>
            {/* Hero Scan Line Animation */}
            <div className="hero-scan-line" />
            
            <div className={`${styles.heroHeading} reveal`}>
              <h1>Software that fits.</h1>
              <h1>Solutions that last.</h1>
            </div>

            <p className={`${styles.heroSubtitle} reveal`}>
              We build production software for businesses that need things done right. No bloat. No unnecessary complexity. Just code that works and scales.
            </p>

            <div className={`${styles.heroCTA} reveal`}>
              <Link to="/work" className={styles.ctaPrimary}>
                See our work <span className={`${styles.arrow} cta-arrow`}>→</span>
              </Link>
              <Link to="/contact" className={styles.ctaSecondary}>
                Get in touch <span className={`${styles.arrow} cta-arrow`}>→</span>
              </Link>
            </div>
          </div>

          {/* Abstract Visual Element */}
          <div className={styles.heroVisual}>
            <svg className={styles.abstractShape} viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#2C3E50" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#2C3E50" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="200" cy="200" r="180" fill="url(#grad1)" />
              <line x1="50" y1="200" x2="350" y2="200" stroke="#E8E6E1" strokeWidth="0.5" opacity="0.5" />
              <line x1="200" y1="50" x2="200" y2="350" stroke="#E8E6E1" strokeWidth="0.5" opacity="0.5" />
              <circle cx="200" cy="200" r="120" fill="none" stroke="#2C3E50" strokeWidth="0.5" opacity="0.3" />
              <circle cx="200" cy="200" r="80" fill="none" stroke="#2C3E50" strokeWidth="0.5" opacity="0.2" />
            </svg>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <Marquee />

      {/* What We Do Section */}
      <section className={styles.whatWeDo}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className="section-label reveal">What We Do</span>
            <h2 className={`reveal`}>Our Services</h2>
          </div>

          <div className={styles.servicesList}>
            {services.map((service, index) => (
              <div key={index} className={`${styles.serviceItem} reveal`}>
                <span className={styles.serviceNumber}>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>

          <div className={styles.sectionCTA}>
            <Link to="/services" className={styles.textLink}>
              All Services <span className={`${styles.arrow} cta-arrow`}>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section className={styles.selectedWork}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className="section-label reveal">Portfolio</span>
            <h2 className={`reveal`}>Selected Work</h2>
          </div>

          {/* <div className={styles.workGrid}>
            {workItems.map((item, index) => (
              <div key={index} className={`${styles.workItem} reveal`}>
                <div className={styles.workThumbnail}>{item.thumbnail}</div>
                <div className={styles.workContent}>
                  <div className={styles.workMeta}>
                    <span className={styles.workClient}>{item.client}</span>
                    <span className={styles.workYear}>{item.year}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className={styles.workMetrics}>{item.metrics}</div>
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
          </div> */}


          <div className={styles.workGrid}>
  {workItems.map((item, index) => (
    <a 
      key={index} 
      href={item.Link} 
      target="_blank" 
      rel="noopener noreferrer"
      className={styles.workItem + " reveal"}
    >
      <div className={styles.workThumbnail}>{item.thumbnail}</div>
      <div className={styles.workContent}>
        <div className={styles.workMeta}>
          <span className={styles.workClient}>{item.client}</span>
          <span className={styles.workYear}>{item.year}</span>
        </div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <div className={styles.workMetrics}>{item.metrics}</div>
        <div className={styles.workTags}>
          {item.tags.map((tag, idx) => (
            <span key={idx} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  ))}
</div>

          <div className={styles.sectionCTA}>
            <Link to="/work" className={styles.textLink}>
              View all work <span className={`${styles.arrow} cta-arrow`}>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className={styles.aboutTeaser}>
        <div className={styles.container}>
          <div className={`${styles.aboutContent} reveal`}>
            <p className={styles.aboutText}>
              We're a focused team of engineers who've shipped software at every scale — from scrappy startups to Fortune 500 companies. We know what actually works. We ship working software early and often, integrate feedback immediately, and build systems designed to last years, not months.
            </p>
            <Link to="/about" className={styles.textLink}>
              About us <span className={`${styles.arrow} cta-arrow`}>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Banner */}
      <section className={styles.ctaBanner}>
        <div className={styles.container}>
          <h2 className={`reveal`}>Have a project in mind?</h2>
          <p className={`reveal`}>Let's build something that actually works for your business.</p>
          <Link to="/contact" className={`${styles.bannerCTA} reveal`}>
            Let's talk <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
