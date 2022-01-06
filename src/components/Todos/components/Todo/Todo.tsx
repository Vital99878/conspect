import React, { useState } from 'react'
import { RenameForm, TodoStatusForm, TodoSettings } from './components'
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

  return (
    <div className={'todoMenu'}>
      {label || <RenameForm props={{ updateTodo, setShouldShowLabel, todo }} />}
      <TodoSettings props={{ todo, deleteTodo, shouldShowLabel, setShouldShowLabel }} />
      <TodoStatusForm props={{ todo, updateTodo }} />
    </div>
  )
}

export default Todo
