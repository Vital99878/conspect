import { TodoType } from '../components/Todo/Todo'
import { useState } from 'react'

const initialTodos: TodoType[] = [
  { id: 1, label: 'new', status: 'done' },
  { id: 2, label: 'new 2', status: 'doing' },
]

export function useAllLocalStateTodos(todos: TodoType[] = initialTodos) {
  const [todoList, setTodoList] = useState(todos)
  const [filter, setFilter] = useState<TodoType['status'] | ''>('')

  const addTodo = (newTodo: TodoType) => {
    setTodoList((todos) => [newTodo, ...todos])
  }
  const deleteTodo = (deletedTodo: TodoType) => {
    setTodoList((todos) => todos.filter((todo) => todo.id !== deletedTodo.id))
  }
  const updateTodo = (updatedTodo: TodoType) => {
    setTodoList((todos) =>
      todos.map((todo) => {
        return todo.id === updatedTodo.id ? updatedTodo : todo
      })
    )
  }

  return {
    todoList: todoList.filter((todo) => (filter === '' ? true : todo.status === filter)),
    addTodo,
    deleteTodo,
    updateTodo,
    setFilter,
  }
}
