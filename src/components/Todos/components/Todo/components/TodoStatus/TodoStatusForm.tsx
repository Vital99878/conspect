import React from 'react'
import { R_2, TodoStatus, TodoType } from '../../../../models/index.model'
import { initialButtonsFilters } from '../../../TodosFilter/hook/useButtonsFilter'
import { ValueMouseEvent } from '../../../../../../types/ValueMouseEvent.model'

type Props = {
  props: {
    updateTodo: R_2['updateTodo']
    todo: TodoType
  }
}

const TodoStatusForm: React.FC<Props> = ({ props }) => {
  const { updateTodo, todo } = props
  const updateStatus = (evt: ValueMouseEvent<TodoStatus>) => {
    evt.preventDefault()
    const status = evt.target.value
    updateTodo({ ...todo, status })
  }
  return (
    <form>
      {initialButtonsFilters.map((button) => {
        if (button.value) {
          return (
            <button
              key={button.textContent}
              className={todo.status === button.value ? 'buttonFilter--active' : 'buttonFilter'}
              onClick={updateStatus}
              value={button.textContent}
            >
              {button.textContent}
            </button>
          )
        }
      })}
    </form>
  )
}

export default TodoStatusForm
