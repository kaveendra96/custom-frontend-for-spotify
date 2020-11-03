import React from 'react';
import './App.css';

class App extends React.Component {
  state={
    artistQuery:''
  }

  updateArtistQuery=  event =>{
      this.setState({
        artistQuery:event.target.value
      })
  }
  searchArtist=()=>{
    console.log(this.state)
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
              <button onClick={this.searchArtist} className="btn btn-primary m-2">Search</button>
            </div>
        </div>
      );
    }
}

export default App;
