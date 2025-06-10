import { FaRegEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import { Tooltip } from 'react-tooltip'


export default function Sidebar() {

  const email = "harrisongle@gmail.com";
  const subject = "";
  const message = "";

  return (
    <aside>
      <div>
        <h1>
          <a href="#about" style={{ color: "inherit", textDecoration: "none" }}>
            Harrison Glennon
          </a>
        </h1>        
        <h2>Aspiring Web Developer</h2>
        <p>I build fast, accessible, modern web experiences.</p>
      </div>
      <nav className="nav-links">
        <div className="mobile-remove">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </div>
      </nav>
      <div className="social-icons">
          <a 
            href="https://github.com/HGlennon" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub"
            data-tooltip-id="github-tooltip"
            data-tooltip-content="GitHub"
          >
            <FaGithub size={28} />
          </a>
          <a 
            href="https://www.linkedin.com/in/harrisonglennon/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn"
            data-tooltip-id="linkedin-tooltip"
            data-tooltip-content="LinkedIn"
          >
            <FaLinkedin size={28} />
          </a>
          <a 
            href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`}
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Email"
            data-tooltip-id="email-tooltip"
            data-tooltip-content="Message Me!"
          >
            <FaRegEnvelope size={28} />
          </a>
      </div>
      <Tooltip 
        id="github-tooltip" 
        place="bottom" 
        className="tooltip-style"
        delayShow={300}
        delayHide={100}
      />
      <Tooltip 
        id="linkedin-tooltip" 
        place="bottom" 
        className="tooltip-style" 
        delayShow={300}
        delayHide={100}
      />
      <Tooltip 
        id="email-tooltip" 
        place="bottom" 
        className="tooltip-style" 
        delayShow={300}
        delayHide={100}
      />
    </aside>
  );
}
