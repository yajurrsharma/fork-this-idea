import React, { useState, useEffect } from 'react';
import './TerminalCard.css';

const Terminal = ({ shouldStartTyping, username, title }) => {
  const fullText = `${title}`;
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    if (shouldStartTyping) {
      setFadeIn(true); // trigger fade in
    }
  }, [shouldStartTyping]);

  useEffect(() => {
    if (shouldStartTyping && index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText.charAt(index));
        setIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [shouldStartTyping, index]);

  return (
    <div className={`card ${fadeIn ? 'fade-in' : ''}`}>
      <div className="wrap">
        <div className="terminal">
          <hgroup className="head">
            <p className="title">
              {/* ...icon... */}
              Terminal
            </p>
          </hgroup>
          <div className="body">
            <pre className="pre">
              <code>- </code>
              <code className="username">{username} / </code>
              <code className="cmd">
                {displayedText}
                <span className="cursor">|</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
