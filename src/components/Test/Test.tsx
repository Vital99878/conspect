import React, { useState } from 'react'
import './Test.css'
import { TodoProps, TodosProps } from '../../types/todosCompTypes'

const Todo: React.FC<TodoProps> = ({ todo, deleteTodo }) => {
  return (
    <li>
      <div>{todo.label}</div>
      <div>{todo.status}</div>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  )
}

const Todos: React.FC<TodosProps> = ({ todos }) => {
  const [todoList, setTodoList] = useState(todos)

  function addRandom() {
    setTodoList((list) => {
      return [...list, { label: 'Tea', id: Math.random(), status: 'doing' }]
    })
  }
  function deleteTodo(id: number) {
    setTodoList((list) => {
      return list.filter((todo) => todo.id !== id)
    })
  }

  return (
    <div className="test">
      <ul>
        {todoList.map((todo) => (
          <Todo todo={todo} key={todo.id} deleteTodo={deleteTodo} />
        ))}
      </ul>
      <button onClick={() => addRandom()}>List</button>
    </div>
  )
}
export default Todos
