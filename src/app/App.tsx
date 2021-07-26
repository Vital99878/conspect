import React from 'react'
import Header from '../components/Header/Header'
import TodoList from '../components/TodoList/TodoList'
import Test from '../components/Test/Test'
import PositionCss from '../components/PositionCss/PositionCss'
import './App.scss'

const MenuItem = ({ title }: { title: string }) => {
  return <li>Menu item</li>
}

const App: React.FC = () => {
  return (
    <div className="App">
      <PositionCss />
    </div>
  )
}
export default App
