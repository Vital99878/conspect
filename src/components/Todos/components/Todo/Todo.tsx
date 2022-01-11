import React, { useState } from 'react'
import { RenameForm, TodoSettings, TodoStatusForm } from './components'
import { DropPosition, R_2, TodoType } from '../../models/index.model'
import useBehaviorSubject from '../../../../pages/rxjs/components/subject/hooks'
import { BehaviorSubject } from 'rxjs'

type Props = {
  props: {
    todo: TodoType
    updateTodo: R_2['updateTodo']
    deleteTodo: R_2['deleteTodo']
    dragTodo: R_2['dragTodo']
    getReplaceableTodo: R_2['getReplaceableTodo']
    changeOrder: R_2['changeOrder']
    setDragPos: R_2['setDragPos']
  }
}

const Todo: React.FC<Props> = ({ props }) => {
  const { todo, updateTodo, deleteTodo, dragTodo, getReplaceableTodo, changeOrder, setDragPos } = props
  const [shouldShowLabel, setShouldShowLabel] = useState(true)
  const { field: shouldShowMenu, updateField: setShouldShowMenu } = useBehaviorSubject(
    new BehaviorSubject(false),
    false
  )

  const label = shouldShowLabel && <h2 className="todo__label">{todo.label}</h2>
  function dragOver(evt: any) {
    evt.preventDefault()
    const todoHtmlItem = evt.target
    const box = todoHtmlItem.getBoundingClientRect()
    const halfHeight = box.height / 2
    setDragPos(evt.clientY <= box.y + halfHeight ? DropPosition.before : DropPosition.after)
    getReplaceableTodo(todo)
  }

  return (
    <li
      draggable={true}
      onDragStart={() => dragTodo(todo)}
      onDragOver={dragOver}
      onDragEnd={changeOrder}
      className={'todo'}
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
