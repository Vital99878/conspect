import React from 'react'
import './TodosFilter.scss'
import { R_2, TodoStatus, TodoType } from '../../models/index.model'
import { ValueMouseEvent } from '../../../../types/ValueMouseEvent.model'
import { ButtonFilter } from './hook/useButtonsFilter'

type Props = {
  props: {
    buttons: ButtonFilter[]
    toggleActiveButton: any
  }
}

const TodosFilter: React.FC<Props> = ({ props }) => {
  const { buttons, toggleActiveButton } = props

  return (
    <article className="todos-filter">
      {buttons.map((button) => {
        const textContent = `${button.textContent}: ${button.statusCount}`
        return (
          <button
            key={button.value}
            className={button.isActive ? 'buttonFilter--active' : 'buttonFilter'}
            value={button.value}
            onClick={(evt: ValueMouseEvent<TodoStatus>) => toggleActiveButton(evt.target.value)}
            disabled={button.statusCount < 1}
          >
            {textContent}
          </button>
        )
      })}
    </article>
  )
}

export default TodosFilter
