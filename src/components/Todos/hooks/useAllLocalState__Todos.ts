import { TodoStatus, TodoType } from '../models/index.model'
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { BehaviorSubject } from 'rxjs'

const initialTodos: TodoType[] = [
  { id: 1, label: 'todo 1', status: TodoStatus.notStarted, order: 1 },
  { id: 2, label: 'todo 2', status: TodoStatus.Done, order: 2 },
  { id: 3, label: 'todo 3', status: TodoStatus.Doing, order: 3 },
]
export const shouldShowTodoSettings = new BehaviorSubject(false)

export type R = {
  todoList: TodoType[]
  addTodo(newTodo: TodoType): void
  deleteTodo(deletedTodo: TodoType): void
  updateTodo(updatedTodo: TodoType): void
  changeOrder: () => void
  setFilter: Dispatch<SetStateAction<TodoStatus>>
  logOver: (overTodo: TodoType) => void
  logDraggable: (draggableTodo: TodoType) => void
}

export function useAllLocalStateTodos(todos: TodoType[] = initialTodos): R {
  const [todoList, setTodoList] = useState(todos)
  const [filter, setFilter] = useState<TodoStatus>(TodoStatus.notStarted)
  const draggableTodoRef = useRef(todoList[0])
  const overTodoRef = useRef(todoList[0])

  // console.log('todoList: ', todoList)

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

  /**
   * @description захватывает todo, который перетаскивается.
   *
   */

  const logDraggable = (todo: TodoType) => {
    draggableTodoRef.current.id !== todo.id ? (draggableTodoRef.current = todo) : null
  }

  /**
   * @description захватывает todo, который нужно поменять местами с перетаскиваемым todo.
   *
   */

  const logOver = (todo: TodoType) => {
    overTodoRef.current.id !== todo.id ? (overTodoRef.current = todo) : null
  }
  /**
   * @description реализация draggable. Меняет перетаскиваемый туду на тот, который под ним. А тот который под ним становится на место перетаскиваемого.
   * Нужно сделать, чтобы можно было перетащить todo между двумя другими!
   *
   */
  const changeOrder = () => {
    // при отпускании мыши почему-то срабатывает еще раз logDraggable
    // из-за этого захватывается новый todo, который равен заменяемому

    const first = draggableTodoRef.current.order
    const second = overTodoRef.current.order

    setTodoList((todos) =>
      todos.map((todo) => {
        if (todo.id === draggableTodoRef.current.id) {
          todo.order = second
          return todo
        }
        if (todo.id === overTodoRef.current.id) {
          todo.order = first
          return todo
        }
        return todo
      })
    )
  }

  return {
    // todoList,
    todoList: todoList.sort((a, b) => a.order - b.order),
    addTodo,
    deleteTodo,
    updateTodo,
    setFilter,
    changeOrder,
    logDraggable,
    logOver,
  }
}
