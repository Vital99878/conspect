import React from 'react'
import './App.scss'
import { defaultTodos } from '../app/mockaData'
import Header from '../components/Header/Header'
import Test from '../components/Test/Test'
import TodoList from '../components/TodoList/TodoList'

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Test />
      <TodoList todos={defaultTodos} />
    </div>
  )
}
export default App
