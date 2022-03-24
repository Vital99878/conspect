import React, { ChangeEvent, Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { SingletonMethods } from '../../../../../../pages/desing-pattern/components/Test-Singleton/SingletonMethods'
import { TodoType, R_2 } from '../../../../models/index.model'
import './RenameForm.scss'
import { useClickOutside } from '../../../../../../hooks/useClickOutside'

type Props = {
  props: {
    setShouldShowLabel: Dispatch<SetStateAction<boolean>>
    setShouldShowMenu: any
    todo: TodoType
  }
}

const RenameForm: React.FC<Props> = ({ props }) => {
  const { setShouldShowLabel, todo, setShouldShowMenu } = props
  const {updateTodo} = SingletonMethods.getMethods('todos')
  const inputRef = useRef<HTMLInputElement>(null)

  const [label, setLabel] = useState(todo.label)

  useClickOutside(inputRef, onSubmit, [label])

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
    setShouldShowMenu(false)
  }

  return (
    <form action="" onSubmit={onSubmit}>
      <input className="rename" ref={inputRef} value={label} type="text" onChange={onChangeLabel} />
    </form>
  )
}

export default RenameForm
