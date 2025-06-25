
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up'
}) => {
  const { elementRef, isVisible } = useScrollAnimation();

  const getAnimationClasses = () => {
    const base = 'transition-all duration-700 ease-out';
    
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return `${base} opacity-0 translate-y-8`;
        case 'down':
          return `${base} opacity-0 -translate-y-8`;
        case 'left':
          return `${base} opacity-0 translate-x-8`;
        case 'right':
          return `${base} opacity-0 -translate-x-8`;
        case 'fade':
          return `${base} opacity-0`;
        default:
          return `${base} opacity-0 translate-y-8`;
      }
    }
    
    return `${base} opacity-100 translate-y-0 translate-x-0`;
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClasses()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
