import React from 'react'
import Header from '../components/Header/Header'
import './App.scss'
import { defaultTodos } from '../app/mockaData'
import TodoList from '../components/TodoList/TodoList'
import { Todo } from '../components/TodoList/TodoList'
import Test from '../components/Test/Test'

const MenuItem = ({ title }: { title: string }) => {
  return <li>{title}</li>
}

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <TodoList todos={defaultTodos} />
      <Test>
        <MenuItem title="mew menu" />
        <MenuItem title="mew get" />
        <MenuItem title="mew let" />
      </Test>
    </div>
  )
}
export default App
