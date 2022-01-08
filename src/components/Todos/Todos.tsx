import React from 'react'
import './Todos.scss'
import { Todo, AddTodoForm, TodosFilter } from './components'
import { useAllLocalStateTodos } from './hooks/useAllLocalState__Todos'
import AbsolutePositionMenu from '../WraperComponent-HiddenButton/AbsolutePositionMenu'
import { initialButtonsFilters } from './components/TodosFilter/hook/useButtonsFilter'
import { useButtonFilter } from './components/TodosFilter/hook/useButtonsFilter'

const Todos: React.FC = () => {
  const { todoList, addTodo, updateTodo, deleteTodo, changeOrder, logDraggable, logOver } = useAllLocalStateTodos()
  const { buttons, toggleActiveButton, isActiveButton } = useButtonFilter(initialButtonsFilters, todoList)
  const visibleTodos = !isActiveButton ? todoList : todoList.filter((todo) => todo.status === isActiveButton)

  return (
    <article className="todos">
      <AbsolutePositionMenu />
      <AddTodoForm props={{ addTodo }} />
      <ul>
        {visibleTodos.map((todo) => (
          <Todo props={{ todo, deleteTodo, updateTodo, logDraggable, logOver, changeOrder }} key={todo.id} />
        ))}
      </ul>
      <TodosFilter props={{ buttons, toggleActiveButton }} />
    </article>
  )
}

export default Todos
