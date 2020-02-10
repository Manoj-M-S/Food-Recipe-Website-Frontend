import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

const Recipe = props => (
<div>
<div className ="card">
  <div className="card-body">
      <h4><b>Recipe Name : </b>{props.recipe.name} </h4><br></br>
      <h4><b>Recipe : </b></h4> <h5> {props.recipe.recipe} </h5><br></br>
      <button className="btn btn-light"><Link to={"/edit/"+props.recipe._id} >Edit</Link></button> | <button className= "btn btn-danger" onClick={() => {props.deleteRecipe(props.recipe._id) }}>delete</button> 
  </div>
 </div>
 <div>
  <br></br>
 </div>
</div>

 

)


export default class RecipesList extends Component {
  constructor(props) {
    super(props);
    this.deleteRecipe = this.deleteRecipe.bind(this)
    this.state = {recipes: []};
  }

  componentDidMount() {
    axios.get('https://cryptic-lake-04404.herokuapp.com/recipes/')
      .then(res =>  {
        this.setState({ recipes: res.data });
        console.log(res.data)
        
      })
      .catch((error) => {
        console.log(error);
      })

  }
  

  deleteRecipe(id) {
    alert("Are you sure")
    axios.delete('https://cryptic-lake-04404.herokuapp.com/recipes/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      recipes: this.state.recipes.filter(el => el._id !== id)
    })
  }

  recipeList() {
    return this.state.recipes.map(currentrecipe => {
      return <Recipe recipe={currentrecipe} deleteRecipe={this.deleteRecipe} key={currentrecipe._id} />;
    });
  }

  render() {
    return (
      <div>{this.recipeList()} </div> 
    

    )
  } 
}