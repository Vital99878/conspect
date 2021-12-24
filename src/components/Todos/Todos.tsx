import React from 'react'
import './Todos.scss'
import Todo from './components/Todo/Todo'
import AddTodoForm from './components/AddTodoForm/AddTodoForm'
import { useTodos } from './hooks/useAllLocalState__Todos'

const Todos: React.FC = () => {
  const { todoList, deleteTodo, addTodo, renameTodo } = useTodos()
  return (
    <article className="todos">
      <ul>
        {todoList.map((todo) => (
          <Todo props={{ todo, deleteTodo, renameTodo }} key={todo.id} />
        ))}
      </ul>
      <AddTodoForm props={{ addTodo }} />
    </article>
  )
}

export default Todos
