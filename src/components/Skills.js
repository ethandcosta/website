import { FaJava, FaPython, FaReact } from "react-icons/fa";
import SpaceBackground from "./SpaceBackground";

const Skills = () => (
  <section>
    <SpaceBackground />
    <h2>Skills</h2>
    <div className="contact-info">
      <FaJava size={50} />
      <FaPython size={50} />
      <FaReact size={50} />
      {/* Add more skills */}
    </div>
  </section>
);

export default Skills;
