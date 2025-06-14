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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.</p>
        <p>In hac habitasse platea dictumst. Phasellus gravida semper nisi. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede.</p>
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
