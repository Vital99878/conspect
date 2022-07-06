type Status = {
  status: string;
};

export function todosStatusCount<T extends Status>(todos: T[], status: string): number {
  return todos.filter((todo) => todo.status === status).length;
}
