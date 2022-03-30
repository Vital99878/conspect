import { insertItemAfterTarget, insertItemBeforeTarget } from '../../../helpers'
import { SingletonMethods } from '../../../pages/desing-pattern/components/Test-Singleton/SingletonMethods'
import { DragAndDropData } from '../components/utils'
import { DropPosition, TodoStatus, TodoType } from '../models/index.model'
import { useRef, useState } from 'react'

export const initialTodos: TodoType[] = [
  { id: 0, label: 'todo 0', status: TodoStatus.notStarted, order: 0 },
  { id: 1, label: 'todo 1', status: TodoStatus.Done, order: 1 },
  { id: 2, label: 'todo 2', status: TodoStatus.Doing, order: 2 },
  { id: 3, label: 'todo 3', status: TodoStatus.Doing, order: 3 },
  { id: 4, label: 'todo 4', status: TodoStatus.Done, order: 4 },
  { id: 5, label: 'todo 5', status: TodoStatus.Done, order: 5 },
]

export type R = {
  todoList: TodoType[]
  addTodo(newTodo: TodoType): void
  deleteTodo(deletedTodo: TodoType): void
  updateTodo(updatedTodo: TodoType): void
  changeOrder: () => void
}

export function useAllLocalStateTodos(todos: TodoType[] = initialTodos): TodoType[] {
  const [todoList, setTodoList] = useState(todos)

  const addTodo = (newTodo: TodoType) => {
    console.log('newTodo: ', newTodo)
    setTodoList((todos) => [newTodo, ...todos])
    console.log('todoList: ', todoList)
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

  const changeOrder = () => {
    const { draggableIndex, targetIndex, pos } = DragAndDropData.getInstance()

    if (draggableIndex < 0 || targetIndex < 0) return DragAndDropData.clearInstance()

    if (DropPosition.before === pos) {
      setTodoList((todos) => insertItemBeforeTarget(todos, draggableIndex, targetIndex))
    }

    if (DropPosition.after === pos) {
      setTodoList((todos) => insertItemAfterTarget(todos, draggableIndex, targetIndex))
    }

    DragAndDropData.clearInstance()
  }

  SingletonMethods.setMethods('todos', { addTodo, deleteTodo, updateTodo, changeOrder })

  return todoList
}
