import React, { ChangeEvent, FormEvent, useState } from 'react'
import './App.css';
import TextField from './components/TextField';
import axios from 'axios';

const App: React.FC = () => {
  const [name, setName] = useState('')
  const [error, setError] = useState(false)

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!name.trim()) {
      setError(true)
    } else {
      setError(false)
    }

    await axios({
      method: "post",
      url: "http://localhost:8080/upload-recipe",
      data: name,
      headers: {
        Accept: "application/json ,text/plain, */*"
      },
    });
  }

  return (
    <div className="page-center">
      <form onSubmit={handleSubmit}>
        <h3 className="form-title">Add a recipe</h3>
        <TextField
          type="text"
          label="Recipe name: "
          value={name}
          name="recipeName"
          error={error}
          onChange={handleNameChange}
          placeholder="Please enter your recipe's name"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App