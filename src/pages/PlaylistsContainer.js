import React from 'react';
import Songs from './Songs'
import CreatePlaylistForm from './CreatePlaylistForm';

function PlaylistsContainer({ playlists, setSelectedPlaylists, selectedPlaylists, removeFromPlaylists, handleRatingSubmit, addNewPlaylists }) {

  return (
<div>
    <div>
        <CreatePlaylistForm addNewPlaylists={addNewPlaylists} playlist={playlists} /> 
      {playlists.map(p => <button onClick={() => setSelectedPlaylists(p)}>{p.playlist_name}</button>)}
    </div>

    <div>
        {selectedPlaylists.songitems && selectedPlaylists.songitems.map(songitem => <Songs handleRatingSubmit={handleRatingSubmit} removeFromPlaylists={removeFromPlaylists} song={songitem.track} songitem={songitem} />)}
      </div>
</div>
  
  )
}

export default PlaylistsContainer