import React from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleEditor from './SimpleEditor';

function App() {
  console.log('trim left', "\t\t\tsampleSpaces\t\t\t".trimLeft());  
  return (
    <div className="App">
      <header className="App-header">
        <SimpleEditor></SimpleEditor>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
    </div>
  );
}

export default App;
