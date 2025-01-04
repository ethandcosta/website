import React, { useEffect } from 'react';
import '../Projects.css'; 
import SpaceBackground from './SpaceBackground';

const Projects = () => {
  useEffect(() => {
    const stations = document.querySelectorAll('.station');
    const tooltip = document.getElementById('tooltip');

    stations.forEach((station) => {
      const stationName = station.querySelector('.station-name');

      stationName.addEventListener('mouseover', (e) => {
        const info = station.getAttribute('data-info');
        tooltip.textContent = info;
        tooltip.style.display = 'block';
        tooltip.style.opacity = '1';
        tooltip.style.left = `${e.pageX}px`;
        tooltip.style.top = `${e.pageY - 20}px`;
      });

      stationName.addEventListener('mouseout', () => {
        tooltip.style.display = 'none';
        tooltip.style.opacity = '0';
      });

      stationName.addEventListener('mousemove', (e) => {
        tooltip.style.left = `${e.pageX}px`;
        tooltip.style.top = `${e.pageY - 20}px`;
      });
    });

    return () => {
      stations.forEach((station) => {
        const stationName = station.querySelector('.station-name');
        stationName.removeEventListener('mouseover', () => {});
        stationName.removeEventListener('mouseout', () => {});
        stationName.removeEventListener('mousemove', () => {});
      });
    };
  }, []);

  return (
    <section>
      <h2>Projects</h2>
      <SpaceBackground />
      <div className="timeline-container">
        <div className="timeline">
          <div className="station" data-info="Created a portfolio website with React.">
            <div className="circle"></div>
            <div className="station-label">
              <p className="station-name">Portfolio Website</p>
              <p className="station-time">Jan 2023 - Feb 2023</p>
            </div>
          </div>
          <div className="station" data-info="Developed a rover dashboard UI with React.">
            <div className="circle"></div>
            <div className="station-label">
              <p className="station-name">Rover Dashboard</p>
              <p className="station-time">Mar 2023 - Apr 2023</p>
            </div>
          </div>
          <div className="station" data-info="Built a turn-based RPG in Unity with C#.">
            <div className="circle"></div>
            <div className="station-label">
              <p className="station-name">Unity RPG</p>
              <p className="station-time">May 2023 - Jul 2023</p>
            </div>
          </div>
        </div>
        <div className="tooltip" id="tooltip"></div>
      </div>
    </section>
  );
};

export default Projects;
