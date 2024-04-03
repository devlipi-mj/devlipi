import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero-container">
        <div className="hero-content">
            <h2>Introducing <span className="highlight">DevLipi</span> </h2>
            <p>The whimsical wonderland of coding crafted with a sprinkle of <em>Sanskrit</em> inspired syntax. DevLipi is crafted with a backend powered by JavaScript, ensuring a robust foundation.
              It functions as a interpreted language, allowing step-by-step code execution.
              The development of DevLipi centers around three key components: <strong>Lexer, Parser, and Interpreter</strong>.
              These components work in harmony to process and execute the DevLipi code. 
            </p>
        </div>

        <div className="hero-img">
            <img className="logo" src="../../assets/PNG/main-logo-transparent.png" alt="Logo"/>
        </div>
    </section>
  )
}

export default Hero;