
import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  className?: string;
  formatter?: (value: number) => string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  duration = 1000,
  className,
  formatter = (value) => Math.round(value).toLocaleString()
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [key, setKey] = useState(0); // Used to trigger animation

  useEffect(() => {
    // Reset key to trigger animation
    setKey(prev => prev + 1);
    
    let startTime: number;
    let startValue = displayValue;
    const endValue = value;
    
    const animateValue = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercent = Math.min(progress / duration, 1);
      
      // Easing function: cubic-bezier(.17,.67,.83,.67)
      const easeProgress = progressPercent < 0.5
        ? 4 * progressPercent * progressPercent * progressPercent
        : 1 - Math.pow(-2 * progressPercent + 2, 3) / 2;
      
      const currentValue = startValue + (endValue - startValue) * easeProgress;
      setDisplayValue(currentValue);
      
      if (progressPercent < 1) {
        requestAnimationFrame(animateValue);
      }
    };
    
    requestAnimationFrame(animateValue);
    
    return () => {};
  }, [value, duration]);
  
  return (
    <span 
      key={key}
      className={cn("inline-block overflow-hidden", className)}
    >
      <span className="animate-number-change inline-block">
        {formatter(displayValue)}
      </span>
    </span>
  );
};

export default AnimatedNumber;
