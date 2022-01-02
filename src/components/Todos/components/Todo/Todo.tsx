import React, { useState } from 'react'
import RenameForm from './components/RenameForm/RenameForm'
import TodoStatusForm from '../TodoStatus/Todo'
import { TodoType, R_2, TodoStatus } from '../../models/index.model'
import { ValueMouseEvent } from '../../../../types/ValueMouseEvent.model'

type Props = {
  props: {
    todo: TodoType
    updateTodo: R_2['updateTodo']
    deleteTodo: R_2['deleteTodo']
  }
}

const Todo: React.FC<Props> = ({ props }) => {
  const [isChangeLabel, setIsChangeLabel] = useState(false)
  const { todo, updateTodo, deleteTodo } = props
  const updateStatus = (evt: ValueMouseEvent<TodoStatus>) => {
    const status = evt.target.value
    if (todo.status === status) return
    updateTodo({ ...todo, ...{ status } })
  }

  return (
    <li>
      {!isChangeLabel ? (
        <h2 className="todo__label">{todo.label}</h2>
      ) : (
        <RenameForm props={{ updateTodo, setIsChangeLabel, todo }} />
      )}
      <button onClick={() => deleteTodo(todo)}>Delete Todo</button>
      <button disabled={isChangeLabel} onClick={() => setIsChangeLabel((prevState) => !prevState)}>
        Rename
      </button>
      <TodoStatusForm props={{ todo, updateTodo }} />
    </li>
  )
}

export default Todo
