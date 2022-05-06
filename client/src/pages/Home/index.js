import React from 'react'
import {useNavigate} from 'react-router-dom'

function Home() {
const navigate = useNavigate();


  return (
   <>
   <h1 className='home-title' role='heading'>Zoomies</h1>
   <div className='btn-grid'>
<button  className='btn-home' role='start' onClick={() => navigate("/setupquiz")}>Start a quiz</button>
<button className='btn-home'role='leaderboard'> Leaderboards</button>

   </div>
   </> 
  )
}

export default Home
