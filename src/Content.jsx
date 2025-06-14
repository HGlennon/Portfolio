import Images from './images';
import ProjectCard from './ProjectCard';
import HFMReduxImg from './assets/HFM_Redux.png';
import FoodMateImg from './assets/FoodMate.jpg';
import PortfolioImg from './assets/Portfolio.png';

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
        <ProjectCard
          title="HFM Redux"
          description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.."
          link="https://www.moddb.com/mods/hfm-redux"
          image = {HFMReduxImg}
        />
        <ProjectCard
          title="FoodMate"
          description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.."
          link="https://foodmate.dev"
          image = {FoodMateImg}
        />
        <ProjectCard
          title="Portfolio Website"
          description="In hac habitasse platea dictumst. Phasellus gravida semper nisi. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum."
          link="https://hglennon.dev"
          image = {PortfolioImg}
        />
      </section>
    </main>
  );
}
