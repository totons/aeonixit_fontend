// Intersection Observer hook for scroll reveals
export const useScrollReveal = () => {
  const observerRef = (element) => {
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (element.classList.contains('reveal')) {
      observer.observe(element);
    }

    return observer;
  };

  return observerRef;
};

// Stagger animation helper
export const staggerChildren = (parent, delay = 100) => {
  if (!parent) return;

  const children = parent.querySelectorAll('.reveal');
  children.forEach((child, index) => {
    child.style.animationDelay = `${index * delay}ms`;
  });
};
