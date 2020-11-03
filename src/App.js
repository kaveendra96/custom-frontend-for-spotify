import React from 'react';
import './App.css';
import Artist from './Component/Artist';
import Search from './Component/Search';
import Tracks from './Component/Tracks';
const API_ADDRESS='https://spotify-api-wrapper.appspot.com';

class App extends React.Component {
  state={
    artist:null,
    tracks:[]
  }
  componentDidMount(){
    this.searchArtist('pentatonix')
  }

  
  searchArtist= artistQuery =>{
      fetch(`${API_ADDRESS}/artist/${artistQuery}`)
        .then(response => response.json())
        .then(json => {
            if(json.artists.total>0){
              const artist=json.artists.items[0];
              this.setState({
                artist:artist
              })
              console.log(artist)
              fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
                .then(response => response.json())
                .then(json =>this.setState({tracks:json.tracks}) )
                .catch(err => alert(err.message))
            }
        })

  }
  
    render(){
      return (
        <div className="App">
            <div className="container">
              <h1>Music Application</h1>
              <Search searchArtist={this.searchArtist}/>
              <Artist artist={this.state.artist}/>
              <Tracks tracks={this.state.tracks}/>
            </div>
        </div>
      );
    }
}

export default App;
