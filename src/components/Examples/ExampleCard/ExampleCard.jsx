import React from 'react'
import './ExampleCard.css'

const ExampleCard = ({ title, isActive, onClick}) => {
  return (
    <div
        className={`example-card ${isActive ? "active" : ""}`}
        onClick={() => onClick()}
    >
        <span>{title}</span>
    </div>
  )
}

export default ExampleCard;