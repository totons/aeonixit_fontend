import gsap from 'gsap';
import { prefersReducedMotion, ease } from './animations';

/**
 * Hero Animation Sequence
 * 1. Scan line: 1px accent, sweeps left-to-right, 500ms total
 * 2. Headline word assembly: words fade in with stagger
 * 3. Navbar fade-in: delayed 0.6s after hero sequence
 */
export const animateHeroSequence = () => {
  if (prefersReducedMotion) return;

  const scanLine = document.querySelector('.hero-scan-line');
  const headlineWords = document.querySelectorAll('.hero-headline-word');
  const navbar = document.querySelector('nav');

  // Ensure we have at least some elements to animate
  if (!scanLine && !headlineWords.length) return;

  // Create master timeline
  const tl = gsap.timeline();

  // Scan line animation: left-to-right sweep (700ms)
  if (scanLine) {
    tl.to(scanLine, {
      width: '100%',
      duration: 0.7,
      ease: ease.out,
    }, 0);
  }

  // Headline word assembly: staggered word-by-word reveal
  // Each word: 800ms per word with 80ms stagger between them
  if (headlineWords.length) {
    headlineWords.forEach((word, index) => {
      tl.to(
        word,
        {
          opacity: 1,
          transform: 'translateY(0px)',
          duration: 0.8,
          ease: 'power3.out',
        },
        index * 0.08 // Stagger
      );
    });
  }

  // Navbar fade-in: delay 0.8s, fade in over 0.5s
  if (navbar) {
    tl.to(
      navbar,
      {
        opacity: 1,
        duration: 0.5,
        ease: ease.out,
      },
      0.8 // Delay after hero start
    );
  }

  return tl;
};

/**
 * Wrap headline words in spans for staggered animation
 * Call this once on component mount to prepare HTML
 */
export const wrapHeadlineWords = (headingElement) => {
  if (!headingElement) return;

  // React StrictMode can run effects twice in development, so make this idempotent.
  if (headingElement.querySelector('.hero-headline-word')) return;

  const text = headingElement.textContent || '';
  const words = text.trim().split(/\s+/);

  if (!words.length) return;

  const wrappedWords = words
    .map((word) => `<span class="hero-headline-word" style="display: inline-block; opacity: 0; transform: translateY(20px); margin-right: 0.25em;">${word}</span>`)
    .join(' ');

  headingElement.innerHTML = wrappedWords;
};
