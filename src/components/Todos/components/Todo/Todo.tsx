import React, { useEffect, useRef, useState } from 'react'
import { RenameForm, TodoSettings, TodoStatusForm } from './components'
import { DropPosition, R_2, TodoType } from '../../models/index.model'
import useBehaviorSubject from '../../../../pages/rxjs/components/subject/hooks'
import { BehaviorSubject } from 'rxjs'
import ReactDOM from 'react-dom'

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
  const draggingTodoRef = useRef<HTMLLIElement | null>(null)
  const replaceableTodoRef = useRef<HTMLLIElement | null>(null)

  function handleDragStart(evt: React.DragEvent<HTMLLIElement>) {
    const draggingTodoEl = evt.target as HTMLLIElement
    draggingTodoRef.current = draggingTodoEl
    draggingTodoEl.classList.add('dragging')
    dragTodo(todo)
  }
  function handleDragEnd() {
    if (draggingTodoRef.current) draggingTodoRef.current.classList.remove('dragging')
    changeOrder()
  }
  function handleDragOver(evt: React.DragEvent<HTMLLIElement>) {
    evt.preventDefault()
    const replaceableTodoEl = evt.target as HTMLLIElement
    replaceableTodoRef.current = replaceableTodoEl
    const box = replaceableTodoEl.getBoundingClientRect()
    const halfHeight = box.height / 2
    const dropPos = evt.clientY <= box.y + halfHeight ? DropPosition.before : DropPosition.after

    setDragPos(dropPos)
    getReplaceableTodo(todo)
  }
  function handleDragLeave(evt: React.DragEvent<HTMLLIElement>) {
    const todoEl = evt.target as HTMLLIElement
    // console.log(`%celement on leave`, 'color:tomato; font-size: 14px')
    // console.log('todoEl: ', todoEl)
  }
  function handleDragEnter(evt: React.DragEvent<HTMLLIElement>) {
    const todoEl = evt.target as HTMLLIElement
    // console.log(`%celement on enter`, 'color:tomato; font-size: 14px')
    // console.log('todoEl: ', todoEl)
  }
  return (
    <li
      id={todo.id.toString()}
      draggable={true}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDragEnter={handleDragEnter}
      onDragEnd={handleDragEnd}
      className={`todo`}
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
