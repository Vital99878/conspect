import React, { useEffect } from 'react';
import './Todos.scss';
import { SingletonMethods } from '../../pages/desing-pattern/components/Test-Singleton/SingletonMethods';
import AbsolutePositionMenu from '../WraperComponent-HiddenButton/AbsolutePositionMenu';
import { AddTodoForm, Todo, TodosFilter } from './components';
import { useAllLocalStateTodos } from './hooks/useAllLocalState__Todos';
import { initialButtonsFilters } from './components/TodosFilter/hook/useButtonsFilter';
import { initialTodos } from './hooks/useAllLocalState__Todos';
import { useButtonFilter } from './components/TodosFilter/hook/useButtonsFilter';

const Todos: React.FC = () => {
  const todoList = useAllLocalStateTodos(initialTodos);
  const { buttons, toggleActiveButton, isActiveButton } = useButtonFilter(initialButtonsFilters, todoList);
  const visibleTodos = !isActiveButton ? todoList : todoList.filter((todo) => todo.status === isActiveButton);

  // clear Singleton Methods
  useEffect(() => {
    return () => SingletonMethods.destroyMethods('todos');
  }, []);

  return (
    <article className="todos">
      <AbsolutePositionMenu />
      <AddTodoForm props={{ order: todoList.length + 1 }} />
      <ul>
        {visibleTodos.map((todo, index) => (
          <Todo props={{ todo, todoIndex: index }} key={todo.id} />
        ))}
      </ul>
      <TodosFilter props={{ buttons, toggleActiveButton }} />
    </article>
  );
};

export default Todos;
