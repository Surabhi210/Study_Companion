import { useState, useEffect } from 'react';
import Header from './components/Header';
import PomodoroTimer from './components/PomodoroTimer';
import Footer from './components/Footer';
import TaskList from './components/TaskList';
import Notes from './components/Notes/Notes';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  return (
    <div className={darkMode ? 'app dark' : 'app light'}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <TaskList />
      <PomodoroTimer />
      <Notes />
      <Footer />
    </div>
  );
}

export default App;