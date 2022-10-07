import React from 'react';
import { useState, useEffect } from 'react'
import Header from './Header'
import '../index.css';
import SongsContainer from './SongsContainer'
import PlaylistsContainer from './PlaylistsContainer';

function MusicContainer() {
  const [songs, setSongs] = useState([])

  const [playlists, setPlaylists] = useState([])

  const [selectedPlaylists, setSelectedPlaylists] = useState([])

  
  
  useEffect(() => { 
    fetch('http://localhost:9292/playlists')
      .then(res => res.json())
      .then(data => {
        setPlaylists(data)
        setSelectedPlaylists(data[0])
      })
    fetch('http://localhost:9292/songs')
      .then(res => res.json())
      .then(setSongs)
      
    
  }, [])


  function addToPlaylists(playlistID,songID) {
    fetch('http://localhost:9292/songitems', {
      method: 'POST',
      headers: { "Content-Type": "application/json", },
      body: JSON.stringify({ playlist_id: playlistID, track_id: songID })
    }).then(response => {
      if (response.ok){refreshedPlaylists()}
    })
    
  }


  function refreshedPlaylists() {
     fetch('http://localhost:9292/playlists')
      .then(res => res.json())
       .then(setPlaylists)
     fetch(`http://localhost:9292/playlists/${selectedPlaylists.id}`)
      .then(res => res.json())
      .then(setSelectedPlaylists)
  }


  function removeFromPlaylists(songID) {
    fetch(`http://localhost:9292/playlists/${selectedPlaylists.id}/songs/${songID}`, {
      method: 'DELETE'
    }).then(response => {
      if (response.ok){refreshedPlaylists()}
    })
  }


  function handleRatingSubmit(newRating, songitemID) {
    fetch(`http://localhost:9292/songitems/${songitemID}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', },
      body: JSON.stringify({rating: parseInt(newRating)})
    }).then(response => {
      if (response.ok){refreshedPlaylists()}
    })
  }

  function addNewPlaylists(newPlaylists) {
    fetch(`http://localhost:9292/playlists`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', },
      body: JSON.stringify({ playlist_name: newPlaylists })
    }).then(response => {
      if (response.ok){refreshedPlaylists()}
    })
    }
  


  

 

  return (
    <div>
    <Header />
      <div>
        <SongsContainer addToPlaylists={addToPlaylists} playlists={playlists} songs={songs} />  
        <PlaylistsContainer
          addNewPlaylists={addNewPlaylists}
          removeFromPlaylists={removeFromPlaylists}
          playlists={playlists}
          selectedPlaylists={selectedPlaylists}
          setSelectedPlaylists={setSelectedPlaylists}
          handleRatingSubmit={handleRatingSubmit}
        />
      </div>
      
      
   </div>
    

  )
  }

export default MusicContainer