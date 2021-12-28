import { TodoType } from '../components/Todo/Todo'
import { useState } from 'react'

const initialTodos: TodoType[] = [
  { id: 1, label: 'new', status: 'doing' },
  { id: 2, label: 'new 2', status: 'doing' },
]

export function useAllLocalStateTodos(todos: TodoType[] = initialTodos) {
  const [todoList, setTodoList] = useState(todos)

  const addTodo = (newTodo: TodoType) => {
    setTodoList((todos) => [newTodo, ...todos])
  }
  const deleteTodo = (deletedTodo: TodoType) => {
    setTodoList((todos) => todos.filter((todo) => todo.id !== deletedTodo.id))
  }
  const renameTodo = (renamedTodo: TodoType) => {
    setTodoList((todos) =>
      todos.map((todo) => {
        todo.id === renamedTodo.id ? todo.label = 'new label' : null
        return todo
      })
    )
  }
  const changeStatusTodo = (updatedTodo: TodoType) => {
    setTodoList((todos) =>
      todos.map((todo) => {
        if (todo.id === updatedTodo.id) {
          todo.status = updatedTodo.status
          return todo
        }
        return todo
      })
    )
  }
  const filterTodo = (id: number) => {
    setTodoList((todos) => todos.filter((todo) => todo.id !== id))
  }

  return { todoList, addTodo, deleteTodo, renameTodo, filterTodo }
}
