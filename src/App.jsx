import { useState, useEffect } from 'react';

export default function App() {
  const [theme, setTheme] = useState('light');

  
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggle = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));

  return (
    <div id="app">
      <h1>Dark &amp; Light</h1>
      <button onClick={toggle}>
        Switch to {theme === 'dark' ? 'light' : 'dark'} mode
      </button>
    </div>
  );
}
