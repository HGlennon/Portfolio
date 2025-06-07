import { useTheme } from './theme';

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();

    return <nav className="nav">
        <a href="/" className="site-title">Site Name</a>
        <ul>
            <li>
                <a href="/about">About</a>
                <a href="/skillset">My Skillset</a>
            </li>
        </ul>
        <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? '🌙' : '🌞'}
        </button>    
      </nav>
}