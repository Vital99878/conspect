import { TodoType } from '../components/Todo/Todo'
import { useState } from 'react'

const initialTodos: TodoType[] = [
  { id: 1, label: 'new', status: 'doing' },
  { id: 2, label: 'new 2', status: 'doing' },
]

export function useAllLocalStateTodos(todos: TodoType[] = initialTodos) {
  const [todoList, setTodoList] = useState(todos)

  const addTodo = (label: string) => {
    const newTodo: TodoType = { id: Math.random(), label, status: 'doing' }
    setTodoList((todos) => [newTodo, ...todos])
  }
  const deleteTodo = (id: number) => {
    setTodoList((todos) => todos.filter((todo) => todo.id !== id))
  }
  const renameTodo = (renamedTodo: Partial<TodoType>) => {
    setTodoList((todos) =>
      todos.map((todo) => {
        if (todo.id === renamedTodo.id) {
          todo.label = 'new label'
          return todo
        }
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
