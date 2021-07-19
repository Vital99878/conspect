import React from 'react'
import Header from '../components/Header/Header'
import Todos from '../components/Test/Test'
import './App.scss'
import { defaultTodos } from '../app/mockaData'

const App:React.FC = () => {
  return (
    <div className="App">
      <Header />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <Todos todos={defaultTodos} />
    </div>
  )
}
export default App
