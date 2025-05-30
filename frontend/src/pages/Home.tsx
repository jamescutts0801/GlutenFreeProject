import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {

  const [recipes, setRecipes] = useState([{
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
  })

  return (
    <div>
      <button><Link to="/add-recipe">Add Recipe</Link></button>
      <div>
        {recipes.map((recipe: { recipeName: string }) =>
          <div>
            {recipe.recipeName}
          </div>
        )}
      </div>
    </div>
  )
}

export default Home