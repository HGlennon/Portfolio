import Images from './images';
import ProjectCard from './ProjectCard';

import { HiOutlineDownload, HiStar } from "react-icons/hi";

// The quick brown fox jumped over the lazy dog
export default function Content() {
  return (
    <main className="content">
      <div id='top'></div>
      <section id="about">
        <div className="mobile-only">
          <h2>ABOUT</h2>
        </div>
        <p>
          I am a web developer who has a strong interest in creating accessible and fast performing applications for users. I am currently a third year student at the University of Lincoln, and I have built up a strong foundation in modern web technologies through both my academic work as well as my personal projects.
        </p>
        <p>
          My interest in web development grew significantly during the creation of my dissertation project, <strong>FoodMate</strong>, which is an accessible, health-oriented recipe website that is designed to be inclusive for all users. This project not only sharpened my frontend skills, but also earned a first-class grade for the quality of the site as well as its report.
        </p>
        <p>
          I have approximately <strong>8 months of Frontend experience</strong> through my dissertation, as well as freelance projects. I am proficient in technologies such as <strong>React, JavaScript, HTML5 and CSS3</strong>, and version control with <strong>Git</strong> as well as collaborating in team settings via <strong>Github repositories</strong>.
        </p>
        <p>
          I'm a strong advocate for web accessibility and performance, often rigorously testing and optimising my projects to ensure they run efficiently across as many devices and accessibility tools as possible. I also enjoy learning new tools and frameworks, especially Next.js and TypeScript, which I have been experimenting with in order to broaden my tech stack.
        </p>
        <p>
          Outside of coding, I'm usually playing video games, socialising with friends, researching history, and going to the gym. 
        </p>
      </section>

      <section id="skills">
        <div className="mobile-only">
          <h2>SKILLSET</h2>
        </div>
        <Images />
      </section>

      <section id="projects">
        <div className="mobile-only">
          <h2>PROJECTS</h2>
        </div>
        <div className='project-card-wrapper'>
          <ProjectCard
            title="HFM Redux"
            description="A mod for Victoria 2 which adds more features, historical fixes and QoL changes to the game. Received considerable success amongst the modding community for its new features. "
            link="https://www.moddb.com/mods/hfm-redux"
            image = "HFM_Redux.png"
            meta = {
              <>
                <HiOutlineDownload size={16}/>
                <span className="project-span">4.6k+ downloads</span>
              </>
            }
          />
          <ProjectCard
            title="FoodMate"
            description="An accessible, health-oriented recipe search website powered by React, MUI, and Edamam API. Made as part of a dissertation during my studies at the university of Lincoln."
            link="https://foodmate.dev"
            image = "FoodMate.jpg"
            meta = {
              <>
                <HiStar size={16}/>
                <span className="project-span">1</span>
              </>
            }
          />
          <ProjectCard
            title="Portfolio"
            description="A personal website that was created to demonstrate my current progress in web development and technologies I have learnt so far, and you're looking at it right now!"
            link="https://hglennon.dev"
            image = "Portfolio.png"
            meta = {
              <>
                <HiStar size={16}/>
                <span className="project-span">1</span>
              </>
            }
          />
          <ProjectCard
            title="Raisin"
            description="Raisin is a theme that was created for VS Code and gives a dark purple shade to the editor. This theme was primarily made to both reduce screen glare whilst also being very visually appealing."
            link="https://marketplace.visualstudio.com/items?itemName=HGlennon.raisin"
            image = "Raisin.png"
            meta = {
              <>
                <HiStar size={16}/>
                <span className="project-span">1</span>
              </>
            }
          />
        </div>
      </section>
    </main>
  );
}
