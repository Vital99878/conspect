export type Statuses = 'done' | 'doing'
export type TodoType = { label: string; id: number; status: Statuses }

export type TodoProps = {
  todo: TodoType
  deleteTodo: (id: number) => void
}
export type TodosProps = { todos: TodoType[] }
