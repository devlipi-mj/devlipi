import React from 'react'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import './App.css'
import { Examples } from './components/Examples/Examples'

export const App = () => {
  return (
    <>
    <Navbar/>
    <div className="container">
      <Hero/>
      <Examples/>
    </div>
    </>
  )
}
