import React, { useEffect, useState } from 'react';
import './ExampleInfoCard.css';
import { Interpreter } from 'devlipi/interpreter'; 

const ExampleInfoCard = ({ heading, examples }) => {
  const applyStyles = (text) => {
    return text
      .replace(/\b(kriya|yavat|yadi|anyatha)\b/g, '<span style="color: #9f5cbe">$1</span>')
      .replace(/\b(prakashan|maxNum|functionName)\b/g, '<span style="color: #fcec93">$1</span>')
      .replace(/\b\d+\b/g, '<span style="color: lightgreen">$&</span>')
      .replace(/(@\w+)/g, '<span style="color: #6dcaff">$1</span>')
      .replace(/'([^']*)'/g, '\'<span style="color: rgb(204, 119, 34)">$1</span>\'')
      .replace(/->([^<]*)<-/g, '-><span style="color: green">$1</span><-');
};


  const [output, setOutput] = useState('');

  useEffect(() => {
    setOutput('');
    const originalConsoleLog = console.log;
    const originalConsoleError = console.error;
  
    console.log = (...args) => {
      originalConsoleLog(...args);
      setOutput((prevOutput) => prevOutput + args.join(' ') + '\n');
    };
  
    console.error = (...args) => {
      originalConsoleError(...args);
      setOutput((prevOutput) => prevOutput + 'Error: ' + args.join(' ') + '\n');
    };
  
    return () => {
      console.log = originalConsoleLog;
      console.error = originalConsoleError;
    };
  }, [examples]);

  const runDevlipiClass = () => {
    setOutput('');
    const codeDivs = document.querySelectorAll('.codetoget');
    codeDivs.forEach(inputDiv => {
      const input = inputDiv.innerText;
      const interpreter = new Interpreter(input); 
      const logValues = interpreter.parser.log.values;
  
      if (logValues && typeof logValues[Symbol.iterator] === 'function') {
        logValues.forEach(log => {
          setOutput(prevOutput => prevOutput + log + '\n');
        });
      }
    });
  };
  

  const clearOutput = () => {
    setOutput('');
  }

  const copyCodeToClipboard = () => {
    const codeDivs = document.querySelectorAll('.codetoget');
    let codeToCopy = '';
    codeDivs.forEach(inputDiv => {
      codeToCopy += inputDiv.innerText + '\n';
    });

    navigator.clipboard.writeText(codeToCopy).then(() => {
      const notification = document.createElement('div');
      notification.className = 'copy-notification';
      notification.textContent = 'Code copied to clipboard!';
      document.body.appendChild(notification);

      setTimeout(() => {
        document.body.removeChild(notification);
      }, 3000);
    }).catch(err => {
      console.error('Failed to copy code: ', err);
      alert('Failed to copy code.');
    });
  };
  
  return (
    <div className="examples-info-card">
      <div className="header">
        <h6>{heading}</h6>
        <div>
          <button className="runcode" onClick={runDevlipiClass}>Run</button>
          <button className="clear" onClick={clearOutput}>Clear</button>
          <button className="copy" onClick={copyCodeToClipboard}>&#128203;</button>
        </div>
      </div>
      <div className="examples-info-content">
        {examples.map((item, index) => (
          <div className="example-info" key={`example_${index}`}>
            <pre><code className="codetoget" dangerouslySetInnerHTML={{ __html: applyStyles(item.example) }} /></pre>
          </div>
        ))}
      </div>
      <div className="examples-output-terminal">
        <pre><code>{output}</code></pre>
        {output ? null : <p>Run code to see output</p>}
      </div>
    </div>
  );
};

export default ExampleInfoCard;