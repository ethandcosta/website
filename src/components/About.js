import SpaceBackground from "./SpaceBackground";
import me from "../imgs/me.png"
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
          I'm Ethan D'Costa, a Software Engineer at Canonical 
          specializing in cloud infrastructure, container 
          orchestration, and Linux systems plumbing. I 
          graduated from Northeastern University with a 
          B.S. in Computer Science and Physics. Currently,
           my work focuses on hardening distributed systems, 
           optimizing Kubernetes integration, and building 
           low-level tooling that bridges the gap between 
           software execution and kernel primitives.
        </p>
      </div>
    </div>
  </section>
);

export default About;
