import React, {Component} from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';

class Anime extends Component{
    constructor(props){
        super(props);
        this.state={
            aniInfo: {},
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`http://api.jikan.moe/v3/anime/${id}`)
        .then((res) =>{
            const aniItem = res.data;
            console.log(aniItem);
            this.setState({aniInfo: aniItem});
        })
        .catch((err) => console.log(err));
    }

    render(){
        return(
            <>
            <div>
                <h1>{this.state.aniInfo.title}</h1>
            </div>

            <div><img src={this.state.aniInfo.image_url} alt="ani pic" /></div>
            <h2>Synopsis:</h2>
            <p>{this.state.aniInfo.synopsis}</p>
            <br></br>
            <h2>Background:</h2>
            <p>{this.state.aniInfo.background}</p>
            <br></br>
            <h2>Trailer:</h2>
            <iframe title="trailer"
            width="420" height="345" src={this.state.aniInfo.trailer_url}>
            </iframe>
            <br></br>
            <a href={this.state.aniInfo.url}>To MAL</a>
            </>
        )
    }


}
export default withRouter(Anime);