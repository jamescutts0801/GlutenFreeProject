 import React from 'react';
 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 import Home from '../pages/Home';
 import AddRecipe from '../pages/AddRecipe';

 const AppRoutes: React.FC = () => (
   <Router>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/add-recipe" element={<AddRecipe />} />
     </Routes>
   </Router>
 );

 export default AppRoutes;