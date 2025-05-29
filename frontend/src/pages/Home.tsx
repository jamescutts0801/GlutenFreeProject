import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
    <div>
     <h1>Home Page</h1>
     <p>Welcome to the Home Page!</p>
     <button><Link to="/add-recipe">Add Recipe</Link></button>
   </div>
    )
}

export default Home