import { useState } from 'react'
import './main.css'
import GitHubCalendar from 'react-github-calendar';
import Navbar from './Navbar';
import Images from './images';

function App() {
  return (
    <>
      <Navbar />
      <header>
        <h1>Harrison Glennon Portfolio</h1>
      </header>

      <section className="about-me">
        <h2>About Me</h2>
        <p>
          Hello! My name is Harrison Glennon, and I am a software developer with a passion for creating innovative solutions. I have experience in various programming languages and frameworks, and I enjoy working on projects that challenge my skills and creativity.
        </p>
      </section>
      
      <section>
        <h2>My Skillset:</h2>
        <Images/>
      </section>

      <section>
        <h2>Projects</h2>
        <p>
          Here are some of the projects I have worked on:
        </p>
      </section>

      { /* Consider automating this process in a more efficient way by continously uploading these stats as SVG files*/}
      <section className="github-stats">
      <GitHubCalendar username="HGlennon" /> {/* Documentation: https://grubersjoe.github.io/react-github-calendar/ */}
      <img 
        src="https://github-readme-stats.vercel.app/api?username=HGlennon&show_icons=true&hide_border=true&theme=github_dark"
        alt="GitHub Stats"
      />
      <img
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=HGlennon&layout=compact&hide_border=true&theme=github_dark"
        alt="Top Languages"
      />
      <img
        src="https://github-readme-streak-stats.herokuapp.com/?user=HGlennon&hide_border=true&theme=github_dark"
        alt="Streak Stats"
      />
      </section>

      <section className='contact'>
        <h2>Contact Me</h2>
      </section>
    </>
  )
}
export default App