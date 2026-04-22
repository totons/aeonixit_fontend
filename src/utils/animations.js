import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { animate } from 'motion';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Check if user prefers reduced motion
export const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Global easing constants for GSAP
export const ease = {
  out:     'power3.out',      // cubic-bezier(0.22, 1, 0.36, 1)
  inOut:   'power1.inOut',    // cubic-bezier(0.76, 0, 0.24, 1)
  gentle:  'power1.inOut',    // cubic-bezier(0.4, 0, 0.2, 1)
  snap:    'back.out(1.5)',   // cubic-bezier(0.34, 1.56, 0.64, 1)
};

// Duration tokens in milliseconds
export const dur = {
  instant:  150,
  fast:     250,
  normal:   450,
  slow:     700,
  crawl:    1100,
};

// Disable all animations if user prefers reduced motion
if (prefersReducedMotion) {
  gsap.globalTimeline.timeScale(0);
  // Re-enable immediately to set elements to their final state, then disable again
  gsap.globalTimeline.timeScale(1);
}

const animationConfig = {
  prefersReducedMotion,
  ease,
  dur,
  gsap,
  ScrollTrigger,
  animate,
};

export default animationConfig;
