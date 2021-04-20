import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import {Book} from './features/book/Book';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<Counter />*/}
        <Book/>
      </header>
    </div>
  );
}

export default App;
