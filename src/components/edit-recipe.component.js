import React, { Component } from "react";
import axios from "axios";
import Base from "./Base";
import "../App.css";

export default class EditRecipe extends Component {
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

  componentDidMount() {
    axios
      .get(
        "https://cryptic-lake-04404.herokuapp.com/recipes/" +
          this.props.match.params.id
      )
      .then((response) => {
        this.setState({
          name: response.data.name,
          recipe: response.data.recipe,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onChangeRecipeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeRecipeDescription(e) {
    this.setState({
      recipe: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const obj = {
      name: this.state.name,
      recipe: this.state.recipe,
    };

    axios
      .patch(
        "https://cryptic-lake-04404.herokuapp.com/recipes/" +
          this.props.match.params.id,
        obj
      )
      .then((res) => console.log(res.data));
    window.location = "/";
  }

  render() {
    return (
      <Base title="Update Recipe">
        <div className="col-md-8 offset-md-2">
          <div className="card ">
            <div className="card-header lead">
              <h3>Update Recipe</h3>
            </div>
            <div className="card-body">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Recipe Name : </label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.name}
                    onChange={this.onChangeRecipeName}
                  />
                </div>
                <div className="form-group">
                  <label>Recipe : </label>
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
                    value="Update Recipe"
                    className="btn btn-success"
                  />
                </div>
              </form>
              <br></br>
            </div>
          </div>
        </div>
      </Base>
    );
  }
}
