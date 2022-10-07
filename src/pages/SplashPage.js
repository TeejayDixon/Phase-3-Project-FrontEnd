import React from 'react'
import videobg from '../assets/video.mp4'
import { Link } from "react-router-dom"



function SplashPage({setSongs}) {
   


  return (
     <div class='main'>

      <video src={videobg} autoPlay loop muted />

      <div class='content'>
        <h1>Playlistr</h1>
          <Link to="./MusicContainer" class="home-button">Create Playlist</Link>
      </div>

     </div>
    

  )
 }

 export default SplashPage;