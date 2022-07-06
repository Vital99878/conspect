import { useRef, useState } from 'react';
import { initialTodos } from '../../../../components/Todos/hooks/useAllLocalState__Todos';
import { TodoType } from '../../../../components/Todos/models/index.model';
import { SingletonMethods } from './SingletonMethods';

export function useSingletonMethods(todos: TodoType[] = initialTodos) {
  const [todoList, setTodoList] = useState(todos);

  const addTodo = (newTodo: TodoType) => {
    setTodoList((todos) => [newTodo, ...todos]);
  };

  const deleteTodo = (id: number) => {
    setTodoList((todos) => todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (updatedTodo: TodoType) => {
    setTodoList((todos) =>
      todos.map((todo) => {
        return todo.id === updatedTodo.id ? updatedTodo : todo;
      })
    );
  };

  SingletonMethods.setMethods('todo', { addTodo, deleteTodo, updateTodo });
  return todoList;
}
