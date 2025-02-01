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
      name: "AI News Sentiment Stock Predictor",
      time: "Jul 2024 - Aug 2024",
      description: "an application that could take a given stock, determine its historical sentiment"
      + " and correlate it with the stock-price, using gradient boosting and LSTM to predict future stock prices."
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
        " familiar, mass-produced format using python and R.",
    },
    {
        name: "Qwirkle",
        time: "Sept 2023 - Dec 2023",
        description: "Java multiplayer implementation of Qwirkle, a turn-based tile-matching game. Distributed"
        + " over a TCP network with a player-agnostic REST-ful API that can be used to implement custom strategies."
    },
    {name: "Treeman Begins",
      time: "Feb 2023",
      description: "Made in 24hrs for Microgame Jam 2023, a short platformer programmed in GDScript using the Godot game engine." +
      " Join Treeman, a half-tree, half-man monstrosity determined to find his family roots."
    },
    {
      name: "A Call From Under the House",
      time: "Oct 2022",
      description: "Made in 24hrs for Spook Jam 2022, a Unity-based puzzle/exploration horror game soon to be published on Steam."
      + " Investigate paranormal activities that plague a Massachusetts house to uncover secrets about a local town's sordid past."
    },
    {
        name: "Image Manipulator",
        time: "Aug 2022",
        description: "A rudimentary Photoshop-like image editing application that uses matrix operations"
        + " to apply filters."
    },
    {
      name: "Northeastern Robotics: Robot Arm",
      time: "Sept 2021 - May 2022",
      description: "worked on a small team developing innovative, affordable prostethic arms for amputees. Developed code that"+
      " syncronized the movement of servos using Arduino and Python to recreate palmar movement."
    }
  ];

  return (
    <section className = "py-5">
      <h2 className="text-center mb-5">Projects</h2>
      <SpaceBackground />
      <div className="timeline-container position-relative">
        <div className="timeline">
          {projects.map((project, index) => (
            <div
              className={`station ${index % 2 === 0 ? "left" : "right"}`}
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="circle d-flex justify-content-center align-items-center"></div>
              <div className="station-label">
                <p className="station-name fs-5 fw-bold">{project.name}</p>
                <p className="station-time text-muted">{project.time}</p>
                {activeStation === index && (
                  <div className="station-description mt-2">
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
