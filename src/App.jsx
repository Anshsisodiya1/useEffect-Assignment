import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [widthCount, setWidthCount] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidthCount(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  return (
    <div className="container">
      <p>
        Resize your browser window to see the dynamic updates in real-time!
      </p>
      <p>Current Window Width:</p>
      <h1>{widthCount}px</h1>
      <button onClick={() => alert('Great job!')}>Click Me!</button>
    </div>
  );
}

export default App;
