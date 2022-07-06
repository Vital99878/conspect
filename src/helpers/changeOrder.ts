import { WithOrder } from '../types/WithOrder.model';
import { arrWithOrders } from '../pages/DsAndAlgorithms/data-for-test-algo';
import { initialTodos } from '../components/Todos/hooks/useAllLocalState__Todos';
const decItemOrder = <T extends WithOrder>(item: T): T => {
  item.order--;
  return item;
};
const incItemOrder = <T extends WithOrder>(item: T): T => {
  item.order++;
  return item;
};

// todo доделать desc and not workable

/**
 *
 * Order должен быть как индексы массива. Может отличаться от индекса. Т.е все элементы массива должны быть с order, который можно поменять.
 * @draggable  - order элемента, который перетаскивается
 * @target  - order элемента, после которого должен встать  draggable item
 * @return ordered arr[]
 */
// todo! not working
function insertAfter<T extends WithOrder>(draggable: number, target: number, arr: T[]): T[] {
  arr = arr.sort((a, b) => a.order - b.order);
  const leftPart: T[] = [];
  const rightPart: T[] = [];
  const movedPart: T[] = [];
  const draggableEl = arr[draggable];

  // drag el from top to bottom After current element
  if (draggable < target) {
    draggableEl.order = target;

    for (let i = 0; i < draggable; i++) leftPart.push(arr[i]);

    for (let i = draggable + 1; i < target + 1; i++) movedPart.push(decItemOrder(arr[i]));

    for (let i = target + 1; i < arr.length; i++) rightPart.push(arr[i]);

    return [...leftPart, ...movedPart, draggableEl, ...rightPart];
  }

  // drag el from top to bottom After current element
  if (draggable > target) {
    draggableEl.order = target + 1;

    for (let i = 0; i <= target; i++) leftPart.push(arr[i]);

    for (let i = draggable + 1; i < arr.length; i++) rightPart.push(arr[i]);

    for (let i = target + 1; i < draggable; i++) movedPart.push(incItemOrder(arr[i]));

    return [...leftPart, draggableEl, ...movedPart, ...rightPart];
  }
  return arr;
}

function insertBefore<T extends WithOrder>(draggable: number, target: number, arr: T[]): T[] {
  arr.sort((a, b) => a.order - b.order);

  const leftPart: T[] = [];
  const rightPart: T[] = [];
  const movedPart: T[] = [];
  const draggableEl = arr[draggable];

  // draggable el from top to bottom Before current element
  if (draggable > target) {
    draggableEl.order = target;

    for (let i = 0; i < target; i++) leftPart.push(arr[i]);

    for (let i = draggable + 1; i < arr.length; i++) rightPart.push(arr[i]);

    for (let i = target; i < draggable; i++) movedPart.push(incItemOrder(arr[i]));

    return [...leftPart, ...movedPart, draggableEl, ...rightPart];
  }

  // draggable el from bottom to top Before current element
  if (draggable < target) {
    draggableEl.order = target - 1;

    for (let i = 0; i < draggable; i++) leftPart.push(arr[i]);

    for (let i = target; i < arr.length; i++) rightPart.push(arr[i]);

    for (let i = draggable + 1; i < target; i++) movedPart.push(decItemOrder(arr[i]));

    return [...leftPart, ...movedPart, draggableEl, ...rightPart];
  }

  return arr;
}

// console.log(insertAfter(2, 5, initialTodos))
// console.log(insertAfter(0, 5, initialTodos))
// console.log(insertAfter(5, 2, initialTodos))
export {};
