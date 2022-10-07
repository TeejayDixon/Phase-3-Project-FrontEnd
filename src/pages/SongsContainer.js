import React from 'react'
import Songs from './Songs'

function SongsContainer({songs, playlists, addToPlaylists}) {

   







  return (
    <div>
     <h2>Library</h2>
     {songs.map(song => <Songs playlists={playlists} addToPlaylists={addToPlaylists} key={song.id} song={song} />)}
  </div>
  )
  
}

export default SongsContainer