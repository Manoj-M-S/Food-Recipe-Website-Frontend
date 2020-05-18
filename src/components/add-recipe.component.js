import React, { Component } from "react";
import axios from "axios";
import Base from "./Base";
import "../App.css";

export default class AddRecipe extends Component {
  constructor(props) {
    super(props);

    this.onChangeRecipeDescription = this.onChangeRecipeDescription.bind(this);
    this.onChangeRecipeName = this.onChangeRecipeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      recipe: "",
    };
  }

  onChangeRecipeDescription(e) {
    this.setState({
      recipe: e.target.value,
    });
  }

  onChangeRecipeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Recipe submitted:`);
    console.log(`Recipe Description: ${this.state.recipe}`);
    console.log(`Recipe Name: ${this.state.name}`);

    const newRecipe = {
      recipe: this.state.recipe,
      name: this.state.name,
    };
    axios
      .post("https://cryptic-lake-04404.herokuapp.com/recipes", newRecipe)
      .then((res) => console.log(res.data));

    this.setState({
      recipe: "",
      name: "",
    });
    alert("Recipe Added Successfully");
  }

  render() {
    return (
      <Base title="Add Recipe">
        <div className="col-md-8 offset-md-2">
          <div className="card ">
            <div className="card-header lead">
              <h3>Add New Recipe</h3>
            </div>
            <div className="card-body">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Recipe Name: </label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.name}
                    onChange={this.onChangeRecipeName}
                  />
                </div>
                <div className="form-group">
                  <label>Recipe: </label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.recipe}
                    onChange={this.onChangeRecipeDescription}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="submit"
                    value="Add Recipe"
                    className="btn btn-success"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </Base>
    );
  }
}
