import './Header.css';
import ThemeToggle from './ThemeToggle';

function Header({ darkMode, setDarkMode }) {
  return (
    <header className="header">
      <div className="logo">FocusForge</div>
      <div className="nav-wrapper">
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Reviews</li>
        </ul>
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </header>
  );
}

export default Header;
