import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/hello'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <p>
          Oh Hell World
          <Hello name = "test"/>
        </p>

      </header>
    </div>
  );
}

export default App;
