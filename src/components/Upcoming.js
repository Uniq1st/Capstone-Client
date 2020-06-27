import React,  { Component } from "react";
import axios from 'axios';
import "./App.css";

class Upcoming extends Component{
    constructor(props){
        super(props);
        this.state={
            upcomingAnimes: [],
        };
    };

    componentDidMount(){
        axios.get(`https://api.jikan.moe/v3/top/anime/1/upcoming`)
        .then((res)=>{
            const upAni = res.data.top;
            console.log(upAni);
            this.setState({upcomingAnimes:upAni})
        })
        .catch((err)=> console.log(err));
    }

    render(){
       let animeList;
       if(this.state.upcomingAnimes.length===0){
           animeList=<></>
       }
       else{
            animeList=(
               <div>
                   <ol>
                    {this.state.upcomingAnimes.map((anime) => 
                        <li className="poop" key= {anime.rank}> 
                        <a href ={`/anime/${anime.mal_id}`}><img src={anime.image_url} alt={anime.title}/></a>
                        {anime.title} 
                        <h3> Start Date:{anime.start_date} </h3>
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

export default Upcoming;