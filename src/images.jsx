import { useState, useEffect } from 'react';
import './main.css';
import { Tooltip } from 'react-tooltip';
import reactLogo from './assets/react.svg'
import muiLogo from './assets/mui.svg'
import javaScriptLogo from './assets/javaScript.svg'
import mySQLogo from './assets/mysql.svg'
import htmlLogo from './assets/html.svg'
import cssLogo from './assets/css.svg'
import cppLogo from './assets/cpp.svg';
import pythonLogo from './assets/python.svg';
import linuxLogo from './assets/linux.svg';
import laravelLogo from './assets/laravel.svg';
import typescriptLogo from './assets/typeScript.svg'
import nextjsLogo from './assets/nextjs.svg'

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
  { key: 'laravel', src: laravelLogo, alt: 'Laravel', link: 'laravel' },
  {key: 'typescript', src: typescriptLogo, alt: 'TypeScript', link: 'typescript'},
  {key: 'nextjs', src: nextjsLogo, alt: 'Next.js', link: 'nextjs'}
];

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