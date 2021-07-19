import React, { useState, useRef, RefObject } from 'react'
import './TodoList.scss'
import { TodoProps, TodosProps, TodoType } from '../../types/todosCompTypes'

const Todo: React.FC<TodoProps> = ({ todo, deleteTodo }) => {
  return (
    <li className="todo">
      <div className="todo__label">{todo.label}</div>
      <div className="todo__status">{todo.status}</div>
      <button className="todo__deleteButton" onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </li>
  )
}
type AddTodoProps = {
  addTodo: (text: string | undefined) => void
}
const AddTodoForm: React.FC<AddTodoProps> = ({ addTodo }) => {
  const inputRef: RefObject<HTMLInputElement> = useRef(null)
  const label = inputRef.current?.value
  const [value, setValue] = useState('')
  return (
    <div
      className="wrapper"
      onSubmit={() => {
        addTodo(label)
      }}
    >
      <input
        type="text"
        value={value}
        onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
          setValue(evt.currentTarget.value)
        }}
      />
      <button
        onClick={() => {
          addTodo(value)
          setValue('')
        }}
      >
        Add todo
      </button>
    </div>
  )
}
const TodoList: React.FC<TodosProps> = ({ todos }) => {
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
  function addTodo(label: string | undefined) {
    if (label !== undefined && label !== '') {
      setTodoList((list) => {
        const newTodo: TodoType = { id: Math.random(), label, status: 'doing' }
        return [...list, newTodo]
      })
    }
  }

  return (
    <div className="todolist">
      <ul>
        {todoList.map((todo) => (
          <Todo todo={todo} key={todo.id} deleteTodo={deleteTodo} />
        ))}
      </ul>
      <AddTodoForm addTodo={addTodo} />
    </div>
  )
}

export default TodoList
