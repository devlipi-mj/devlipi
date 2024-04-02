import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Examples from './components/Examples/Examples'
// import TryIt from './components/TryIt/TryIt'
import Contact from './components/Contact/Contact'
import Download from './components/Download/Download'

export const App = () => {
  return (
    <>
    <Navbar/>
    <div className="container">
      <Hero/>
      <Examples/>
      {/* <TryIt/> */}
      <Contact/>
      <Download/>
    </div>
    </>
  )
}
