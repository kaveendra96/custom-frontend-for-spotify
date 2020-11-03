import React, { Component } from 'react'

class Search extends Component{

    state={ artistQuery:''}

    handleKeyPress= event =>{
        if(event.key === 'Enter')
            this.searchArtist()
    }
    updateArtistQuery=  event =>{
        this.setState({
          artistQuery:event.target.value
        })
    }
    searchArtist = () =>{
        this.props.searchArtist(this.state.artistQuery)
    }
    render(){
        return(
            <div>
                <input 
                    className=" m-4" 
                    placeholder="Enter artist name"
                    onKeyPress={this.handleKeyPress}
                    onChange={this.updateArtistQuery}
                    />
                {/* <button onClick={this.searchArtist} className="btn btn-outline-success btn-lg  m-2">Search</button> */}
            </div>
        )
    }
}
export default Search