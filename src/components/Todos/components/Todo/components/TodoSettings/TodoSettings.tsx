import React, { Dispatch, SetStateAction, useRef, useState } from 'react'
import './TodoSettings.scss'
import { R_2, TodoType } from '../../../../models/index.model'

import { useOutsideClickCallback } from '../../../../../../hooks/useClickOutside'

type Props = {
  props: {
    deleteTodo: R_2['deleteTodo']
    todo: TodoType
    shouldShowLabel: boolean
    setShouldShowLabel: Dispatch<SetStateAction<boolean>>
  }
}

const TodoSettings: React.FC<Props> = ({ props }) => {
  const [shouldShowMenu, setShouldShowMenu] = useState(false)
  const { deleteTodo, todo, shouldShowLabel, setShouldShowLabel } = props
  const menuRef = useRef<HTMLDivElement>(null)

  function hideMenu() {
    console.log('hide')
    if (shouldShowMenu) setShouldShowMenu(false)
  }

  useOutsideClickCallback(menuRef, hideMenu, [shouldShowMenu])

  const button = <button onClick={() => setShouldShowMenu(true)}>Menu</button>
  const menu = (
    <div ref={menuRef} className={'todoSettings'}>
      <button onClick={() => deleteTodo(todo)}>Delete Todo</button>
      <button disabled={!shouldShowLabel} onClick={() => setShouldShowLabel(false)}>
        Rename
      </button>
    </div>
  )

  return shouldShowMenu ? menu : button
}

export default TodoSettings
