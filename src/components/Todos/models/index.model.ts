import { useAllLocalStateTodos } from '../hooks/useAllLocalState__Todos'

export enum DropPosition {
  before = 'before',
  after = 'after',
}
export enum TodoStatus {
  Done = 'done',
  Doing = 'doing',
  notStarted = 'not started',
}

export type TodoType = {
  id: number
  label: string
  status: TodoStatus
  order: number
}

export type R_2 = ReturnType<typeof useAllLocalStateTodos>
