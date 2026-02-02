'use client';

import { useState, useEffect, useRef } from 'react';

type StarProps = {
  top: number;
  left: number;
  size: number;
  twinkleDelay: number;
  moveDuration: number;
  moveDelay: number;
};

const Star = ({ top, left, size, twinkleDelay, moveDuration, moveDelay }: StarProps) => {
  const style = {
    top: `${top}%`,
    left: `${left}%`,
    width: `${size}px`,
    height: `${size}px`,
    animation: `twinkle 4s ease-in-out infinite ${twinkleDelay}s, move-random ${moveDuration}s ease-in-out infinite alternate ${moveDelay}s`,
  };
  return <div className="absolute rounded-full bg-white/80" style={style}></div>;
};

const Starfield = () => {
  const [stars, setStars] = useState<React.ReactNode[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  // Generate stars on client-side only to prevent hydration mismatch
  useEffect(() => {
    const createStar = (i: number, size: number) => ({
      key: `s${size}-${i}`,
      size,
      top: Math.random() * 100,
      left: Math.random() * 100,
      twinkleDelay: Math.random() * 4,
      moveDuration: 20 + Math.random() * 20, // 20-40s duration
      moveDelay: Math.random() * 30,
    });
    
    const starLayers = [
      ...Array.from({ length: 60 }).map((_, i) => createStar(i, 1)),
      ...Array.from({ length: 30 }).map((_, i) => createStar(i, 2)),
      ...Array.from({ length: 10 }).map((_, i) => createStar(i, 3)),
    ];
    setStars(starLayers.map(s => <Star {...s} />));
  }, []);

  // Handle parallax scroll
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        // The value '0.3' controls the speed of the parallax effect.
        ref.current.style.transform = `translateY(-${window.scrollY * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={ref} className="fixed inset-y-0 left-0 z-[-10] h-full w-full">
      {/* We make the star container larger than the viewport so stars don't disappear on scroll */}
      <div className="absolute -inset-y-1/4 left-0 h-[150%] w-full">
         {stars}
      </div>
    </div>
  );
};

export default Starfield;
