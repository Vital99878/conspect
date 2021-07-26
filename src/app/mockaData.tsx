type T = {
  id: number
  title: string
  status: 'doing' | 'done'
}
export const initialTodod: T[] = [
  { id: 1, title: 'Coffee', status: 'done' },
  { id: 2, title: 'to buy a tea', status: 'doing' },
  { id: 3, title: 'Coffee', status: 'done' },
]
