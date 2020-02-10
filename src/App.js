import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

import AddRecipe from "./components/add-recipe.component";
import EditRecipe from "./components/edit-recipe.component";
import RecipesList from "./components/recipe-list.component";

function App() {
  return (
    <Router>
       <div className="container">
            <nav id="nav"className="navbar navbar-dark bg-dark navbar-expand-lg  ">
              <Link to="/" className="navbar-brand">Lalitha's Kitchen</Link>
                <div className="collpase navbar-collapse">
                  <ul className="navbar-nav mr-auto ">
                    <li className="navbar-item">
                    <Link to="/add" className="nav-link">Add Recipe</Link>
                    </li>
                  </ul>
                </div>
             </nav>
            <br></br>
            
              <Route path="/" exact component={RecipesList} />
              <Route path="/edit/:id" component={EditRecipe} />
              <Route path="/add" component={AddRecipe} />
      </div>
    </Router>
  );
}

export default App;