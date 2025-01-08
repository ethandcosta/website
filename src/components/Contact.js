import SpaceBackground from "./SpaceBackground";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import "../Contact.css"

const Contact = () => (
  <section>
    <SpaceBackground />
    <h2>Contact Me</h2>
    <div className="contact-info">
      <p className="contact-item">
        <FontAwesomeIcon icon={faEnvelope} className="contact-icon"  />
        <a href="mailto:dcosta.e@northeastern.edu">dcosta.e@northeastern.edu</a>
      </p>
      <p className="contact-item">
        <FontAwesomeIcon icon={faGithub} className="contact-icon"  />
        <a href="https://github.com/ethandcosta">github.com/ethandcosta</a>
      </p>
      <p className="contact-item">
        <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
        <a href="https://linkedin.com/in/ethandcosta">linkedin.com/in/ethandcosta</a>
      </p>
    </div>
  </section>
);


export default Contact;
  