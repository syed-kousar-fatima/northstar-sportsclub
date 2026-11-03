import { useState } from 'react';
import { GiSoccerBall } from 'react-icons/gi';
import useSplashScreen from '../hooks/useSplashScreen';

export default function SplashScreen() {
  const visible = useSplashScreen(3600);
  const [dismissed, setDismissed] = useState(false);

  if (!visible || dismissed) return null;

  return (
    <div className="splash-screen" role="status" aria-label="Loading Northstar Athletic Club">
      <div className="splash-rays" aria-hidden="true" />
      <GiSoccerBall className="splash-ball" aria-hidden="true" />
      <div className="splash-impact" aria-hidden="true" />
      <div className="splash-mark"><GiSoccerBall aria-hidden="true" /><span>+</span></div>
      <span className="splash-name" aria-label="Northstar">
        {'NORTHSTAR'.split('').map((letter, index) => <span key={`${letter}-${index}`} style={{ '--letter-index': index }}>{letter}</span>)}
      </span>
      <span className="splash-subname">ATHLETIC CLUB</span>
      <span className="splash-caption">A little more life in every day.</span>
      <button className="splash-skip" onClick={() => setDismissed(true)} aria-label="Skip intro">
        Skip intro
      </button>
    </div>
  );
}
