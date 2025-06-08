import Images from './images';

export default function Content() {
  return (
    <main className="content">
      <section id="about">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.</p>
        <p>In hac habitasse platea dictumst. Phasellus gravida semper nisi. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede.</p>
      </section>

      <section id="skills">
        <Images />
      </section>

      <section id="projects">
        <p>Here are some of the projects I have worked on:</p>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
      </section>
    </main>
  );
}
