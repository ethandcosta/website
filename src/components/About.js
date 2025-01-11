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
          I'm Ethan D'Costa, a recent graduate from Northeastern University, where I 
          majored in computer science and physics and minored in math. I'm passionate about
          leveraging my knowledge in software to make positive, tangible impacts on society through
          programs that can provide unique insights about data and can serve
          as a medium for creative expression.
        </p>
      </div>
      
    </section>
  );
  
  export default About;
  