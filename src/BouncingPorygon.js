import React, { useEffect, useState, useRef } from 'react';
import porygonImage from './assets/porygon.png';
import explosionImage from './assets/explosion.png'; // Explosion image

const BouncingPorygon = () => {
  const [porygons, setPorygons] = useState([]);

  useEffect(() => {
    const randomCount = 1 //Math.floor(Math.random() * (9 - 3 + 1)) + 3; // Random between 3 and 9
    setPorygons(Array.from({ length: randomCount }, createPorygon));
  }, []);

  const createPorygon = () => {
    const angle = Math.random() * Math.PI * 2; // Random angle
    return {
    id: Math.random(),
    x: Math.random() * (window.innerWidth - 50),
    y: Math.random() * (window.innerHeight - 50),
    dx: Math.cos(angle), // Convert angle to x velocity
    dy: Math.sin(angle), // Convert angle to y velocity
    hue: Math.random() * 360,
    exploding: false
  }};

  const speed = 50; // Pixels per second
  const hueSpeed = 50; // Hue change speed
  const requestRef = useRef(null);
  const previousTimeRef = useRef(null);

  useEffect(() => {
    const updatePositions = (time) => {
      if (previousTimeRef.current !== null) {
        const deltaTime = (time - previousTimeRef.current) / 1000; // Convert to seconds

        setPorygons(prevPorygons =>
          prevPorygons.map(porygon => {
            if (porygon.exploding) return porygon; // Skip exploding ones

            let newX = porygon.x + porygon.dx * speed * deltaTime;
            let newY = porygon.y + porygon.dy * speed * deltaTime;
            let newDx = porygon.dx;
            let newDy = porygon.dy;
            let newHue = (porygon.hue + hueSpeed * deltaTime) % 360; // Rotate colors

            // Ensure they stay inside the new window size
            if (newX < 0 || newX > window.innerWidth - 50) newDx *= -1;
            if (newY < 0 || newY > window.innerHeight - 50) newDy *= -1;

            return { ...porygon, x: Math.max(0, Math.min(newX, window.innerWidth - 50)), y: Math.max(0, Math.min(newY, window.innerHeight - 50)), dx: newDx, dy: newDy, hue: newHue };
          })
        );
      }

      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(updatePositions);
    };

    requestRef.current = requestAnimationFrame(updatePositions);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  // Adjust positions when window resizes
  useEffect(() => {
    const handleResize = () => {
      setPorygons(prevPorygons =>
        prevPorygons.map(porygon => ({
          ...porygon,
          x: Math.min(porygon.x, window.innerWidth - 50),
          y: Math.min(porygon.y, window.innerHeight - 50)
        }))
      );
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = (id) => {
    setPorygons(prevPorygons =>
      prevPorygons.map(porygon =>
        porygon.id === id ? { ...porygon, exploding: true } : porygon
      )
    );

    setTimeout(() => {
      setPorygons(prevPorygons =>
        prevPorygons.filter(porygon => porygon.id !== id).concat(createPorygon())
      );
    }, 500);
  };

  return (
    <>
      {porygons.map((porygon) => (
        <img
          key={porygon.id}
          src={porygon.exploding ? explosionImage : porygonImage}
          alt={porygon.exploding ? "Explosion" : "Bouncing Porygon"}
          onClick={() => handleClick(porygon.id)}
          style={{
            position: 'fixed',
            left: porygon.x,
            top: porygon.y,
            width: '50px',
            height: '50px',
            zIndex: '1',
            pointerEvents: 'auto',
            filter: porygon.exploding ? 'none' : `hue-rotate(${porygon.hue}deg)`, // No hue on explosion
            transition: porygon.exploding ? 'transform 0.3s ease, opacity 0.5s' : 'none',
            transform: porygon.exploding ? 'scale(2)' : 'scale(1)',
            opacity: porygon.exploding ? 0 : 1
          }}
        />
      ))}
    </>
  );
};

export default BouncingPorygon;
