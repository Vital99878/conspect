import React, { Dispatch, SetStateAction, useRef, useState } from 'react'
import './TodoSettings.scss'
import { SingletonMethods } from '../../../../../../pages/desing-pattern/components/Test-Singleton/SingletonMethods'
import { R_2, TodoType } from '../../../../models/index.model'
import { useClickOutside } from '../../../../../../hooks/useClickOutside'

type Props = {
  props: {
    todo: TodoType
    shouldShowLabel: boolean
    setShouldShowLabel: Dispatch<SetStateAction<boolean>>
    shouldShowMenu: boolean
    setShouldShowMenu: any
  }
}

const TodoSettings: React.FC<Props> = ({ props }) => {
  const { todo, shouldShowLabel, setShouldShowLabel, shouldShowMenu, setShouldShowMenu } = props
  const { deleteTodo } = SingletonMethods.getMethods('todos')

  const menuRef = useRef<HTMLDivElement>(null)

  function hideMenu() {
    if (shouldShowMenu) setShouldShowMenu(false)
  }

  useClickOutside(menuRef, hideMenu, [shouldShowMenu])

  const button = <button onClick={() => setShouldShowMenu(true)}>Settings</button>
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
