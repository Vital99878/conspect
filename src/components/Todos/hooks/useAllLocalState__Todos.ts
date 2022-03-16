import { DropPosition, TodoStatus, TodoType } from '../models/index.model'
import { useRef, useState } from 'react'

export const initialTodos: TodoType[] = [
  { id: 0, label: 'todo 0', status: TodoStatus.notStarted, order: 0 },
  { id: 1, label: 'todo 1', status: TodoStatus.Done, order: 1 },
  { id: 2, label: 'todo 2', status: TodoStatus.Doing, order: 2 },
  { id: 3, label: 'todo 3', status: TodoStatus.Doing, order: 3 },
  { id: 4, label: 'todo4', status: TodoStatus.Done, order: 4 },
  { id: 5, label: 'todo 5', status: TodoStatus.Done, order: 5 },
]

export type R = {
  todoList: TodoType[]
  addTodo(newTodo: TodoType): void
  deleteTodo(deletedTodo: TodoType): void
  updateTodo(updatedTodo: TodoType): void
  changeOrder: () => void
  getReplaceableTodo: (overTodo: TodoType) => void
  dragTodo: (draggableTodo: TodoType) => void
  setDragPos: (dropPos: DropPosition) => void
}

export function useAllLocalStateTodos(todos: TodoType[] = initialTodos): R {
  const [todoList, setTodoList] = useState(todos)
  const draggableTodoRef = useRef<TodoType | null>(null)
  const replaceableTodoRef = useRef<TodoType | null>(null)
  const dragPositionRef = useRef(DropPosition.before)

  const addTodo = (newTodo: TodoType) => {
    console.log('newTodo: ', newTodo)
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

  const dragTodo = (todo: TodoType) => {
    draggableTodoRef.current = todo
    draggableTodoRef.current.id !== todo.id ? (draggableTodoRef.current = todo) : null
  }

  function setDragPos(pos: DropPosition) {
    if (dragPositionRef.current !== pos) dragPositionRef.current = pos
  }

  /**
   * @description захватывает todo, который нужно поменять местами с перетаскиваемым todo.
   *
   */

  const getReplaceableTodo = (todo: TodoType) => {
    replaceableTodoRef.current = todo
    replaceableTodoRef.current.id !== todo.id ? (replaceableTodoRef.current = todo) : null
  }

  /**
   * @description ставит todo над выбранным в списке
   * ! Работает если тащить нижний туду наверх
   *
   */

  const insertDraggableBeforeTodo = (draggableOrder: number, underDraggableOrder: number) => {
    const draggingTodo = draggableTodoRef.current as TodoType
    if (draggableOrder < underDraggableOrder) {
      if (underDraggableOrder - draggableOrder === 0) return
      setTodoList((todos) => {
        let newOrder = draggableOrder
        return todos.map((todo) => {
          if (todo.id === draggingTodo.id) {
            todo.order = underDraggableOrder - 1
            return todo
          }
          if (todo.order >= draggableOrder && todo.order < underDraggableOrder) {
            todo.order = newOrder++
            return todo
          }
          return todo
        })
      })
    }
    if (draggableOrder > underDraggableOrder) {
      setTodoList((todos) => {
        let newOrder = underDraggableOrder
        return todos.map((todo) => {
          if (todo.id === draggingTodo.id) {
            todo.order = underDraggableOrder
            return todo
          }
          if (todo.order >= underDraggableOrder) {
            todo.order = ++newOrder
            return todo
          }
          return todo
        })
      })
    }
  }

  const insertDraggableAfterTodo = (draggableOrder: number, underDraggableOrder: number) => {
    const draggingTodo = draggableTodoRef.current as TodoType
    if (draggableOrder < underDraggableOrder) {
      setTodoList((todos) => {
        let newOrder = draggableOrder
        return todos.map((todo) => {
          if (todo.id === draggingTodo.id) {
            todo.order = underDraggableOrder
            return todo
          }
          if (todo.order >= draggableOrder && todo.order <= underDraggableOrder) {
            todo.order = newOrder++
            return todo
          }
          return todo
        })
      })
    }
    if (draggableOrder > underDraggableOrder) {
      if (draggableOrder - underDraggableOrder === 1) return
      setTodoList((todos) => {
        let newOrder = underDraggableOrder + 1
        return todos.map((todo) => {
          if (todo.id === draggingTodo.id) {
            todo.order = underDraggableOrder + 1
            return todo
          }
          if (todo.order > underDraggableOrder && todo.order < draggableOrder) {
            todo.order = ++newOrder
            return todo
          }
          return todo
        })
      })
    }
  }

  function replaceTodos() {
    // при отпускании мыши почему-то срабатывает еще раз logDraggable
    // из-за этого захватывается новый todo, который равен заменяемому
    const draggingTodo = draggableTodoRef.current as TodoType
    const replaceableTodo = replaceableTodoRef.current as TodoType
    const first = draggingTodo.order
    const second = replaceableTodo.order

    setTodoList((todos) =>
      todos.map((todo) => {
        if (todo.id === draggingTodo.id) {
          todo.order = second
          return todo
        }
        if (todo.id === replaceableTodo.id) {
          todo.order = first
          return todo
        }
        return todo
      })
    )
  }

  const changeOrder = () => {
    const draggingTodo = draggableTodoRef.current as TodoType
    const replaceableTodo = replaceableTodoRef.current as TodoType
    const draggableOrder = draggingTodo.order
    const underDraggableOrder = replaceableTodo.order

    if (DropPosition.before === dragPositionRef.current) {
      insertDraggableBeforeTodo(draggableOrder, underDraggableOrder)
    }
    if (DropPosition.after === dragPositionRef.current) {
      insertDraggableAfterTodo(draggableOrder, underDraggableOrder)
    }
  }

  return {
    todoList: todoList.sort((a, b) => a.order - b.order),
    addTodo,
    deleteTodo,
    updateTodo,
    dragTodo,
    getReplaceableTodo,
    changeOrder,
    setDragPos,
  }
}
