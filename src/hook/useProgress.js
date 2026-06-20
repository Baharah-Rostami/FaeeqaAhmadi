import { useEffect, useRef, useState } from "react";

export function useProgressOnView(percentage, duration = 1200) {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const end = percentage;
          const increment = end / (duration / 16);

          const interval = setInterval(() => {
            start += increment;

            if (start >= end) {
              start = end;
              clearInterval(interval);
            }

            setWidth(start);
          }, 16);

          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [percentage, duration]);

  return { ref, width };
}