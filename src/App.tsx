import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DiagramData } from './types/bookProps';
import ListOfDiagrams from './components/diagram/ListOfDiagrams';

function App() {
  const diagrams: DiagramData[] = [
    [100, 20, 10, 1, 84, 1],
    [20, 20, 37, 15, 84, 1],
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ListOfDiagrams diagrams={diagrams} />
      </header>
    </div>
  );
}

export default App;
