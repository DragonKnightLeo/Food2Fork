import React, { Component } from 'react'

export default class RecipeSearch extends Component {
  render() {
    const {value, handleSubmit, handleChange} = this.props
    return (
      <React.Fragment>
        <div id="title" className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5 text-center">
              <h1 id="titleText">Search for Recipe On Fresh Cooking</h1>
              <form  className="mt-4" onSubmit={handleSubmit}>
                <label id="titleSubtext" htmlFor="search" className="text-capitalize">
                  type recipes seperated by comma
                </label>
                <div id="titleForm" className="input-group">
                  <input  type="text" name="search"
                    placeholder="chicken, onions, carrots"
                    className="form-control"
                    value={value}
                    onChange={handleChange}
                    />
                  <div className="input-group-append">
                    <button type="submit"
                      className="input-group-text bg-primary text-white">
                      <i className="fa fa-search" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>

    )
  }
}
