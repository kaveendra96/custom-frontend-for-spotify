import React from 'react'

const Artist = ({ artist }) =>{

    if(!artist) return null

    const {images,name,followers,genres} =artist
    return(
        <div className='m-4'>
            
            <img 
                src={images[0] && images[0].url} 
                alt='artist-profile'
                style={{
                    width:300,
                    height:300,
                    borderRadius:100,
                    objectFit:'cover'
                }}
                />
             <h3>{name}</h3>
             <p>{followers.total}</p>
            <p>{genres.join(',')}</p>

                
        </div>
    )
}
export default Artist