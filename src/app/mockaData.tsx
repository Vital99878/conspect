import { TodoType } from '../types/todosCompTypes'

const mockData = {
  str: 'new string',
  numbers: [1, 2, 3, 4, 5, 6, 7],
}

export default mockData

export const defaultTodos: TodoType[] = [
  { label: 'Coffe', id: 1, status: 'doing' },
  { label: 'Tea', id: 2, status: 'doing' },
  { label: 'Cookie', id: 3, status: 'doing' },
  { label: 'Get ts', id: 4, status: 'done' },
]
