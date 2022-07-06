import { TodoType, TodoStatus } from '../models/index.model';
import todos from '../Todos';

export const initialTodos: TodoType[] = [
  { id: 1, label: 'todo 1', status: TodoStatus.notStarted, order: 1 },
  { id: 4, label: 'todo 4', status: TodoStatus.Doing, order: 4 },
  { id: 5, label: 'todo 5', status: TodoStatus.Done, order: 5 },
  { id: 2, label: 'todo 2', status: TodoStatus.Done, order: 2 },
  { id: 3, label: 'todo 3', status: TodoStatus.Doing, order: 3 },
];
export const todoData: todos = {
  todos: initialTodos,
  addTodo(newTodo: TodoType): void {
    this.todos.push(newTodo);
  },
  deleteTodo(deletedTodo: TodoType): void {
    this.todos = this.todos.filter((todo) => todo.id !== deletedTodo.id);
  },
  updateTodo(updatedTodo: TodoType): void {
    this.todos = this.todos.map((todo) => {
      if (todo.id === updatedTodo.id) {
        todo = updatedTodo;
      }
      return todo;
    });
  },
};

export interface todos {
  todos: TodoType[];
  addTodo(newTodo: TodoType): void;
  deleteTodo(deletedTodo: TodoType): void;
  updateTodo(updatedTodo: TodoType): void;
}
export class TodosSingleton {
  private static instance: todos;
  static createInstance(store: todos): todos {
    if (TodosSingleton.instance) throw new Error('Instance already exist! Please, use getInstance method');
    if (!TodosSingleton.instance) TodosSingleton.instance = store;
    return TodosSingleton.instance;
  }
  static getInstance(): todos | never {
    if (!TodosSingleton.instance) throw new Error('');
    return TodosSingleton.instance;
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}
}
