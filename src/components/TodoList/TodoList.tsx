import React, { useState, useRef } from 'react'
import { AddTodoProps, TodoProps, TodosProps, TodoType } from '../../types/todosCompTypes'

export const Todo: React.FC<TodoProps> = ({ props }) => {
  const { todo, deleteTodo } = props

  return (
    <li>
      <div>{todo.label}</div>
      <div>{todo.status}</div>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  )
}

const AddTodoForm: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [label, setLabel] = useState('')
  return (
    <div>
      <input
        onChange={(evt) => {
          setLabel(evt.target.value)
        }}
      ></input>
      <button onClick={() => addTodo(label)}>Add Todo</button>
    </div>
  )
}

const TodoList: React.FC<TodosProps> = ({ todos }) => {
  const [todoList, setTodoList] = useState(todos)
  const deleteTodo = (id: number) => {
    setTodoList((list) => {
      return list.filter((todo) => todo.id !== id)
    })
  }
  const addTodo = (label: string) => {
    setTodoList((list) => {
      const newTodo: TodoType = { id: Math.random(), label, status: 'doing' }
      return [...list, newTodo]
    })
  }
  return (
    <>
      <ul>
        {todoList.map((todo) => (
          <Todo props={{ todo, deleteTodo }} key={todo.id} />
        ))}
      </ul>
      <AddTodoForm addTodo={addTodo} />
    </>
  )
}

export default TodoList
