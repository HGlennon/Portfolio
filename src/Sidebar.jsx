import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Sidebar() {
  return (
    <aside>
      <div>
        <h1>Harrison Glennon</h1>
        <h2>Aspiring Web Developer</h2>
        <p>I build fast, accessible, modern web experiences.</p>
      </div>
      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact Me</a>
      </nav>
      <div className="social-icons">
          <a href="https://github.com/HGlennon" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={28} />
          </a>
          <a href="https://www.linkedin.com/in/harrisonglennon/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={28} />
        </a>
      </div>
    </aside>
  );
}
