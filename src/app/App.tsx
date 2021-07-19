import React from 'react'
import Header from '../components/Header/Header'
import './App.scss'
import { defaultTodos } from '../app/mockaData'
import TodoList from '../components/TodoList/TodoList'

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <TodoList todos={defaultTodos} />
    </div>
  )
}
export default App
