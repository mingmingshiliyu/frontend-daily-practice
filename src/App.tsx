import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Navbar from './components/Navbar'
import { UpdateFollower } from 'react-mouse-follower';
import Hero from './components/Hero'
import Service from "./components/Service"

function App() {


  return (
    <div>
    <header>
      
      <UpdateFollower
      className="sample"
      mouseOptions={{
        backgroundColor: 'white',
        zIndex: 2,
        followSpeed: 1.5,
      }}
    >
      <Navbar/>
      <Hero/>
      <Service/>
    </UpdateFollower>
    </header>
    </div>
  )
}



export default App
