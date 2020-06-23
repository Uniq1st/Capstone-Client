import React,  { Component } from "react";
import axios from 'axios';
import Searchbar from './Searchbar'
import "./App.css";


class Search extends Component{
    constructor(props){
        super(props);
        this.state={
            topAnimes: [],
            searchInput: "",
        };
    };
    

    handleInput = (event) => {
        this.setState({searchInput: event.target.value});
        console.log(this.state.searchInput);
      }

    handleSearch = () =>{
        const searchInput = this.state.searchInput;
        const url = `https://api.jikan.moe/v3/search/anime?q=${searchInput}&page=1`;
        console.log(url);
        axios
          .get(url)
          .then((response) =>{
           this.setState({topAnimes: response.data.results});
           console.log(url);
           console.log(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
    }
    

    render(){
        const legendStyling = {
            textAlign: "center"
            
            
		};
        let animeList;
             animeList=(
                <div
                className=".card"
                     style={{ width: 108.5 + "rem" 
                     }}>
                    <li>
                     {this.state.topAnimes.map((anime) => 
                     
                        <li className="poop" key= {anime.rank}> 
                        
                        <a href ={anime.url}><img src={anime.image_url} 
                        alt={anime.title}/></a>
                        {anime.title} 
                        <h2> Rating:{anime.score} </h2>
                          </li>)}
                    </li>
                </div>
             )
 
        return(
            <>
            {<Searchbar value={this.state.searchInput} onChange={this.handleInput} onSearch={this.handleSearch}/>}
            {animeList}
            </>
        )
     }
 
 };
 
 export default Search;