import React, { useEffect, useState } from 'react';
import '../Projects.css'; 
import SpaceBackground from './SpaceBackground';

const Projects = () => {
  useEffect(() => {
    const stations = document.querySelectorAll('.station');

    stations.forEach((station) => {
      const stationName = station.querySelector('.station-name');

      stationName.addEventListener('mouseover', (e) => {
        const description = station.querySelector('.station-description');
        if (description) {
          description.style.display = 'block';
        }
      });

      stationName.addEventListener('mouseout', () => {
        const description = station.querySelector('.station-description');
    if (description) {
      description.style.display = 'none';
    }
      });
    });

    return () => {
      stations.forEach((station) => {
        const stationName = station.querySelector('.station-name');
        stationName.removeEventListener('mouseover', () => {});
        stationName.removeEventListener('mouseout', () => {});
      });
    };
  }, []);

  const [activeStation, setActiveStation] = useState(null);
  const handleMouseEnter = (index) => {
    setActiveStation(index);
  }
  const handleMouseLeave = () => {
    setActiveStation(null);
  }

  const projects = [
    {
      name: "SEDS - University Rover Challenge",
      time: "Sept 2024 - Dec 2024",
      description: "An annual university competition to build a robot suited towards" +
      " a particular function, here being the navigation of Martian terrain.",
    },
    {
        name: "Northeastern Robotics: Robot Dog",
        time: "Sept 2024 - Dec 2024",
        description: "worked on the software team for a custom-built robot dog a la Boston Dynamics,"
        + " with emphasis on modernized repo through migration to ROS2."
    },
    {
      name: "Habit of Force",
      time: "Jan 2024 - Dec 2024",
      description: "A turn-based tactical RPG with a choice-driven story. As a space commander" +
      ", manage your resources and alliances wisely as the plot demonstrates the consequences of " +
      "pursuing a particular philosophy.",
    },
    {
        name: "Short Video Generator",
        time: "Dec 2023",
        description: "Automatically generates short-form video content scraped from Reddit into a" + 
        "familiar, mass-produced format using python and R.",
    },
    {
        name: "Qwirkle",
        time: "Sept 2023 - Dec 2023",
        description: "Java multiplayer implementation of Qwirkle, a turn-based tile-matching game. Distributed"
        + "over a TCP network with a player-agnostic REST-ful API that can be used to implement custom strategies."
    },
    {
        name: "Image Manipulator",
        time: "Aug 2022",
        description: "A rudimentary Photoshop-like image editing application that uses matrix operations"
        + "to apply filters."
    }
  ];

  return (
    <section>
      <h2>Projects</h2>
      <SpaceBackground />
      <div className="timeline-container">
        <div className="timeline">
          {projects.map((project, index) => (
            <div
              className={`station ${index % 2 === 0 ? "left" : "right"}`}
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="circle"></div>
              <div className="station-label">
                <p className="station-name">{project.name}</p>
                <p className="station-time">{project.time}</p>
                {activeStation === index && (
                  <div className="station-description">
                    <p>{project.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      
      </div>
    </section>
  );
};


export default Projects;
