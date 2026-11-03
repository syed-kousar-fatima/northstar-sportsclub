import { useEffect, useState } from 'react';

export default function useSplashScreen(duration = 1050) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), duration);
    return () => window.clearTimeout(timer);
  }, [duration]);

  return visible;
}
