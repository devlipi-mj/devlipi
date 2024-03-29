import React from 'react'
import './ExampleInfoCard.css'

export const ExampleInfoCard = ({ heading, examples }) => {
  
  return <div className="examples-info-card">
    <h6>{heading}</h6>

    <div className="examples-info-content">
      {examples.map((item, index) => (
        <React.Fragment key={`example_${index}`}>
          <div className="example-info">
            <pre>
              <code>{item.example}</code>
            </pre>
          </div>
        </React.Fragment>
      ))}
    </div>
  </div>
}
