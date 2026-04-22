import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { prefersReducedMotion, ease } from './animations';

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll-Triggered Animations Setup
 * Handles 7 categories of scroll reveals across all pages
 */

/**
 * Section Heading Curtain Reveal
 * Scan line + text reveal, staggered entrance
 * Applied to: .section-heading-reveal elements
 */
export const initSectionHeadingReveals = () => {
  if (prefersReducedMotion) return;

  gsap.utils.toArray('.section-heading-reveal').forEach((heading) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heading,
        start: 'top 80%',
        once: true,
      },
    });

    const scanLine = heading.querySelector('.heading-scan-line');
    const headingText = heading.querySelector('h2, h3');

    if (scanLine) {
      tl.to(scanLine, {
        scaleX: 1,
        duration: 0.7,
        ease: ease.inOut,
      }, 0);
    }

    if (headingText) {
      tl.to(
        headingText,
        {
          opacity: 1,
          transform: 'translateY(0)',
          duration: 0.8,
          ease: ease.out,
        },
        0.15
      );
    }
  });
};

/**
 * Body Text Fade-Up
 * Opacity + translateY, 0.6s duration
 * Applied to: .body-fade-up elements
 */
export const initBodyFadeUps = () => {
  if (prefersReducedMotion) return;

  gsap.utils.toArray('.body-fade-up').forEach((element) => {
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        once: true,
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: ease.out,
    });
  });
};

/**
 * Metrics Count-Up
 * Number ticker animation for stat cards
 * Applied to: .metric-count elements
 */
export const initMetricsCountUp = () => {
  if (prefersReducedMotion) return;

  gsap.utils.toArray('.metric-count').forEach((element) => {
    const finalValue = parseInt(element.textContent, 10);

    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        once: true,
      },
      textContent: finalValue,
      duration: 2.0,
      ease: 'power2.out',
      snap: { textContent: 1 },
      onUpdate: function() {
        element.textContent = Math.ceil(this.targets()[0].textContent);
      },
    });
  });
};

/**
 * Process Phase Reveal
 * 3-part staggered sequence for each phase
 * Applied to: .process-phase elements
 */
export const initProcessPhaseReveals = () => {
  if (prefersReducedMotion) return;

  gsap.utils.toArray('.process-phase').forEach((phase, index) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: phase,
        start: 'top 75%',
        once: true,
      },
    });

    const phaseNumber = phase.querySelector('.phase-number');
    const phaseHeading = phase.querySelector('.phase-heading');
    const phaseContent = phase.querySelector('.phase-content');

    // Number slide in
    if (phaseNumber) {
      tl.from(
        phaseNumber,
        {
          opacity: 0,
          x: -20,
          duration: 0.4,
          ease: ease.out,
        },
        0
      );
    }

    // Heading reveal
    if (phaseHeading) {
      tl.from(
        phaseHeading,
        {
          opacity: 0,
          y: 15,
          duration: 0.5,
          ease: ease.out,
        },
        0.1
      );
    }

    // Content fade
    if (phaseContent) {
      tl.from(
        phaseContent,
        {
          opacity: 0,
          y: 10,
          duration: 0.5,
          ease: ease.out,
        },
        0.2
      );
    }
  });
};

/**
 * Case Study Row Slide-In
 * Staggered left-to-right entrance
 * Applied to: .case-study-row elements
 */
export const initCaseStudySlideIns = () => {
  if (prefersReducedMotion) return;

  gsap.utils.toArray('.case-study-row').forEach((row, index) => {
    gsap.from(row, {
      scrollTrigger: {
        trigger: row,
        start: 'top 80%',
        once: true,
      },
      opacity: 0,
      x: -50,
      duration: 0.8,
      delay: index * 0.1,
      ease: ease.out,
    });
  });
};

/**
 * Portfolio Item Materialise
 * Scale + opacity combined entrance
 * Applied to: .portfolio-item elements
 */
export const initPortfolioMaterialise = () => {
  if (prefersReducedMotion) return;

  gsap.utils.toArray('.portfolio-item').forEach((item, index) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 80%',
        once: true,
      },
      opacity: 0,
      scale: 0.9,
      duration: 0.9,
      delay: index * 0.12,
      ease: ease.out,
    });
  });
};

/**
 * Divider Line Draw
 * ScaleX from left to right entrance
 * Applied to: .divider-line elements
 */
export const initDividerLineDraws = () => {
  if (prefersReducedMotion) return;

  gsap.utils.toArray('.divider-line').forEach((line) => {
    gsap.from(line, {
      scrollTrigger: {
        trigger: line,
        start: 'top 85%',
        once: true,
      },
      scaleX: 0,
      transformOrigin: 'left center',
      duration: 1.0,
      ease: ease.inOut,
    });
  });
};

/**
 * Initialize All Scroll Triggers
 * Call this once on app mount or route change
 */
export const initAllScrollTriggers = () => {
  if (prefersReducedMotion) return;

  initSectionHeadingReveals();
  initBodyFadeUps();
  initMetricsCountUp();
  initProcessPhaseReveals();
  initCaseStudySlideIns();
  initPortfolioMaterialise();
  initDividerLineDraws();

  // Refresh ScrollTrigger after all animations are registered
  ScrollTrigger.refresh();
};
