import React, { Component } from 'react'
import {recipe} from '../tempDetails';

export default class RecipeDetails extends Component {
  constructor(props){
    super(props)
    this.state = {
      recipe: recipe,
        url: `https://www.food2fork.com/api/get?key=f9bfe7a5bca4ffcfc7415898caf64e02&rId=${
          this.props.id
      }`
    }
  }

async componentDidMount(){
  try{
    const data = await fetch(this.state.url);
    const jsonData = await data.json();
      this.setState({
        recipe: jsonData.recipe
      })
  } catch (error) {
    console.log(error);
  }
}

render() {
    const{image_url,
      publisher,
      publisher_url,
      source_url,
      title,
      ingredients
    } = this.state.recipe;
    const{handleIndex} = this.props
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <button
                type="button"
                className="btn btn-warning mb-5"
                onClick={()=>handleIndex(1)}
                >
                Back to Recipe List
              </button>
              <img src={image_url} className="d-block w-100" alt="recipe" />
            </div>
            <div className="col-10 mx-auto col-md-6 my-3">
              <h6 id="recipeName">{title}</h6>
              <h6 id="recipeSubtext">Provided By {publisher}</h6>
              <a href={publisher_url}
                target="_blank"
                rel="noopener no referrer"
                className="btn btn-primary mt-2">Publisher Web Page</a>
              <a href={source_url}
                  target="_blank"
                  rel="noopener no referrer"
                  className="btn btn-success mt-2 mx-3">Recipe URL</a>
                <ul className="list-group mt-4">
                  <h2 className="mt-3 mb-4">Ingredients</h2>
                    {
                      ingredients.map((item, index)=>{
                        return(
                          <li key={index} className="list-group-item">
                            {item}
                          </li>
                        )
                      })
                    }
                </ul>
            </div>
          </div>
        </div>
      </React.Fragment>

    )
  }
}
