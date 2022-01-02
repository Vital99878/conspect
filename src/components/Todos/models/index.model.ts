import { useAllLocalStateTodos } from '../hooks/useAllLocalState__Todos'

export enum TodoStatus {
  Done = 'done',
  Doing = 'doing',
  notStarted = 'not started',
}

export type TodoType = {
  id: number
  label: string
  status: TodoStatus
}

export type R_2 = ReturnType<typeof useAllLocalStateTodos>
