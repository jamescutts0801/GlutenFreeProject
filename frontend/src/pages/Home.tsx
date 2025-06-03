import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RecipeField from '../components/RecipeField';

const Home: React.FC = () => {

  const [recipes, setRecipes] = useState([{
    id: "",
    recipeName: "",
    recipeMethod: ""
  }]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/recipes",
    }).then(res => {
      setRecipes(res.data)
    });
  }, [])

  return (
    <div>
      <button><Link to="/add-recipe">Add Recipe</Link></button>
      <div>
        {recipes.map((recipe: { id:string, recipeName: string }) =>
          <div key ={recipe.id}>
            <RecipeField label={recipe.recipeName}></RecipeField>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home