import React from 'react'

export type TodoType = {
  id: number
  label: string
  status: 'doing' | 'done'
}
type TodoProps = {
  props: {
    todo: TodoType
    deleteTodo: (todo: TodoType) => void
    renameTodo: (renamedTodo: TodoType) => void
  }
}
export type TodoListProps = {
  props?: {
    todos: TodoType[]
  }
}

const Todo: React.FC<TodoProps> = ({ props }) => {
  const { deleteTodo, renameTodo, todo } = props

  return (
    <li>
      <div className="todo__label">{todo.label}</div>
      <div>{todo.status}</div>
      <button onClick={() => deleteTodo(todo)}>Delete Todo</button>
      <button onClick={() => renameTodo({...todo, ...{label: 'new name'}})}>Rename</button>
    </li>
  )
}

export default Todo
