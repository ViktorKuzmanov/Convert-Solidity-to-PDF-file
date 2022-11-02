import { useState } from 'react';
import '@wcj/dark-mode';
import './App.css';
import CodeEditor from '@uiw/react-textarea-code-editor';

function App() {
  const [code, setCode] = useState("")

  return (
    <div className='App'>
      <dark-mode dark='Dark' light='Light' style={{ position: 'fixed', top: 9, left: 10}}>
      </dark-mode>
        <CodeEditor
          value={code} 
          language="sol"
          onChange={(e) => setCode(e.target.value)}
          padding={20}
          className="textarea"
          placeholder='Paste Your Solidity Code Here'
          minHeight={120}
        />
        <button className='Button-print' onClick={window.print}>Print</button>
  </div>
  );
}

export default App;
