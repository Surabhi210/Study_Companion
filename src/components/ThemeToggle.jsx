import './Header.css';

function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <div className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? '🌙 Dark' : '🦁 Light'}
    </div>
  );
}

export default ThemeToggle;
