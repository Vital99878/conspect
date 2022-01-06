import React, { useState } from 'react'
import { RenameForm, TodoStatusForm } from './components'
import { TodoType, R_2 } from '../../models/index.model'

type Props = {
  props: {
    todo: TodoType
    updateTodo: R_2['updateTodo']
    deleteTodo: R_2['deleteTodo']
  }
}

const Todo: React.FC<Props> = ({ props }) => {
  const [shouldShowLabel, setShouldShowLabel] = useState(true)
  const { todo, updateTodo, deleteTodo } = props
  const label = shouldShowLabel && <h2 className="todo__label">{todo.label}</h2>
  function onRename() {
    setShouldShowLabel(false)
  }

  return (
    <li>
      {label || <RenameForm props={{ updateTodo, setShouldShowLabel, todo }} />}
      <button onClick={() => deleteTodo(todo)}>Delete Todo</button>
      <button disabled={!shouldShowLabel} onClick={onRename}>Rename</button>
      <TodoStatusForm props={{ todo, updateTodo }} />
    </li>
  )
}

export default Todo
