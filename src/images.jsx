import { useState } from 'react';
import './main.css';
import reactLogo from './assets/react.svg'
import muiLogo from './assets/mui.svg'
import javaScriptLogo from './assets/javaScript.svg'
import mySQLogo from './assets/mysql.svg'
import htmlLogo from './assets/html.svg'
import cssLogo from './assets/css.svg'
import crossIcon from './assets/cross.svg';

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
    <div style={{display: "flex"}}>
      <div>
        <img src={reactLogo} alt="React" className="imageStyle" onClick={() => handleImageClick("react")}/>
        <img src={javaScriptLogo} alt="JavaScript" className="imageStyle" onClick={() => handleImageClick("javascript")}/>
        <img src={htmlLogo} alt="HTML" className="imageStyle" onClick={() => handleImageClick("html")}/>
        <img src={muiLogo} alt="Material UI" className="imageStyle" onClick={() => handleImageClick("mui")}/>
        <img src={cssLogo} alt="CSS" className="imageStyle" onClick={() => handleImageClick("css")}/>
        <img src={mySQLogo} alt="MySQL" className="imageStyle" onClick={() => handleImageClick("mysql")}/>
    </div>

    {/* Consider making the design for when this pops up more responsive, shifts elements on screen to fit them in the program*/}
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