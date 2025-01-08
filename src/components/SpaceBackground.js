import React, { useEffect, useRef, useState } from 'react';

const SpaceBackground = () => {
  const spaceRef = useRef(null);
  const [planets, setPlanets] = useState([]);
  const planetQueueRef = useRef([]);
  const isCreatingPlanetRef = useRef(false);
  const isCreatingShootingStarRef = useRef(false);

  useEffect(() => {
    const spaceBackground = spaceRef.current;
    if (!spaceBackground) return;

    const MAX_PLANETS = 5;
    const existingPlanets = [];

    const createStar = () => {
      const star = document.createElement('div');
      const size = Math.random() * 3 + 1;
      star.className = 'star';
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.animationDuration = `${Math.random() * 5 + 3}s`;
      spaceBackground.appendChild(star);

      setTimeout(() => {
        spaceBackground.removeChild(star);
      }, 8000);
    };

    const createPlanet = () => {
      if (planets.length >= MAX_PLANETS || isCreatingPlanetRef.current) return;

      planetQueueRef.current.push(true);
      if (planetQueueRef.current.length === 1) processPlanetQueue();
    };

    const processPlanetQueue = () => {
      if (planetQueueRef.current.length === 0) return;
      isCreatingPlanetRef.current = true;

      let retries = 0;
      const MAX_RETRIES = 10;

      const attemptPlanetCreation = () => {
        if (retries >= MAX_RETRIES) {
          isCreatingPlanetRef.current = false;
          planetQueueRef.current.shift();
          if (planetQueueRef.current.length > 0) {
            setTimeout(processPlanetQueue, 1000);
          }
          return;
        }

        const size = Math.random() * 50 + 20;
        const top = Math.random() * 80;
        const left = Math.random() * 80;

        const overlap = existingPlanets.some(([existingTop, existingLeft, existingSize]) => {
          const distance = Math.sqrt(
            Math.pow(top - existingTop, 2) + Math.pow(left - existingLeft, 2)
          );
          return distance < (size + existingSize) / 2 + 10;
        });

        if (overlap) {
          retries++;
          requestAnimationFrame(attemptPlanetCreation);
        } else {
          const newPlanet = {
            size,
            top,
            left,
            color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
          };
          setPlanets(prevPlanets => [...prevPlanets, newPlanet]);
          existingPlanets.push([top, left, size]);

          isCreatingPlanetRef.current = false;
          planetQueueRef.current.shift();
          if (planetQueueRef.current.length > 0) {
            setTimeout(processPlanetQueue, 1000);
          }
        }
      };

      attemptPlanetCreation();
    };

    const createShootingStar = () => {
      if (isCreatingShootingStarRef.current) return;
      isCreatingShootingStarRef.current = true;

      const shootingStar = document.createElement('div');
      shootingStar.className = 'shooting-star';

      const startX = Math.random() * 100;
      const startY = Math.random() * 100;
      const endX = Math.random() * 100 + 100;
      const endY = Math.random() * 100 + 100;
      const startAngle = Math.random() * 360;
      const endAngle = Math.random() * 360;

      shootingStar.style.setProperty('--start-x', `${startX}vw`);
      shootingStar.style.setProperty('--start-y', `${startY}vh`);
      shootingStar.style.setProperty('--end-x', `${endX}vw`);
      shootingStar.style.setProperty('--end-y', `${endY}vh`);
      shootingStar.style.setProperty('--start-angle', `${startAngle}deg`);
      shootingStar.style.setProperty('--end-angle', `${endAngle}deg`);

      spaceBackground.appendChild(shootingStar);

      setTimeout(() => {
        spaceBackground.removeChild(shootingStar);
        isCreatingShootingStarRef.current = false;
      }, 2000);
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const stars = document.querySelectorAll('.star');
      const planetElements = document.querySelectorAll('.planet');
      
      stars.forEach((star) => {
        const speed = 0.5;
        star.style.transform = `translateY(${scrollTop * speed}px)`;
      });

      planetElements.forEach((planet) => {
        const speed = 0.5;
        planet.style.transform = `translateY(${scrollTop * speed}px)`;
      });
    };

    const starInterval = setInterval(createStar, 300);
    const planetInterval = setInterval(createPlanet, 5000);
    const shootingStarInterval = setInterval(createShootingStar, 5000);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(starInterval);
      clearInterval(planetInterval);
      clearInterval(shootingStarInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [planets]);

  return (
    <div id="space-background" ref={spaceRef}>
      {planets.map((planet, index) => (
        <div
          key={index}
          className="planet"
          style={{
            width: `${planet.size}px`,
            height: `${planet.size}px`,
            top: `${planet.top}vh`,
            left: `${planet.left}vw`,
            background: `radial-gradient(circle, ${planet.color}, black)`
          }}
        />
      ))}
    </div>
  );
};

export default SpaceBackground;
