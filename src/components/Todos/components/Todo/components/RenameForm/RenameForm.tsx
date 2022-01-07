import React, { ChangeEvent, Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { TodoType, R_2 } from '../../../../models/index.model'
import './RenameForm.scss'
import { useOutsideClickCallback } from '../../../../../../hooks/useClickOutside'
import useBehaviorSubject from '../../../../../../pages/rxjs/components/subject/hooks'
import { shouldShowTodoSettings } from '../../../../hooks/useAllLocalState__Todos'

type Props = {
  props: {
    updateTodo: R_2['updateTodo']
    setShouldShowLabel: Dispatch<SetStateAction<boolean>>
    setShouldShowMenu: any
    todo: TodoType
  }
}

const RenameForm: React.FC<Props> = ({ props }) => {
  const { updateTodo, setShouldShowLabel, todo, setShouldShowMenu } = props
  const inputRef = useRef<HTMLInputElement>(null)
  const { updateField: set } = useBehaviorSubject(shouldShowTodoSettings, false)

  const [label, setLabel] = useState(todo.label)

  useOutsideClickCallback(inputRef, onSubmit, [label])

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  function onChangeLabel(evt: ChangeEvent<HTMLInputElement>) {
    setLabel(evt.target.value)
  }

  function onSubmit() {
    if (!label) return
    updateTodo({ ...todo, label: label.trim() })
    setShouldShowLabel(true)
    set(false)
    setShouldShowMenu(false)
  }

  return (
    <form action="" onSubmit={onSubmit}>
      <input className="rename" ref={inputRef} value={label} type="text" onChange={onChangeLabel} />
    </form>
  )
}

export default RenameForm
