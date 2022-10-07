import React, {useState} from 'react'



function SongRatingForm({songitem, handleRatingSubmit}) {
 
  const [rating, setRating] = useState(songitem.rating)

  function handleChange(e) {

    setRating(e.target.value)
  } 


  function handleSubmit(e) {
    e.preventDefault()
    handleRatingSubmit(rating, songitem.id)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} type="number" value={rating}/><span><button type="submit">Submit</button></span>
    </form>
  )
}

export default SongRatingForm