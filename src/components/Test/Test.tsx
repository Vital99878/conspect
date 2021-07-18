import React, { useState } from 'react'
import './Test.css'
import { TodoProps, TodosProps, TodoType } from '../../types/todosCompTypes'

const Todo = ({ todo }: TodoProps) => {
  return (
    <li>
      <div>{todo.label}</div>
      <div>{todo.status}</div>
      <button>Delete</button>
    </li>
  )
}
const defaultTodos: TodoType[] = [
  { label: 'Coffe', id: 1, status: 'done' },
  { label: 'Tea', id: 2, status: 'doing' },
  { label: 'Cookie', id: 3, status: 'doing' },
  { label: 'Get ts', id: 4, status: 'done' },
]

const Todos = ({ todos }: TodosProps) => {
  const [todoList, setTodoList] = useState(defaultTodos.map((todo) => <Todo todo={todo} key={todo.id} />))
  function deleteTodo(id: number) {
    console.log(id)
  }
  return (
    <div className="test">
      <ul>{todoList}</ul>
      <button onClick={() => setTodoList}>List</button>
    </div>
  )
}
export default Todos
