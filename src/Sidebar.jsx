import { FaRegEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import { Tooltip } from 'react-tooltip'
import { useState, useEffect } from "react";

export default function Sidebar() {
  const [activeLink, setActiveLink] = useState("about");

  const email = "harrisongle@gmail.com";
  const subject = "";
  const message = "";

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));

    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      let foundSection = false;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const offsetTop = section.offsetTop;
        const offsetHeight = section.offsetHeight;

        if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
          setActiveLink((prev) => (prev === section.id ? prev : section.id));
          foundSection = true;
          break;
        }
      }

      if (!foundSection && window.scrollY < 100) {
        setActiveLink((prev) => (prev === "about" ? prev : "about"));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // run once on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (sectionId) => {
    setActiveLink(sectionId);
    
    if (sectionId === "about") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        const yOffset = -80;
        const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  return (
    <aside>
      <div>
        <h1 className="title">
          <a 
            href="#" 
            onClick={(e) => {e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth'})}} 
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Harrison Glennon
          </a>
        </h1>        
        <h2 className="title">Aspiring Web Developer</h2>
        <p>I create accessible, user friendly websites online.</p>
      </div>
      <nav className="nav-links">
        {[
          { id: "about", label: "ABOUT" },
          { id: "skills", label: "SKILLSET" },
          { id: "projects", label: "PROJECTS" },
        ].map(({ id, label }) => (
          <button
            key={id}
            onClick={() => handleNavClick(id)}
            className={`nav-button ${activeLink === id ? "active" : ""}`}
          >
            <span className="nav-label">{label}</span>          
          </button>
        ))}
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
            <FaGithub size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/harrisonglennon/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn"
            data-tooltip-id="linkedin-tooltip"
            data-tooltip-content="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a 
            href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`}
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Email"
            data-tooltip-id="email-tooltip"
            data-tooltip-content="Message Me!"
          >
            <FaRegEnvelope size={24} />
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
