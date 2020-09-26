import React, {Component} from "react";

class Recipe extends Component {
    render() {
        const {title, img, instructions} = this.props;
        const ingredients = this.props.ingredients.map((ing, index) => (
            <li key={index}>{ing}</li>
        ));
        return (
                 <div className="col-md-4">
                    <div className="card card1">
                        <img className="card-img-top img-fluid" src={img} alt={title} />
                    <div className="card-body">
                        <h3 className="card-title">{title}</h3>
                        <h6>Ingredients:</h6>
                <ul>
                    {ingredients}
                </ul>
                <h6>Instructions:</h6>
                <p className="card-text">{instructions}</p>
            </div>
                    </div>
            </div>
        );
    }
}

export default Recipe;