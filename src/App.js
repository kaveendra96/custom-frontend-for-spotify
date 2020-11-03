import React from 'react';
import './App.css';
import Artist from './Component/Artist';
const API_ADDRESS='https://spotify-api-wrapper.appspot.com';

class App extends React.Component {
  state={
    artistQuery:'',
    artist:null,
    tracks:[]
  }

  updateArtistQuery=  event =>{
      this.setState({
        artistQuery:event.target.value
      })
  }
  searchArtist=()=>{
      fetch(`${API_ADDRESS}/artist/${this.state.artistQuery}`)
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
  handleKeyPress=event=>{
    if(event.key === 'Enter')
        this.searchArtist()
  }
    render(){
      return (
        <div className="App">
            <div className="container">
              <h1>Music Application</h1>
              <input 
              className="form-control m-4" 
              placeholder="Enter artist name"
              onKeyPress={this.handleKeyPress}
              onChange={this.updateArtistQuery}
              />
              <button onClick={this.searchArtist} className="btn btn-outline-success btn-lg m-2">Search</button>
              <Artist artist={this.state.artist}/>
            </div>
        </div>
      );
    }
}

export default App;
