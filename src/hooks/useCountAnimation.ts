
import { useEffect, useState } from 'react';

interface UseCountAnimationOptions {
  end: number;
  start?: number;
  duration?: number;
  trigger?: boolean;
}

export const useCountAnimation = ({
  end,
  start = 0,
  duration = 2000,
  trigger = false
}: UseCountAnimationOptions) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!trigger) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const currentCount = Math.floor(easeOutQuart * (end - start) + start);
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [trigger, end, start, duration]);

  return count;
};
