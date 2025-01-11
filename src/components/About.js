import SpaceBackground from "./SpaceBackground";
import me from "../imgs/me.JPG";
import "../About.css";

/* retest */
const About = () => (
  <section className="container py-5">
    <SpaceBackground />
    <h2 className="text-center mb-4">About Me</h2>


    <div className="my-profile row align-items-center"> 
      <div className="col-12 col-md-4 mb-4 mb-md-0">
        <img
          src={me}
          alt="profile pic"
          className="img-fluid rounded-circle shadow"
        />
      </div>
      <div className="col-12 col-md-8">
        <p className="lead">
          I'm Ethan D'Costa, a recent graduate from Northeastern University, where I
          majored in computer science and physics and minored in math. I'm passionate about
          leveraging my knowledge in software to make positive, tangible impacts on society through
          programs that can provide unique insights about data and can serve
          as a medium for creative expression.
        </p>
      </div>
    </div>
  </section>
);

export default About;
