'use client'

import React, { useState, useEffect } from 'react';
import JSConfetti from 'js-confetti'; 


const NumberClick = () => {
  const [coordinates, setCoordinates] = useState<{ x: number | null; y: number | null }>({ x: null, y: null });
  const [clickCount, setClickCount] = useState(0); 
  const [numbers, setNumbers] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    const jsConfetti = new JSConfetti();

    const handleOnClick = (event:MouseEvent) => {
      const x = event.clientX;
      const y = event.clientY;
      setCoordinates({ x, y });
      setClickCount((prevCount) => prevCount + 1);
      setNumbers((prevNumbers) => [...prevNumbers, { x, y, id: prevNumbers.length + 1 }]);

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
      {numbers.map((number) => (
        <div key={number.id} style={{ position: 'absolute', top: number.y, left: number.x }}>
          80
        </div>
      ))}
      <div style={counterStyle}>
        click count: {clickCount}
      </div>
    </div>
  );
};

export default NumberClick;