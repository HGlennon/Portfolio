import { useState } from 'react'
import './main.css'
import GitHubCalendar from 'react-github-calendar';
import Navbar from './Navbar';
import Images from './images';

// Remember to move this project to continous deployment netlify
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <h1>Harrison Glennon Portfolio</h1>
      <div className="about-me">
        <h2>About Me</h2>
        <p>
          Hello! My name is Harrison Glennon, and I am a software developer with a passion for creating innovative solutions. I have experience in various programming languages and frameworks, and I enjoy working on projects that challenge my skills and creativity.
        </p>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          decrement
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <p>
          ADD GITHUB CONTRIBUTION LIST, LIST OF PROJECTS, WHATNOT
        </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </div>
      <div>
        <p>
          My Skillset:
        </p>
        <Images/>
      </div>
      <div>
        <p>
          My Projects
        </p>
      </div>
      <GitHubCalendar username="HGlennon" /> {/* Github Calendar Documentation: https://grubersjoe.github.io/react-github-calendar/ */}
      {/* Add a section to send name, your email, and a message that goes to my email account*/}
      <p>
        Contact Me
      </p>
    </>
  )
}
export default App