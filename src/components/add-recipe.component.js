import React, {Component} from 'react';
import axios from 'axios';


export default class AddRecipe extends Component {
    constructor(props) {
        super(props);

        this.onChangeRecipeDescription = this.onChangeRecipeDescription.bind(this);
        this.onChangeRecipeName = this.onChangeRecipeName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            recipe: ''
        }
    }

    onChangeRecipeDescription(e) {
        this.setState({
            recipe: e.target.value
        });
    }

    onChangeRecipeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onSubmit(e) {
        
        e.preventDefault();

        console.log(`Recipe submitted:`);
        console.log(`Recipe Description: ${this.state.recipe}`);
        console.log(`Recipe Name: ${this.state.name}`);

        const newRecipe = {
            recipe: this.state.recipe,
            name: this.state.name
        }
        axios.post('http://localhost:5000/recipes/', newRecipe)
            .then(res => console.log(res.data));

        this.setState({
            recipe: '',
            name: ''
        })
    }
    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Add New Recipe</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Recipe Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeRecipeName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Recipe: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.recipe}
                                onChange={this.onChangeRecipeDescription}
                                />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Add Recipe" className="btn btn-success" />
                    </div>
                </form>
                <br></br>
            </div>
        )
    }
}