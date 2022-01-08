import React, { useState } from 'react'
import { RenameForm, TodoStatusForm, TodoSettings } from './components'
import { TodoType, R_2 } from '../../models/index.model'
import useBehaviorSubject from '../../../../pages/rxjs/components/subject/hooks'
import { BehaviorSubject } from 'rxjs'

type Props = {
  props: {
    todo: TodoType
    updateTodo: R_2['updateTodo']
    deleteTodo: R_2['deleteTodo']
    logDraggable: R_2['logDraggable']
    logOver: R_2['logOver']
    changeOrder: R_2['changeOrder']
  }
}

const Todo: React.FC<Props> = ({ props }) => {
  const { todo, updateTodo, deleteTodo, logDraggable, logOver, changeOrder } = props
  const [shouldShowLabel, setShouldShowLabel] = useState(true)
  const { field: shouldShowMenu, updateField: setShouldShowMenu } = useBehaviorSubject(
    new BehaviorSubject(false),
    false
  )

  const label = shouldShowLabel && <h2 className="todo__label">{todo.label}</h2>

  return (
    <li
      draggable={true}
      onDragStart={() => logDraggable(todo)}
      onDragOver={() => logOver(todo)}
      onDragEnd={changeOrder}
    >
      {label || <RenameForm props={{ updateTodo, setShouldShowLabel, todo, setShouldShowMenu }} />}
      <TodoSettings
        props={{ todo, deleteTodo, shouldShowLabel, setShouldShowLabel, shouldShowMenu, setShouldShowMenu }}
      />
      <TodoStatusForm props={{ todo, updateTodo }} />
    </li>
  )
}

export default Todo
