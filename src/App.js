import React, { useEffect, useState } from 'react';
import BlurText from './BlurText';
import Particles from './Particles';
import Terminal from './Terminal';
import './App.css';

function App() {
  const [moveToTop, setMoveToTop] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);
  const [ideas, setIdeas] = useState([]);

  const handleAnimationComplete = () => {
    setTimeout(() => {
      setMoveToTop(true);
      setTimeout(() => setShowTerminal(true), 1500);
    }, 500);
  };

  useEffect(() => {
    if (showTerminal) {
      fetch("https://8e867e63-b522-4f6f-9b74-de6c86132217-00-21vr9t2f9bfog.pike.replit.dev:3000/ideas") // replace with actual URL
        .then(res => res.json())
        .then(data => {
          if (data.ideas) setIdeas(data.ideas);
        })
        .catch(err => console.error("Failed to fetch ideas:", err));
    }
  }, [showTerminal]);

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
          className="fork-text"

        />
      </div>

      {showTerminal && (
        <div className="terminal-grid">
          {ideas.map((idea, index) => (
              <Terminal
                key={index}
                shouldStartTyping={true}
                username={idea.username}
                title={idea.title}
              />
            ))}

        </div>
      )}
    </div>
  );
}

export default App;
