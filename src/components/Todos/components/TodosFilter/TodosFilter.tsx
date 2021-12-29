import React, { useEffect, useState } from 'react'
import { TodoType } from '../Todo/Todo'

interface KonvaTextEventTarget extends EventTarget {
  value: TodoType['status'] | ''
}

interface KonvaMouseEvent extends React.MouseEvent<HTMLButtonElement> {
  target: KonvaTextEventTarget
}

type Props = {
  props: {
    setFilter: (filter: TodoType['status'] | '') => void
  }
}

const TodosFilter: React.FC<Props> = ({ props }) => {
  const { setFilter } = props

  return (
    <article className="todos-filter">
      <button value="done" onClick={(evt: KonvaMouseEvent) => setFilter(evt.target.value)}>
        Show done
      </button>
      <button value="doing" onClick={(evt: KonvaMouseEvent) => setFilter(evt.target.value)}>
        Show doing
      </button>
      <button value="" onClick={(evt: KonvaMouseEvent) => setFilter(evt.target.value)}>
        Show all
      </button>
    </article>
  )
}

export default TodosFilter
