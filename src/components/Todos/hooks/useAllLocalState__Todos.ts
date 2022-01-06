import { TodoStatus, TodoType } from '../models/index.model'
import { Dispatch, SetStateAction, useState } from 'react'

const initialTodos: TodoType[] = [
  { id: 1, label: 'new', status: TodoStatus.notStarted },
  { id: 2, label: 'new 2', status: TodoStatus.Doing },
]

export type R = {
  todoList: TodoType[]
  addTodo(newTodo: TodoType): void
  deleteTodo(deletedTodo: TodoType): void
  updateTodo(updatedTodo: TodoType): void
  setFilter: Dispatch<SetStateAction<TodoStatus>>
}

export function useAllLocalStateTodos(todos: TodoType[] = initialTodos): R {
  const [todoList, setTodoList] = useState(todos)
  const [filter, setFilter] = useState<TodoStatus>(TodoStatus.notStarted)

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
    todoList: todoList.filter((todo) => (filter === TodoStatus.notStarted ? true : todo.status === filter)),
    addTodo,
    deleteTodo,
    updateTodo,
    setFilter,
  }
}
