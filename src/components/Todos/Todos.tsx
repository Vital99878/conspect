import React from 'react'
import './Todos.scss'
import Todo from './components/Todo/Todo'
import AddTodoForm from './components/AddTodoForm/AddTodoForm'
import TodosFilter from './components/TodosFilter/TodosFilter'
import { useAllLocalStateTodos } from './hooks/useAllLocalState__Todos'

const Todos: React.FC = () => {
  const { todoList, addTodo, updateTodo, deleteTodo, setFilter } = useAllLocalStateTodos()

  return (
    <article className="todos">
      <ul>
        {todoList.map((todo) => (
          <Todo props={{ todo, deleteTodo, updateTodo }} key={todo.id} />
        ))}
      </ul>
      <AddTodoForm props={{ addTodo }} >div</AddTodoForm>
      <TodosFilter props={{ setFilter }} />
    </article>
  )
}

export default Todos
