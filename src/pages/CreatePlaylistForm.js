import React, {useState} from 'react';

function CreatePlaylistForm({addNewPlaylists}) {

  const [createPlaylist, setCreatePlaylist] = useState("")

  function handleChange(e) {
    setCreatePlaylist(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    addNewPlaylists(createPlaylist)
    setCreatePlaylist("")
  }


  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} className="create-playlist" type="text" value={createPlaylist} />
    <button type="submit" className="btn btn-primary">Create</button>
  </form>
  )
}

export default CreatePlaylistForm