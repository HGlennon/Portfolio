import { useState } from 'react';
import './main.css';
import reactLogo from './assets/react.svg'
import muiLogo from './assets/mui.svg'
import javaScriptLogo from './assets/javaScript.svg'
import mySQLogo from './assets/mysql.svg'
import htmlLogo from './assets/html.svg'
import cssLogo from './assets/css.svg'
import crossIcon from './assets/cross.svg';

const techIcons = [
  { key: 'react', src: reactLogo, alt: 'React', link: 'react' },
  { key: 'mui', src: muiLogo, alt: 'MUI', link: 'mui' },
  { key: 'javascript', src: javaScriptLogo, alt: 'JavaScript', link: 'javascript' },
  { key: 'mysql', src: mySQLogo, alt: 'MySQL', link: 'mysql' },
  { key: 'html', src: htmlLogo, alt: 'HTML', link: 'html' },
  { key: 'css', src: cssLogo, alt: 'CSS', link: 'css' }
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

  const handleImageClick = (imageKey) => {
    setActiveImage(imageKey);
  };

  const closeSidebar = () => {
    setActiveImage(null);
  };
  return (
    <div>
      <div className='tech-icons'>
        {techIcons.map((icon, i) => icon.src ? (
          <div className="tech-icon-wrapper" key={i}>
            <img src={icon.src} alt={icon.alt || 'tech icon'} onClick={() => handleImageClick(icon.link)}/>
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
    </div>
  )
}
export default Images;