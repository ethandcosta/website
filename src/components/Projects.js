import React, { useEffect } from 'react';
import '../Projects.css'; 

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
        tooltip.style.left = `${e.pageX + 10}px`;
        tooltip.style.top = `${e.pageY + 10}px`;
      });

      stationName.addEventListener('mouseout', () => {
        tooltip.style.display = 'none';
      });

      stationName.addEventListener('mousemove', (e) => {
        tooltip.style.left = `${e.pageX + 10}px`;
        tooltip.style.top = `${e.pageY + 10}px`;
      });
    });

    // Cleanup on component unmount
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
      <div className="timeline-container">
        <div className="timeline">
          <div className="station" data-info="Project 1: Created a portfolio website.">
            <div className="circle"></div>
            <p className="station-name">Portfolio Website</p>
          </div>
          <div className="station" data-info="Project 2: Developed a rover dashboard UI.">
            <div className="circle"></div>
            <p className="station-name">Rover Dashboard</p>
          </div>
          <div className="station" data-info="Project 3: Built a turn-based RPG in Unity.">
            <div className="circle"></div>
            <p className="station-name">Unity RPG</p>
          </div>
        </div>
        <div className="tooltip" id="tooltip"></div>
      </div>
    </section>
  );
};

export default Projects;
