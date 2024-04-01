import React, { useState }  from 'react';
import './TryIt.css'; // Import your component's CSS file
import { Interpreter } from 'devlipi/interpreter';

export const TryIt = () => {

  const [editorOutput, setEditorOutput] = useState('');
  const runDevlipiClass = () => {
    
  }
  const clearOutput = () => {
    
  }
  const copyCodeToClipboard = () => {
    
  }
  return (
    <section id="tryit" className="tryit-container">
      <h2>Try It</h2>
        <div contentEditable="true"
          className="code-editor"
          id='code-editor'
        >
        </div>
      <div>
        <button className="runcode" onClick={runDevlipiClass}>Run</button>
        <button className="clear" onClick={clearOutput}>Clear</button>
        <button className="copy" onClick={copyCodeToClipboard}>&#128203;</button>
      </div>
      <div className="output-terminal">
        <pre><code>{editorOutput}</code></pre>
        {editorOutput ? null : <p>Run code to see output</p>}
      </div>
    </section>
  );
};
