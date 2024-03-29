import React, { useState } from 'react'
import './Examples.css'
import { EXAMPLES } from '../../utils/data'
import { ExampleCard } from './ExampleCard/ExampleCard'
import { ExampleInfoCard } from './ExampleInfoCard/ExampleInfoCard'

export const Examples = () => {
  const [selectedExample, setSelectedExample] = useState(EXAMPLES[0]);

  const handleSelectedExample = (data) => {
    setSelectedExample(data);
  };

  return (
    <section className="examples-container">
      <h5>Examples</h5>
      <div className="examples-content">
        <div className="examples">
          {EXAMPLES.map((item)=>(
            <ExampleCard
            key={item.title}
            title={item.title}
            isActive={selectedExample.title === item.title}
            onClick={() => handleSelectedExample(item)}
            />
          ))}
        </div>

        <dev className="examples-info">
          <ExampleInfoCard
            heading={selectedExample.title}
            examples={selectedExample.examples}
        />
        </dev>
      </div>
    </section>
  )
}
