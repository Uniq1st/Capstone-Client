import React,  { Component } from "react";
import axios from 'axios';
import "./App.css"


class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            topAnimes: [],
        };
    };

    componentDidMount(){
        axios.get(`https://api.jikan.moe/v3/top/anime/1/airing`)
        .then((res)=>{
            const topAni = res.data.top;
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
           {animeList}
           </>
       )
    }

};

export default Home;