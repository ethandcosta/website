import SpaceBackground from "./SpaceBackground";
import me from  "../imgs/me.JPG"
import "../About.css"
/* retest*/
const About = () => (
    <section>
      <SpaceBackground />
      <h2>About Me</h2>
      <div className="profile">
        <img src={me} alt="profile pic" width="300" height="400"/>
        <p>
          I'm Ethan D'Costa, a computer science and physics student passionate about 
          creating accessible and innovative software solutions.
        </p>
      </div>
      
    </section>
  );
  
  export default About;
  