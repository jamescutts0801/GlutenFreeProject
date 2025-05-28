import React, { useEffect } from 'react';
import './App.css';
import TextField from './components/TextField';

const App = () => {

  useEffect(() => {
    fetch('/upload-recipe/success')
  }, []);

  return (
    <div>  
      <TextField></TextField>
      <TextField></TextField>
    </div>
  );
}

export default App;