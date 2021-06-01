import React from 'react'
import logo from '../img/logo.svg'
import './App.css'
import Header from '../components/Header/Header'

function App() {
  const data = 6

  return (
    <div className="App">
      <Header str={data} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  )
}

export default App
