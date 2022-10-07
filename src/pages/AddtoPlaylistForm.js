
import React, { useState } from 'react'

function AddtoPlaylistForm({playlists, addToPlaylists, songID}) {

  const [formData, setFormData] = useState({})

  function handleChange(e) {
    addToPlaylists(e.target.value, songID)
  }
  
  
  
  return (
    <>
      <select onChange={handleChange}><option>Select Playlist</option>{playlists.map(item => <option value={item.id} key={item.id}>{item.playlist_name}</option>)}</select>
    </>
  )
    
  
}

export default AddtoPlaylistForm
