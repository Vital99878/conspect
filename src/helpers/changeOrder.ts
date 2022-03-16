import { WithOrder } from '../types/WithOrder.model'
import { arrWithOrders } from '../pages/DsAndAlgorithms/data-for-test-algo'
import { initialTodos } from '../components/Todos/hooks/useAllLocalState__Todos'
const decOrder = <T extends WithOrder>(item: T): T => {
  item.order--
  return item
}
const incOrder = <T extends WithOrder>(item: T): T => {
  item.order++
  return item
}

// todo доделать desc and not workable

/**
 *
 * Order должен быть как индексы массива. Может отличаться от индекса. Т.е все элементы массива должны быть с order, который можно поменять.
 * @currentOrder  - order элемента, после которого должен встать  draggable item
 * @draggableOrder  - order элемента, который перетаскивается
 * @return ordered arr[]
 */
function insertAfter<T extends WithOrder>(currentOrder: number, draggableOrder: number, arr: T[]): T[] {
  // todo. сперва нужно отсортировать массив по порядку.
  const leftPart: T[] = []
  const rightPart: T[] = []
  const movedPart: T[] = []
  const draggableEl = arr[draggableOrder]

  if (draggableOrder < currentOrder) {
    // drag el from top to bottom After current element
    draggableEl.order = currentOrder

    for (let i = 0; i < draggableOrder; i++) leftPart.push(arr[i])

    for (let i = currentOrder + 1; i < arr.length; i++) rightPart.push(arr[i])

    for (let i = draggableOrder + 1; i < currentOrder + 1; i++) movedPart.push(decOrder(arr[i]))

    return [...leftPart, ...movedPart, draggableEl, ...rightPart]
  }

  if (draggableOrder > currentOrder) {
    // drag el from top to bottom After current element
    draggableEl.order = currentOrder + 1

    for (let i = 0; i <= currentOrder; i++) leftPart.push(arr[i])

    for (let i = draggableOrder + 1; i < arr.length; i++) rightPart.push(arr[i])

    for (let i = currentOrder + 1; i < draggableOrder; i++) movedPart.push(incOrder(arr[i]))

    return [...leftPart, draggableEl, ...movedPart, ...rightPart]
  }
  return arr
}

function insertBefore<T extends WithOrder>(currentOrder: number, draggableOrder: number, arr: T[]): T[] {
  const leftPart: T[] = []
  const rightPart: T[] = []
  const movedPart: T[] = []
  const draggableEl = arr[draggableOrder]

  if (draggableOrder > currentOrder) {
    // drag el from top to bottom Before current element
    draggableEl.order = currentOrder

    for (let i = 0; i < currentOrder; i++) leftPart.push(arr[i])

    for (let i = draggableOrder + 1; i < arr.length; i++) rightPart.push(arr[i])

    for (let i = currentOrder; i < draggableOrder; i++) movedPart.push(incOrder(arr[i]))

    return [...leftPart, ...movedPart, draggableEl, ...rightPart]
  }

  if (draggableOrder < currentOrder) {
    // drag el from bottom to top Before current element
    draggableEl.order = currentOrder - 1

    for (let i = 0; i < draggableOrder; i++) leftPart.push(arr[i])

    for (let i = currentOrder; i < arr.length; i++) rightPart.push(arr[i])

    for (let i = draggableOrder + 1; i < currentOrder; i++) movedPart.push(decOrder(arr[i]))

    return [...leftPart, ...movedPart, draggableEl, ...rightPart]
  }

  return arr
}

console.log(insertBefore(2, 5, initialTodos).sort((a, b) => a.order - b.order))
export {}
