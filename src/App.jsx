import { useState } from 'react'
import './styles.css'
import GitHubCalendar from 'react-github-calendar';
import Navbar from './Navbar';
import Images from './images';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <h1>Harrison Glennon Portfolio</h1>
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
      <GitHubCalendar username="BeansAreOk" /> {/* Documentation: https://grubersjoe.github.io/react-github-calendar/ */}
    </>
  )
}
export default App