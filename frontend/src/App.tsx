import React, { useEffect } from 'react';
import './App.css';

const App = () => {

  useEffect(() => {
    fetch('/upload-recipe/success')
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-intro">
          <h2>JUG List</h2>
        </div>
      </header>
    </div>
  );
}

export default App;