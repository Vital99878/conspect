import React, { FormEvent, useState } from 'react'
import { SingletonMethods } from '../../../../pages/desing-pattern/components/Test-Singleton/SingletonMethods'
import { R_2, TodoStatus } from '../../models/index.model'
import { TodosSingleton } from '../../hooks/todosSingleton'

type Props = {
  props: {order: number }
}

const AddTodoForm: React.FC<Props> = ({ props }) => {
  const { order } = props
  const {addTodo} = SingletonMethods.getMethods('todos')
  const [label, setLabel] = useState('')

  const createTodo = (evt: FormEvent) => {
    evt.preventDefault()
    const isMinLength = label.trim().length < 3
    if (!label || isMinLength) {
      setLabel('меньше 2 символов!')
      return
    }
    addTodo({ id: order, label, status: TodoStatus.notStarted, order })
    setLabel('')
  }
  const onChangeLabel = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLabel = e.target.value
    setLabel(newLabel)
  }

  return (
    <form onSubmit={createTodo}>
      <input value={label} onChange={onChangeLabel} className="todo__label" />
      <button onClick={createTodo}>Add Todo</button>
    </form>
  )
}

export default AddTodoForm
