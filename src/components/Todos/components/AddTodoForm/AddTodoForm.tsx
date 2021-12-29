import React, { useState } from 'react'
import { TodoType } from '../Todo/Todo'
import Required from './components/RequiredInputWrapper'
import RequiredInputWrapper from './components/RequiredInputWrapper'

type AddTodoFormProps = {
  props: {
    addTodo: (todo: TodoType) => void
  }
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ props }) => {
  const { addTodo } = props
  const [label, setLabel] = useState('')

  const createTodo = (evt: any) => {
    evt.preventDefault()
    if (!label || label.trim().length <= 8) return
    setLabel('')
    addTodo({ id: Math.random() * 555, label, status: 'done' })
  }
  const onChangeLabel = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLabel = e.target.value
    setLabel(newLabel)
  }

  function requiredHandler(label: string) {
    if (!label.length) return { isRequired: label.length === 0, message: 'name required' }
    if (label.trim().length <= 8) return { isRequired: true, message: 'name need more then 8' }
    return { isRequired: false, message: 'name need more then 8' }
  }

  return (
    <form>
       <Required props={{ ...requiredHandler(label) }}>
        <input value={label} onChange={onChangeLabel} className="todo__label" />
       </Required>
       <button onClick={createTodo}>Add Todo</button>
    </form>
  )
}

export default AddTodoForm
