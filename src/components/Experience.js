import SpaceBackground from "./SpaceBackground";
import "../Experience.css"
import mideLogo from "../imgs/mide.png"
import stateStreetLogo from "../imgs/state_street.png"

const ExperienceCard = ({ position, company, img, dates, description }) => {
  return (
    <div className="experience-card">
      <div className="experience-header">
        <h3 className="position">{position}</h3>
        <div class="company-info">
          <img class="company-logo" src={img} alt="Company Logo" />
          <div class="company-details">
            <h4 className="company">{company}</h4>
            <p className="dates">{dates}</p>
          </div>
        </div> 
      </div>
      <div className="experience-description">
        <p>{description}</p>
      </div>
    </div>
  );
};

const Experience = () => (
    <section>
      <SpaceBackground />
      <h2>Experience</h2>
      <div class="experience-section">
      <ExperienceCard 
        position="Software Engineer"
        company="MIDE Technology"
        img =  {mideLogo}
        dates="Jan 2024 - Jul 2024"
        description = "At MIDE, I streamlined firmware updates for enDAQ devices by implementing secure XML-to-EBML payload encryption over USB, automated build processes for five internal projects using Docker and GitHub Actions, boosting efficiency by 35%, and developed a Python-based GUI application to automate accelerometer signal processing and testing."
      />
      <ExperienceCard 
      position = "Site Reliability Engineer"
      company = "State Street Corp"
      img = {stateStreetLogo}
      dates = "Jan 2023 - Jul 2023"
      description = "At State Street, I developed file-injection testing programs in Azure Chaos Studio to enhance server resiliency against security threats managing $4T in financial transactions and built a Python adapter to deserialize JSON chatbot requests into a Microsoft Teams-integrated dashboard."
      />
      </div>
    </section>
  );
  
  export default Experience;
  