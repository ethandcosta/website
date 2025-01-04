import React, { useEffect } from 'react';

const SpaceBackground = () => {
  useEffect(() => {
    const spaceBackground = document.getElementById('space-background');
    if (!spaceBackground) return;

    // Create Stars (Moving with Parallax)
    const createStar = () => {
      const star = document.createElement('div');
      const size = Math.random() * 3 + 1; // Random size between 1px and 4px
      star.className = 'star';
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.animationDuration = `${Math.random() * 5 + 3}s`; // Random twinkle duration
      spaceBackground.appendChild(star);

      // Remove star after animation ends
      const removeTimeout = setTimeout(() => {
        spaceBackground.removeChild(star);
        clearTimeout(removeTimeout);
      }, 8000); // Matches the maximum animation duration
    };

    // Create Static Planets
    const createPlanet = () => {
      const planet = document.createElement('div');
      const size = Math.random() * 50 + 20; // Random size between 20px and 70px
      planet.className = 'planet';
      planet.style.width = `${size}px`;
      planet.style.height = `${size}px`;
      planet.style.top = `${Math.random() * 80}vh`; // Random position
      planet.style.left = `${Math.random() * 80}vw`;
      planet.style.background = `radial-gradient(circle, rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1), black)`;
      spaceBackground.appendChild(planet);
    };

    // Create Shooting Stars with Randomized Directions
    const createShootingStar = () => {
      const shootingStar = document.createElement('div');
      shootingStar.className = 'shooting-star';

      // Randomize the starting and ending positions and angles
      const startX = Math.random() * 100; // Starting X position
      const startY = Math.random() * 100; // Starting Y position
      const endX = Math.random() * 100 + 100; // Ending X position
      const endY = Math.random() * 100 + 100; // Ending Y position

      // Randomize the angles for rotation
      const startAngle = Math.random() * 360; // Random starting angle
      const endAngle = Math.random() * 360; // Random ending angle

      shootingStar.style.setProperty('--start-x', `${startX}vw`);
      shootingStar.style.setProperty('--start-y', `${startY}vh`);
      shootingStar.style.setProperty('--end-x', `${endX}vw`);
      shootingStar.style.setProperty('--end-y', `${endY}vh`);
      shootingStar.style.setProperty('--start-angle', `${startAngle}deg`);
      shootingStar.style.setProperty('--end-angle', `${endAngle}deg`);

      spaceBackground.appendChild(shootingStar);

      // Remove shooting star after animation ends
      const removeTimeout = setTimeout(() => {
        spaceBackground.removeChild(shootingStar);
        clearTimeout(removeTimeout);
      }, 2000); // Matches the shooting star animation duration
    };

    // Listen for scroll events to create the parallax effect
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const stars = document.querySelectorAll('.star');
      const planets = document.querySelectorAll('.planet');
      
      // Adjust star positions based on scroll (parallax effect)
      stars.forEach((star) => {
        const speed = 0.5; // Adjust this value to control the parallax effect speed
        const starPosition = star.getBoundingClientRect();
        star.style.transform = `translateY(${scrollTop * speed}px)`;
      });

      // Planets remain static, no scrolling animation for them
      planets.forEach((planet) => {
       const speed = 0.5;
       const planetPosition = planet.getBoundingClientRect();
       planet.style.transform = `translateY(${scrollTop * speed}px)`;
      });
    };

    // Create stars, planets, and shooting stars
    const starInterval = setInterval(createStar, 300); // Adjusted to 300ms
    const shootingStarInterval = setInterval(createShootingStar, 5000); // Shooting star every 5 seconds
    const planetInterval = setInterval(createPlanet, 15000); // Planet every 15 seconds

    // Scroll event listener for parallax effect
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      clearInterval(starInterval);
      clearInterval(shootingStarInterval);
      clearInterval(planetInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div id="space-background" />;
};

export default SpaceBackground;
