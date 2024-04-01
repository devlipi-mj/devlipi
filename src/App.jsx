import React from 'react'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import './App.css'
import { Examples } from './components/Examples/Examples'
import { TryIt } from './components/TryIt/TryIt'
import { Contact } from './components/Contact/Contact'

export const App = () => {
  return (
    <>
    <Navbar/>
    <div className="container">
      <Hero/>
      <Examples/>
      <TryIt/>
      <Contact/>
    </div>
    </>
  )
}
