import gmail from "../img/gmail-icon.png";
import linkedin from "../img/linkedin-icon.png";
import velog from "../img/velog-icon.jpg";

function Contact() {
  return (
    <div className="container">
      <div className="social">
        <a className="social-link" href="https://www.linkedin.com/in/youngcheol-lee/" target="_blank" rel="noreferrer">
          <img className="social-link" src={linkedin} alt="linkedin-icon"/></a>
        <a className="social-link" href="https://velog.io/@charlie-lyc" target="_blank" rel="noreferrer">
          <img className="social-link" src={velog} alt="velog-icon"/></a>
        <a className="social-link" href="https://www.gmail.com/" target="_blank" rel="noreferrer">
          <img className="social-link" src={gmail} alt="gmail-icon"/></a>
      </div>
    </div>
  );
}

export default Contact;