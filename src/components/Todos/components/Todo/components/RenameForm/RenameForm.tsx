import React, { Dispatch, MutableRefObject, RefObject, SetStateAction, useEffect, useRef, useState } from 'react'
import { TodoType } from '../../Todo'
import './RenameForm.scss'

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
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  function onChangeLabel(evt: any) {
    setNewLabel(evt.target.value.trim())
  }
  function onSubmit() {
    if (!newLabel) return
    updateTodo({ ...todo, label: newLabel })
    setIsChangeLabel(false)
  }

  return (
    <form action="" onSubmit={onSubmit}>
      <input className="rename" ref={inputRef} value={newLabel} type="text" onChange={onChangeLabel} />
    </form>
  )
}

export default RenameForm
