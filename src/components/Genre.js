import React,  { Component } from "react";
import axios from 'axios';
import "./App.css"

class Genre extends Component{
    constructor(props){
        super(props);
        this.state={
            topAnimes: [],
            id: "",
        };
    };

    handleGenreChange = (event) => {
        this.setState({id: event.target.value});
        console.log(this.state.id);
    }

    handleClick = (event) => {
        const genreType = this.state.id;
        axios.get(`https://api.jikan.moe/v3/genre/anime/${genreType}/1`)
        .then((res)=>{
            const topAni = res.data.anime;
            console.log(topAni);
            this.setState({topAnimes:topAni})
        })
        .catch((err)=> console.log(err));
    }

    render(){
       let animeList;
       if(this.state.topAnimes.length===0){
           animeList=<></>
       }
       else{
            animeList=(
               <div>
                   <ol>
                    {this.state.topAnimes.map((anime) => 
                        <li className="poop" key= {anime.rank}> 
                        <a href ={`/anime/${anime.mal_id}`}><img src={anime.image_url} alt={anime.title}/></a>
                        {anime.title} 
                        <h2> Rating:{anime.score} </h2>
                         </li>)}
                   </ol>
               </div>
            )
       }

       return(
           <>
           Search by Genre
        <select className="work"
          onChange={this.handleGenreChange}
        >
          <option value="0"> </option>
          <option value="1">Action</option>
          <option value="2">Adventure</option>
          <option value="8">Drama</option>
          <option value="9">Ecchi</option>
          <option value="4">Comedy</option>
          <option value="14">Horror</option>
          <option value="26">Romance</option>
        </select>
        <button className="button" onClick={this.handleClick}>Change Genre</button>
           {animeList}
           </>
       )
    }

};

export default Genre;