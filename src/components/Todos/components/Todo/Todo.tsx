import React, { useEffect, useRef, useState } from 'react'
import { SingletonMethods } from '../../../../pages/desing-pattern/components/Test-Singleton/SingletonMethods'
import { DragAndDropData } from '../utils'
import { RenameForm, TodoSettings, TodoStatusForm } from './components'
import { DropPosition, R_2, TodoType } from '../../models/index.model'
import useBehaviorSubject from '../../../../pages/rxjs/components/subject/hooks'
import { BehaviorSubject } from 'rxjs'
import ReactDOM from 'react-dom'

type Props = {
  props: {
    todo: TodoType
    todoIndex: number
    // updateTodo: R_2['updateTodo']
    // deleteTodo: R_2['deleteTodo']
    // changeOrder: R_2['changeOrder']
  }
}

const Todo: React.FC<Props> = ({ props }) => {
  const { todo, todoIndex } = props
  const { addTodo, deleteTodo, updateTodo, changeOrder } = SingletonMethods.getMethods('todos')
  const [shouldShowLabel, setShouldShowLabel] = useState(true)
  const { field: shouldShowMenu, updateField: setShouldShowMenu } = useBehaviorSubject(
    new BehaviorSubject(false),
    false
  )

  const label = shouldShowLabel && <h2 className="todo__label">{todo.label}</h2>

  const dragAndDropData = DragAndDropData.getInstance()

  function handleDragOver(evt: React.DragEvent<HTMLLIElement>) {
    evt.preventDefault()
    const replaceableTodoEl = evt.target as HTMLLIElement
    const box = replaceableTodoEl.getBoundingClientRect()
    const halfHeight = box.height / 2
    const dropPos = evt.clientY <= box.y + halfHeight ? DropPosition.before : DropPosition.after

    DragAndDropData.setTargetIndex(todoIndex)
    DragAndDropData.setPos(dropPos)
  }

  return (
    <li
      id={todo.id.toString()}
      draggable={true}
      onDragStart={() => DragAndDropData.setDraggableIndex(todoIndex)}
      onDragOver={handleDragOver}
      onDragEnd={changeOrder}
      className={`todo`}
    >
      {label || <RenameForm props={{ setShouldShowLabel, todo, setShouldShowMenu }} />}
      <TodoSettings
        props={{ todo, shouldShowLabel, setShouldShowLabel, shouldShowMenu, setShouldShowMenu }}
      />
      <TodoStatusForm props={{ todo }} />
    </li>
  )
}

export default Todo
