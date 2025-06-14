import { useState, useEffect } from 'react';
import './main.css';
import { Tooltip } from 'react-tooltip';
import reactLogo from './assets/react.svg'
import muiLogo from './assets/mui.svg'
import javaScriptLogo from './assets/javaScript.svg'
import mySQLogo from './assets/mysql.svg'
import htmlLogo from './assets/html.svg'
import cssLogo from './assets/css.svg'
import crossIcon from './assets/cross.svg';
import cppLogo from './assets/cpp.svg';
import pythonLogo from './assets/python.png';
import linuxLogo from './assets/linux.png';
import laravelLogo from './assets/laravel.svg';

const techIcons = [
  { key: 'react', src: reactLogo, alt: 'React', link: 'react' },
  { key: 'mui', src: muiLogo, alt: 'MUI', link: 'mui' },
  { key: 'javascript', src: javaScriptLogo, alt: 'JavaScript', link: 'javascript' },
  { key: 'mysql', src: mySQLogo, alt: 'MySQL', link: 'mysql' },
  { key: 'html', src: htmlLogo, alt: 'HTML', link: 'html' },
  { key: 'css', src: cssLogo, alt: 'CSS', link: 'css' },
  { key: 'cpp', src: cppLogo, alt: 'C++', link: 'cpp' },
  { key: 'python', src: pythonLogo, alt: 'Python', link: 'python' },
  { key: 'linux', src: linuxLogo, alt: 'Linux', link: 'linux' },
  { key: 'laravel', src: laravelLogo, alt: 'Laravel', link: 'laravel' }
];

// Temporary, may change in the future for explanation on how I use these languages and frameworks
const imageWikiLinks = {
  css: "https://en.wikipedia.org/wiki/CSS",
  javascript: "https://en.wikipedia.org/wiki/JavaScript",
  react: "https://en.wikipedia.org/wiki/React_(software)",
  mui: "https://en.wikipedia.org/wiki/Material_Design",
  html: "https://en.wikipedia.org/wiki/HTML",
  mysql: "https://en.wikipedia.org/wiki/MySQL"
};

// Add Git, Github, and C++
function Images() {
  const [activeImage, setActiveImage] = useState(null);
  const [hoveredKey, setHoveredKey] = useState(null);

  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');
    if (!cursor) return;

    if (hoveredKey) {
      cursor.classList.add('hovered');
    } else {
      cursor.classList.remove('hovered');
    }
  }, [hoveredKey]);

  const handleImageClick = (imageKey) => {
    setActiveImage(imageKey);
  };

  const closeSidebar = () => {
    setActiveImage(null);
  };
  
  return (
    
    <div>
      <div className="tech-icons">
        {techIcons.map((icon, i) =>
          icon.src ? (
            <div className="tech-icon-wrapper" key={i}>
              <img
                src={icon.src}
                alt={icon.alt || 'tech icon'}
                tabIndex="0"
                onClick={() => handleImageClick(icon.link)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleImageClick(icon.link);
                  }
                }}
                data-tooltip-id={`tooltip-${icon.key}`}
                data-tooltip-content={icon.tooltip || icon.alt}
                onMouseEnter={() => setHoveredKey(icon.key)}
                onMouseLeave={() => setHoveredKey(null)}
                className={`tech-icon-img ${
                  hoveredKey && hoveredKey !== icon.key ? 'dimmed' : ''
                }`}
              />
            </div>
          ) : null
        )}
      </div>

    {/* Consider making the design for when this pops up more responsive, shifts elements on screen to fit them in the system*/}
    {activeImage && (
      <div className="sidebar">
        <div className="sidebar-close" onClick={closeSidebar}>
          <img src={crossIcon} alt="Close" className="close-icon"/>
        </div>
        <iframe
          title={`${activeImage} Wikipedia`}
          src={imageWikiLinks[activeImage]}>
        </iframe>
      </div>
    )}

    {techIcons.map((icon) => (
      <Tooltip
        key={`tooltip-${icon.key}`}
        id={`tooltip-${icon.key}`}
        place="bottom"
        className="tooltip-style"
        delayShow={300}
        delayHide={100}
      />
    ))}


    </div>
  )
}
export default Images;