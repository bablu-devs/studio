const Star = ({ top, left, duration, size }) => {
  const style = {
    top: `${top}%`,
    left: `${left}%`,
    width: `${size}px`,
    height: `${size}px`,
    animationDuration: `${duration}s`,
  };
  return <div className="absolute rounded-full bg-white/80 animate-star-field" style={style}></div>;
};

const Starfield = () => {
  const stars = (count: number, duration: number, size: number) => {
    return Array.from({ length: count }).map((_, i) => {
      const top = Math.random() * 200; // Start off screen
      const left = Math.random() * 100;
      return <Star key={`star-${i}`} top={top} left={left} duration={duration} size={size} />;
    });
  };

  return (
    <div className="fixed inset-0 z-[-10] overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        {stars(50, 100, 1)}
      </div>
      <div className="absolute inset-0 opacity-60">
        {stars(30, 150, 2)}
      </div>
       <div className="absolute inset-0 opacity-80">
        {stars(10, 200, 3)}
      </div>
    </div>
  );
};

export default Starfield;
