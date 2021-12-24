import React from 'react'

export type TodoType = {
  id: number
  label: string
  status: 'doing' | 'done'
}
type TodoProps = {
  props: {
    todo: TodoType
    deleteTodo: (id: number) => void
    renameTodo: (renamedTodo: Partial<TodoType>) => void
  }
}
export type TodoListProps = {
  props?: {
    todos: TodoType[]
  }
}

const Todo: React.FC<TodoProps> = ({ props }) => {
  const { deleteTodo, renameTodo, todo } = props
  const { id, label, status } = todo

  return (
    <li>
      <div className="todo__label">{label}</div>
      <div>{status}</div>
      <button onClick={() => deleteTodo(id)}>Delete Todo</button>
      <button onClick={() => renameTodo({ id, label: 'new name' })}>Rename</button>
    </li>
  )
}

export default Todo
