'use client'

import React, { useState, useEffect } from 'react';
import JSConfetti from 'js-confetti'; 


const NumberClick = () => {
  const [coordinates, setCoordinates] = useState<{ x: number | null; y: number | null }>({ x: null, y: null });
  const [clickCount, setClickCount] = useState(0); 

  useEffect(() => {
    const jsConfetti = new JSConfetti();

    const handleOnClick = (event:MouseEvent) => {
      const x = event.clientX;
      const y = event.clientY;
      setCoordinates({ x, y });
      setClickCount((prevCount) => prevCount + 1);

      jsConfetti.addConfetti({
        emojis: ['🍣','🦄'],
        emojiSize: 100,
        confettiNumber: 30,
      });
    };


    document.addEventListener('click', handleOnClick);

    return () => {
      document.removeEventListener('click', handleOnClick);
    };
  }, []);

  const counterStyle: React.CSSProperties = {
    position: 'fixed',
    top: '20px',
    right: '20px', 
    color: 'white',
    backgroundColor: 'rgba(256, 100, 180, 0.5)',
    padding: '5px 10px',
    borderRadius: '5px',
  };

  return (
    <div style={{ position: 'absolute', top: 0, left: 0 }}>
      {coordinates.x !== null && coordinates.y !== null && (
        <div style={{ position: 'absolute', top: coordinates.y, left: coordinates.x }}>
          80
        </div>
      )}
      <div style={counterStyle}>
        click count: {clickCount}
      </div>
    </div>
  );
};

export default NumberClick;