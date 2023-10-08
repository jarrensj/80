'use client'

import React, { useState, useEffect } from 'react';

const NumberClick = () => {
  const [coordinates, setCoordinates] = useState<{ x: number | null; y: number | null }>({ x: null, y: null });

  useEffect(() => {
    const handleOnClick = (event:MouseEvent) => {
      const x = event.clientX;
      const y = event.clientY;
      setCoordinates({ x, y });
    };

    document.addEventListener('click', handleOnClick);

    return () => {
      document.removeEventListener('click', handleOnClick);
    };
  }, []);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0 }}>
      {coordinates.x !== null && coordinates.y !== null && (
        <div style={{ position: 'absolute', top: coordinates.y, left: coordinates.x }}>
          80
        </div>
      )}
    </div>
  );
};

export default NumberClick;