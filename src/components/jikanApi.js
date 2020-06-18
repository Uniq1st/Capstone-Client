import React, {Component} from "react"




class jikanApi extends Component{
  render(){
    
    return (
      <div>
        {/* Compiled and minified CSS */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
        <link rel="stylesheet" href="./anime.css" />
        <nav className="row">
          <div className="nav-wrapper">
            <div className="col s12">
              <a href="#" className="brand-logo">Anime</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <form id="search_form" className="col s12">
              <div className="row">
                <div className="input-field col s6">
                  <input placeholder=".." name="search" id="search" type="text" className="validate" />
                  <label htmlFor="search"></label>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div id="search-results" className="container">
        </div>
        {/* Compiled and minified JavaScript */}
        
      </div>
      
    );
  }
}
export default jikanApi;