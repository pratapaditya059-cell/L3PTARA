import { useState } from "react";
function IntroOverlay({ onEnter }) {
    const [leaving, setLeaving] = useState(false);

  function handleEnter() {
    setLeaving(true);

    setTimeout(() => {
      onEnter();
    }, 800);
  }

  return (
    <div className="intro-overlay">
      <div className="intro-content">
        <h1>L3PTARA</h1>

        <p className="intro-tagline">
          Explore DSA Beyond the List
        </p>

        <p className="intro-realms">
          Arrays • Trees • Graphs • Dynamic Programming
        </p>

        <button onClick={onEnter}>
          Enter the Realms
        </button>
      </div>
    </div>
  );
}

export default IntroOverlay;