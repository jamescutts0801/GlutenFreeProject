import React, { FormEvent, useState } from 'react'
import '../App.css';
import TextField from '../components/TextField';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddRecipe: React.FC = () => {
  const [formData, setFormData] = useState({
    recipeName: "",
    recipeMethod: ""
  });

  const navigate = useNavigate();

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  async function handleSubmit(this: any, e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    await axios({
      method: "post",
      url: "http://localhost:8080/upload-recipe",
      data: formData,
      headers: {
        'Content-Type': 'application/json'
      },
    });

    navigate('/');
  };

  return (
    <div className="page-center">
      <form onSubmit={handleSubmit}>
        <h3 className="form-title">Add a recipe</h3>
        <TextField
          type="text"
          label="Recipe name: "
          value={formData.recipeName}
          name="recipeName"
          onChange={handleInputChange}
          placeholder="Please enter your recipe's name"
        />
        <br/>
        <TextField
          type="text"
          label="Recipe Method: "
          value={formData.recipeMethod}
          name="recipeMethod"
          onChange={handleInputChange}
          placeholder="Please enter the method for your recipe"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
};

export default AddRecipe