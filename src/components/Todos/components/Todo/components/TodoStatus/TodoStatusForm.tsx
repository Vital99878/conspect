import React from 'react';
import { SingletonMethods } from '../../../../../../desing-pattern/components/Test-Singleton/SingletonMethods';
import { R_2, TodoStatus, TodoType } from '../../../../models/index.model';
import { initialButtonsFilters } from '../../../TodosFilter/hook/useButtonsFilter';
import { ValueMouseEvent } from '../../../../../../types/ValueMouseEvent.model';

type Props = {
  props: {
    todo: TodoType;
  };
};

const TodoStatusForm: React.FC<Props> = ({ props }) => {
  const { todo } = props;
  const { updateTodo } = SingletonMethods.getMethods('todos');
  const updateStatus = (evt: ValueMouseEvent<TodoStatus>) => {
    evt.preventDefault();
    const status = evt.target.value;
    updateTodo({ ...todo, status });
  };
  return (
    <form>
      {initialButtonsFilters.map((button) => {
        if (button.value) {
          return (
            <button
              key={button.textContent}
              className={todo.status === button.value ? 'buttonFilter--active' : 'buttonFilter'}
              onClick={updateStatus}
              value={button.textContent}
            >
              {button.textContent}
            </button>
          );
        }
      })}
    </form>
  );
};

export default TodoStatusForm;
