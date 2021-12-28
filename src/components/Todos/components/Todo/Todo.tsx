import React, { useState } from 'react'
import RenameForm from './components/RenameForm/RenameForm'

export type TodoType = {
  id: number
  label: string
  status: 'doing' | 'done'
}
type TodoProps = {
  props: {
    todo: TodoType
    deleteTodo: (todo: TodoType) => void
    updateTodo: (renamedTodo: TodoType) => void
  }
}
export type TodoListProps = {
  props?: {
    todos: TodoType[]
  }
}

const Todo: React.FC<TodoProps> = ({ props }) => {
  const [isChangeLabel, setIsChangeLabel] = useState(false)
  const { todo, updateTodo, deleteTodo } = props
  const updateStatus = (evt: any) => {
    if (todo.status === evt.target.textContent) return
    updateTodo({ ...todo, ...{ status: evt.target.textContent } })
  }

  return (
    <li>
      {!isChangeLabel ? <h2 className="todo__label">{todo.label}</h2> :<RenameForm props={{updateTodo, setIsChangeLabel, todo}}/>}
      <div>{todo.status}</div>
      <button onClick={() => deleteTodo(todo)}>Delete Todo</button>
      <button disabled={isChangeLabel} onClick={() => setIsChangeLabel((prevState) => !prevState)}>Rename</button>
      <button onClick={updateStatus}>done</button>
      <button onClick={updateStatus}>doing</button>
    </li>
  )
}

export default Todo
