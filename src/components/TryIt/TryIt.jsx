import React, { useState, useEffect } from 'react';
import './TryIt.css';
import { Interpreter } from 'devlipi/interpreter';


const TryIt = (props) => {
  const [editorOutput, setEditorOutput] = useState('');
  const [editorValue, setEditorValue] = useState('');
  
  useEffect(() => {
    setEditorOutput('');
    const originalConsoleLog = console.log;
    const originalConsoleError = console.error;
  
    console.log = (...args) => {
      originalConsoleLog(...args);
      setEditorOutput((prevOutput) => prevOutput + args.join(' ') + '\n');
    };
  
    console.error = (...args) => {
      originalConsoleError(...args);
      setEditorOutput((prevOutput) => prevOutput + 'Error: ' + args.join(' ') + '\n');
    };
  
    return () => {
      console.log = originalConsoleLog;
      console.error = originalConsoleError;
    };
  }, []);

  const runDevlipiClassEditor = () => {
    setEditorOutput('');
    const input = editorValue.trim();
    if (input) {
      const interpreter = new Interpreter(input);
      const logValues = interpreter.parser.log.values;
      if (logValues && typeof logValues[Symbol.iterator] === 'function') {
        logValues.forEach(log => {
          setEditorOutput(prevOutput => prevOutput + log + '\n');
        });
      }
    }
  };

  const clearOutputEditor = () => {
    setEditorOutput('');
  };

  const copyCodeToClipboardEditor = () => {
    navigator.clipboard.writeText(editorValue)
      .then(() => {
        const notification = document.createElement('div');
        notification.className = 'copy-notification-editor';
        notification.textContent = 'Code copied to clipboard!';
        document.body.appendChild(notification);
        setTimeout(() => {
          document.body.removeChild(notification);
        }, 3000);
      })
      .catch(err => {
        console.error('Failed to copy code: ', err);
        alert('Failed to copy code.');
      });
  };

  return (
    <section id="tryit" className="tryit-container">
      <div className="header">
        <h2>Try It</h2>
      </div>
      <div className="content">
        <div className="editor-container">
          <div
            contentEditable="true"
            className="code-editor"
            id="code-editor"
            onInput={(e) => setEditorValue(e.currentTarget.innerText)}
          ></div>
        </div>
        <div className="terminal-container">
          <div className="terminal-buttons">
            <button className="runcodeeditor" onClick={runDevlipiClassEditor}>
              Run
            </button>
            <button className="cleareditor" onClick={clearOutputEditor}>
              Clear
            </button>
            <button className="copyeditor" onClick={copyCodeToClipboardEditor}>
              &#128203;
            </button>
          </div>
          <div className="editor-output-terminal">
            <pre>
              <code>{editorOutput}</code>
            </pre>
            {editorOutput ? null : <p style={{ color: 'white' }}>Run code to see output</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TryIt;