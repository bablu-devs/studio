'use client';

import { useState, useEffect, useRef } from 'react';

type StarProps = {
  top: number;
  left: number;
  size: number;
  delay: number;
};

const Star = ({ top, left, size, delay }: StarProps) => {
  const style = {
    top: `${top}%`,
    left: `${left}%`,
    width: `${size}px`,
    height: `${size}px`,
    animationDelay: `${delay}s`,
  };
  return <div className="absolute rounded-full bg-white/80 animate-twinkle" style={style}></div>;
};

const Starfield = () => {
  const [stars, setStars] = useState<React.ReactNode[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  // Generate stars on client-side only to prevent hydration mismatch
  useEffect(() => {
    const starLayers = [
      ...Array.from({ length: 60 }).map((_, i) => ({ size: 1, top: Math.random() * 100, left: Math.random() * 100, delay: Math.random() * 4, key: `s1-${i}` })),
      ...Array.from({ length: 30 }).map((_, i) => ({ size: 2, top: Math.random() * 100, left: Math.random() * 100, delay: Math.random() * 4, key: `s2-${i}` })),
      ...Array.from({ length: 10 }).map((_, i) => ({ size: 3, top: Math.random() * 100, left: Math.random() * 100, delay: Math.random() * 4, key: `s3-${i}` })),
    ];
    setStars(starLayers.map(s => <Star key={s.key} size={s.size} top={s.top} left={s.left} delay={s.delay} />));
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
