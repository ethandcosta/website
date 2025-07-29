import React from "react";
import "../../ExperiencePage.css";
import python from "../../imgs/skills_icons/python.png";
import java from "../../imgs/skills_icons/java.png";
import azure from "../../imgs/skills_icons/azure.png";
import aws from "../../imgs/skills_icons/aws.png";
import github from "../../imgs/skills_icons/github.png";
import linux from "../../imgs/skills_icons/linux.png";
import docker from "../../imgs/skills_icons/docker.png";
import githubactions from "../../imgs/skills_icons/githubactions.png";
import windows from "../../imgs/skills_icons/windows.png";
import grafana from "../../imgs/skills_icons/grafana.png";

const icons = {
  python: python,
  Java: java,
  Azure: azure,
  AWS: aws,
  github: github,
  Linux: linux,
  "GitHub Actions": githubactions,
  Windows: windows,
  Docker: docker,
  Grafana: grafana
}

const ExperiencePage = ({ title, content }) => {
  return (
    <div className="experience-container">
      <h1 className="experience-title">{title}</h1>

      {content.map((item, index) => {
        if (item.type === "project") {
          return (
            <div key={index} className="project-card">
              <h2 className="project-title">{item.title}</h2>
              <p className="project-description">{item.description.trim()}</p>

              {item.skills && (
                <div className="skills-container">
                  {item.skills.map((skill, idx) => {
                    const icon = icons[skill];
                    return icon ? (
                      <div key={idx} className="skill-icon" title={skill}>
                        <img src={icon} alt={skill} title={skill} />
                      </div>
                    ) : (
                      <span key={idx} className="skill-badge">{skill}</span>
                    );
                  })}
                </div>
              )}
            </div>
          );
        }

        if (item.type === "image") {
          return (
            <div key={index} className="image-card">
              <img
                src={item.imageUrl}
                alt={item.caption || "Experience image"}
                className="experience-image"
              />
              {item.caption && (
                <div className="image-caption">{item.caption}</div>
              )}
            </div>
          );
        }

        return null;
      })}
    </div>
  );
};

export default ExperiencePage;
