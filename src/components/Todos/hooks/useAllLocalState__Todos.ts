import { TodoStatus, TodoType } from '../models/index.model'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { BehaviorSubject } from 'rxjs'

const initialTodos: TodoType[] = [
  { id: 1, label: 'todo 1', status: TodoStatus.notStarted },
  { id: 3, label: 'todo 3', status: TodoStatus.Doing },
  { id: 2, label: 'todo 2', status: TodoStatus.Doing },
]
export const shouldShowTodoSettings = new BehaviorSubject(false)

export type R = {
  todoList: TodoType[]
  addTodo(newTodo: TodoType): void
  deleteTodo(deletedTodo: TodoType): void
  updateTodo(updatedTodo: TodoType): void
  changeOrder([draggableTodo, changeTodo]: [TodoType, TodoType]): void
  setFilter: Dispatch<SetStateAction<TodoStatus>>
  logOver: (overTodo: TodoType) => void
  logDraggable: (draggableTodo: TodoType) => void
}

export function useAllLocalStateTodos(todos: TodoType[] = initialTodos): R {
  const [todoList, setTodoList] = useState(todos)
  const [filter, setFilter] = useState<TodoStatus>(TodoStatus.notStarted)
  const [draggableTodo, setDraggableTodo] = useState(todoList[0])
  const [overTodo, setOverTodo] = useState(todoList[0])

  useEffect(() => {
    if (draggableTodo.id !== overTodo.id) {
      setTodoList((todos) => {
          return todos.map((todo) => {
            if (todo.id === draggableTodo.id) {
              todo.id = overTodo.id
              return todo
            }
            if (todo.id === overTodo.id) {
              todo.id = draggableTodo.id
              return todo
            }
            return todo
          })
      })
    }
  }, [draggableTodo, overTodo])

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

  const changeOrder = ([draggableTodo, changeTodo]: [TodoType, TodoType]) => {
    console.log(draggableTodo, changeTodo)
    setTodoList((todos) => {
      // console.log('sort')
      //   return todos.map((todo) => {
      //     if (todo.id === draggableTodo.id) {
      //       todo.id = changeTodo.id
      //       return todo
      //     }
      //     if (todo.id === changeTodo.id) {
      //       todo.id = draggableTodo.id
      //       return todo
      //     }
      //     return todo
      //   })
      return todos
    })
  }
  const logOver = (todo: TodoType) => {
    if (overTodo.id !== todo.id) setOverTodo(todo)
  }
  const logDraggable = (todo: TodoType) => {
    if (draggableTodo.id !== todo.id) setDraggableTodo(todo)
  }

  return {
    // todoList,
    todoList: todoList.sort((a, b) => a.id - b.id),
    addTodo,
    deleteTodo,
    updateTodo,
    setFilter,
    changeOrder,
    logDraggable,
    logOver,
  }
}
