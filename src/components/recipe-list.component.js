import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Base from "./Base";
import "../App.css";
import { API } from "../Backend";

const Recipe = (props) => (
  <div>
    <div className="card ">
      <div className="card-header lead">
        <h4>
          <b>Recipe Name : </b>
          {props.recipe.name}
        </h4>
      </div>
      <div className="card-body">
        <h4>
          <b>Recipe : </b>
        </h4>
        <h5> {props.recipe.recipe} </h5>
        <br></br>
        <button className="btn btn-light">
          <Link to={"/edit/" + props.recipe._id}>Edit</Link>
        </button>
        <div style={{ float: "right" }}>
          <button
            className="btn btn-danger "
            onClick={() => {
              if (window.confirm("Are You Sure ?")) {
                props.deleteRecipe(props.recipe._id);
              }
            }}
          >
            delete
          </button>
        </div>
      </div>
    </div>
    <div>
      <br></br>
    </div>
  </div>
);

export default class RecipesList extends Component {
  constructor(props) {
    super(props);
    this.deleteRecipe = this.deleteRecipe.bind(this);
    this.state = { recipes: [] };
  }

  componentDidMount() {
    axios
      .get(`${API}/recipes`)
      .then((res) => {
        this.setState({ recipes: res.data });
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteRecipe(id) {
    axios.delete(`${API}/recipes/` + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      recipes: this.state.recipes.filter((el) => el._id !== id),
    });
  }

  recipeList() {
    return this.state.recipes.map((currentrecipe) => {
      return (
        <Recipe
          recipe={currentrecipe}
          deleteRecipe={this.deleteRecipe}
          key={currentrecipe._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <Base title="Welcome To Lalitha's Kitchen">
          <div className="lined-heading">
            <h2>Our Recipes</h2>
          </div>
          <div className="col-md-8 offset-md-2">{this.recipeList()}</div>
        </Base>
      </div>
    );
  }
}
