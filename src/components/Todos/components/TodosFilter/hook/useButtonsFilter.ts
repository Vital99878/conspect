import { TodoStatus, TodoType } from '../../../models/index.model';
import { useState } from 'react';
import { todosStatusCount } from '../../utils';

export type ButtonFilter = {
  textContent: string;
  value: TodoStatus | '';
  isActive: boolean;
  statusCount: number;
};

function findStatus(buttons: ButtonFilter[]): TodoStatus | '' {
  const button = buttons.find((button) => button.isActive);
  return button ? button.value : '';
}

export const initialButtonsFilters: ButtonFilter[] = [
  { textContent: 'not started', value: TodoStatus.notStarted, isActive: false, statusCount: 0 },
  { textContent: 'doing', value: TodoStatus.Doing, isActive: false, statusCount: 0 },
  { textContent: 'done', value: TodoStatus.Done, isActive: false, statusCount: 0 },
  { textContent: 'all', value: '', isActive: true, statusCount: 0 },
];

export function useButtonFilter(buttonsData: ButtonFilter[] = initialButtonsFilters, items: TodoType[]) {
  const [buttons, setButtons] = useState(buttonsData);

  const toggleActiveButton = (value: TodoStatus) => {
    setButtons((buttons) =>
      buttons.map((button) => {
        button.value === value ? (button.isActive = true) : (button.isActive = false);
        return button;
      })
    );
  };

  return {
    buttons: buttons.map((button) => {
      button.value ? (button.statusCount = todosStatusCount(items, button.value)) : (button.statusCount = items.length);
      return button;
    }),
    toggleActiveButton,
    isActiveButton: findStatus(buttons),
  };
}
