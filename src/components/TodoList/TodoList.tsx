import React from 'react'
import { useState } from 'react'
import './TodoList.scss'

type TodoType = {
  id: number
  label: string
  status: 'doing' | 'done'
}
type TodoProps = {
  props: {
    todo: TodoType
    deleteTodo: (id: number) => void
  }
}
type AddTodoFormProps = {
  props: {
    addTodo: (label: string) => void
  }
}
type TodoListProps = {
  props?: {
    todos: TodoType[]
  }
}
const Todo: React.FC<TodoProps> = ({ props }) => {
  const { todo, deleteTodo } = props
  const { id, label, status } = todo
  return (
    <li>
      <div className="todo__label">{label}</div>
      <div>{status}</div>
      <button onClick={() => deleteTodo(id)}>Delete Todo</button>
    </li>
  )
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ props }) => {
  const { addTodo } = props
  const [label, setLabel] = useState('')
  return (
    <div>
      <input
        type="text"
        value={label}
        onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
          const label = evt.target.value
          setLabel(label)
        }}
      />
      <button
        onClick={() => {
          addTodo(label)
          setLabel('')
        }}
      >
        Add Todo
      </button>
    </div>
  )
}
const TodoList: React.FC<TodoListProps> = ({ props = { todos: [{ id: 1, label: 'new', status: 'doing' }] } }) => {
  const { todos } = props
  const [todoList, setTodoList] = useState(todos)
  const deleteTodo = (id: number) => {
    setTodoList((todos) => todos.filter((todo) => todo.id !== id))
  }
  const addTodo = (label: string) => {
    const newTodo: TodoType = { id: Math.random(), label, status: 'doing' }
    setTodoList((todos) => [...todos, newTodo])
  }
  return (
    <>
      <ul>
        {todoList.map((todo) => (
          <Todo props={{ todo, deleteTodo }} key={todo.id} />
        ))}
      </ul>
      <AddTodoForm props={{ addTodo }} />
    </>
  )
}
export default TodoList
