import React, { useState } from 'react';
import BlurText from './BlurText';
import Particles from './Particles';
import Terminal from './Terminal'; // import terminal
import './App.css';

function App() {
  const [moveToTop, setMoveToTop] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);

  const handleAnimationComplete = () => {
    setTimeout(() => {
      setMoveToTop(true);
      setTimeout(() => setShowTerminal(true), 1500); // delay to match CSS transition
    }, 500); // optional delay
  };

  return (
    <div className="App">
      <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
        className="particles-bg"
      />

      <div className={`text-wrapper ${moveToTop ? 'float-up' : ''}`}>
        <BlurText
          text="Fork This Idea"
          delay={600}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-2xl mb-8"
        />
      </div>

      {showTerminal && (
        <div className="terminal-container">
          <Terminal shouldStartTyping={showTerminal} />
        </div>
      )}
    </div>
  );
}

export default App;
