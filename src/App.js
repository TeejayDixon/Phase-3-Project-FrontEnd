import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom"
import  SplashPage  from './pages/SplashPage'
import  PlaylistType  from './pages/Header'
import  MusicContainer  from './pages/MusicContainer'
import PickGenre from './pages/PickGenre'


function App() {
   





  return (
  


    <>
    <Routes>
        <Route path="/" element={<SplashPage />} />
      </Routes>
      <MusicContainer />
      
      </>
    
  )
}

export default App
