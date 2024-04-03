import React from 'react';
import './Download.css';

const copyToClipboard = () => {
  const npmCommand = 'npm i -g devlipi';
    navigator.clipboard.writeText(npmCommand).then(() => {
    const notification = document.createElement('div');
    notification.className = 'copy-notification';
    notification.textContent = 'Copied to clipboard!';
    document.body.appendChild(notification);

    setTimeout(() => {
      document.body.removeChild(notification);
    }, 3000);
  }).catch(err => {
    console.error('Failed to copy: ', err);
    alert('Failed to copy.');
  });
};

const Download = () => {
  return (
    <section id='download'>
      <div className="download-container">
        <h1>Download DevLipi</h1>
        <div className="npm-command">
          <pre>npm i -g devlipi</pre>
          <button className='copy' onClick={copyToClipboard}>
              Copy
          </button>
          <h3>After installation, run the command: <span style={{ color: '#0EB1D2' }}>devlipi</span> to create a file with basic code and install the VS Code extension.</h3>
        </div>
        <a href="https://marketplace.visualstudio.com/items?itemName=MayurdhvajsinhJadeja.devlipi" className='vscode' target='_blank' rel="noreferrer"><button>VS Code Extention</button></a>
        <a href="https://www.npmjs.com/package/devlipi" className='source'target='_blank' rel="noreferrer" ><button>View Source</button></a>
        <p>
          Made by{' '}
          <a
            href="https://mayurdhvajsinhjadeja.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mayurdhvajsinh Jadeja
          </a>
          
        </p>
      </div>
    </section>
  );
};

export default Download;