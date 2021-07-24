export type TodoType = { label: string; id: number; status: 'done' | 'doing' }

export type TodoProps = {
  props: { todo: TodoType; deleteTodo: (id: number) => void }
}
export type TodosProps = { todos: TodoType[] }

export type AddTodoProps = {
  addTodo: (text: string) => void
}
