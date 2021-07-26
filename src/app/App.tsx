import React from 'react'
import Header from '../components/Header/Header'
import './App.scss'
import TodoList from '../components/TodoList/TodoList'
import Test from '../components/Test/Test'

const MenuItem = ({ title }: { title: string }) => {
  return <li>Menu item</li>
}

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoList />
    </div>
  )
}
export default App
