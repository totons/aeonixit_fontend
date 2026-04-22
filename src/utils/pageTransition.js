import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { animate } from 'motion';
import { prefersReducedMotion } from './animations';

/**
 * Page Transition Hook
 * Triggers Motion One line sweep + content fade on route changes
 * - Line: 1.5px accent color, full width sweep (550ms total)
 * - Content: fade out (200ms) + fade in (350ms) with upward drift
 */
export const usePageTransition = () => {
  const location = useLocation();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const transitionLine = document.getElementById('page-transition-line');
    const mainContent = document.querySelector('main');

    if (!transitionLine || !mainContent) return;

    // Reset line and content to ready state
    transitionLine.style.width = '0%';
    transitionLine.style.opacity = '0.85';
    mainContent.style.opacity = '1';

    // Timeline: Line sweep (700ms total, split into left-to-right + back)
    const lineTimeline = async () => {
      // Sweep left to right (350ms)
      await animate(transitionLine, 
        { width: ['0%', '100%'] },
        { duration: 0.35, easing: 'ease-out' }
      );
      
      // Sweep back to left (120ms)
      await animate(transitionLine,
        { width: ['100%', '0%'] },
        { duration: 0.12, easing: 'ease-in' }
      );
    };

    // Timeline: Content transition (550ms total)
    const contentTimeline = async () => {
      // Fade out (200ms)
      await animate(mainContent,
        { opacity: [1, 0], transform: ['translateY(0px)', 'translateY(-20px)'] },
        { duration: 0.2, easing: 'ease-in' }
      );
      
      // Reset position and prepare for fade in
      mainContent.style.transform = 'translateY(20px)';
      
      // Fade in (350ms) with upward drift
      await animate(mainContent,
        { opacity: [0, 1], transform: ['translateY(20px)', 'translateY(0px)'] },
        { duration: 0.35, easing: 'ease-out' }
      );
    };

    // Run both timelines in parallel
    Promise.all([lineTimeline(), contentTimeline()]);
  }, [location.pathname]);
};
