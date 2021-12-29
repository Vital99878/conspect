import React, { Dispatch, MutableRefObject, RefObject, SetStateAction, useEffect, useRef, useState } from 'react'
import { TodoType } from '../../Todo'
import './RenameForm.scss'
import { useOutsideClickCallback } from '../../../../../../hooks/useClickOutside'

type Props = {
  props: {
    updateTodo: (updatedTod: TodoType) => void
    setIsChangeLabel: Dispatch<SetStateAction<boolean>>
    todo: TodoType
  }
}

const RenameForm: React.FC<Props> = ({ props }) => {
  // Todo useClickOutside для вызова onSubmit
  // Todo required input field
  const { updateTodo, setIsChangeLabel, todo } = props
  const inputRef = useRef<HTMLInputElement>(null)

  const [newLabel, setNewLabel] = useState(todo.label)

  useOutsideClickCallback(inputRef, onSubmit, [newLabel])

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  function onChangeLabel(evt: any) {
    setNewLabel(evt.target.value)
  }

  function onSubmit() {
    if (!newLabel) return
    updateTodo({ ...todo, label: newLabel.trim() })
    setIsChangeLabel(false)
  }

  return (
    <form action="" onSubmit={onSubmit}>
      <input className="rename" ref={inputRef} value={newLabel} type="text" onChange={onChangeLabel} />
    </form>
  )
}

export default RenameForm
