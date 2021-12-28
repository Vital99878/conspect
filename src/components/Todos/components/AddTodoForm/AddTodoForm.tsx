import React, { useState } from 'react'
import {TodoType} from '../Todo/Todo';

type AddTodoFormProps = {
  props: {
    addTodo: (todo: TodoType) => void
  }
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ props }) => {
  const [label, setLabel] = useState('')
  const { addTodo } = props

  const createTodo = (evt: any) => {
    evt.preventDefault()
    if (!label) return
    setLabel('')
    addTodo({id: Math.random()*555, label: label, status: 'doing'})
  }
  const onChangeLabel = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLabel = e.target.value
    setLabel(newLabel)
  }

  return (
    <form>
      <input value={label} onChange={onChangeLabel} className="todo__label" />
      <button onClick={createTodo}>Add Todo</button>
    </form>
  )
}

export default AddTodoForm
