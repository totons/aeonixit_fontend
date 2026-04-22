import gsap from 'gsap';
import { prefersReducedMotion, ease } from './animations';

/**
 * Typography Animations
 * Specialized animations for text-based elements
 */

/**
 * Pull Quote Reveal
 * Left border animates down, text fades in with slight upward movement
 * Applied to: .pull-quote elements
 */
export const initPullQuoteReveals = () => {
  if (prefersReducedMotion) return;

  gsap.utils.toArray('.pull-quote').forEach((quote) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: quote,
        start: 'top 75%',
        once: true,
      },
    });

    const border = quote.querySelector('.pull-quote-border');
    const text = quote.querySelector('.pull-quote-text');

    if (border) {
      tl.from(
        border,
        {
          scaleY: 0,
          transformOrigin: 'top center',
          duration: 0.5,
          ease: ease.inOut,
        },
        0
      );
    }

    if (text) {
      tl.from(
        text,
        {
          opacity: 0,
          y: 10,
          duration: 0.6,
          ease: ease.out,
        },
        0.1
      );
    }
  });
};

/**
 * Page Title Reveal on Inner Pages
 * Curtain reveal with scan line + text
 * Applied to: .page-title-reveal elements
 */
export const initPageTitleReveals = () => {
  if (prefersReducedMotion) return;

  gsap.utils.toArray('.page-title-reveal').forEach((titleSection) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleSection,
        start: 'top 80%',
        once: true,
      },
    });

    const scanLine = titleSection.querySelector('.title-scan-line');
    const title = titleSection.querySelector('h1');
    const subtitle = titleSection.querySelector('p');

    if (scanLine) {
      tl.from(
        scanLine,
        {
          scaleX: 0,
          transformOrigin: 'left center',
          duration: 0.4,
          ease: ease.inOut,
        },
        0
      );
    }

    if (title) {
      tl.from(
        title,
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: ease.out,
        },
        0.05
      );
    }

    if (subtitle) {
      tl.from(
        subtitle,
        {
          opacity: 0,
          y: 15,
          duration: 0.5,
          ease: ease.out,
        },
        0.15
      );
    }
  });
};

/**
 * Section Label Letter-Spacing Animation
 * Expands then condenses, creating a breathing effect
 * Applied to: .section-label elements
 */
export const initSectionLabelAnimations = () => {
  if (prefersReducedMotion) return;

  gsap.utils.toArray('.section-label').forEach((label) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: label,
        start: 'top 80%',
        once: true,
      },
      repeat: 0, // Only animate once
    });

    // Expand letter-spacing
    tl.to(
      label,
      {
        letterSpacing: '0.12em',
        opacity: 1,
        duration: 0.4,
        ease: ease.out,
      },
      0
    );

    // Condense back to normal with slight overshoot
    tl.to(
      label,
      {
        letterSpacing: '0.08em',
        duration: 0.3,
        ease: 'back.out(1.2)',
      }
    );
  });
};

/**
 * Initialize All Typography Animations
 * Call this once per page or route change
 */
export const initAllTypographyAnimations = () => {
  if (prefersReducedMotion) return;

  initPullQuoteReveals();
  initPageTitleReveals();
  initSectionLabelAnimations();
};
