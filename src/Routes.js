import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AddRecipe from "./components/add-recipe.component";
import EditRecipe from "./components/edit-recipe.component";
import RecipesList from "./components/recipe-list.component";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={RecipesList} />
        <Route path="/edit/:id" component={EditRecipe} />
        <Route path="/add" component={AddRecipe} />
      </Switch>
    </Router>
  );
};

export default Routes;
