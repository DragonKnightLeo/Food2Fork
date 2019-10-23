import React, { Component } from 'react'

export default class Recipe extends Component {
  render() {
    const {
      image_url,
      title,
      source_url,
      publisher,
      recipe_id
    } = this.props.recipe;
    const{handleDetails} = this.props;
    return (
      <React.Fragment>
        <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
          <div className="card">
            <img src={image_url} className="img-card-top" style={{height:"14rem"}} alt="recipe"/>
            <div className="card-body">
              <h5 id="recipeName"><strong>{title}</strong></h5>
              <h6 id="recipeSubtext">Provided By {publisher}</h6>
            </div>
            <div className="card-footer">
              <button id="recipeName" type="button"
                className="btn btn-primary"
                onClick={() => handleDetails(0, recipe_id)}>Details</button>
              <a id="recipeName" href={source_url} className="btn btn-success mx-2" target="_blank" rel="noopener noreferrer">Recipe Url</a>
            </div>
          </div>
        </div>
      </React.Fragment>

    )
  }
}
