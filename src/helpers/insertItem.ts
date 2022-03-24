/**
 * Проверяет чтобы индексы были меньше, чем размер массива.
 * @arr
 * @draggableIndex  - element's index with dragging before targeting element
 * @targetIndex  - element's index  !перед которым вствляется элемент
 * @return - never
 */

function checkIndexes(arr: any[], draggableIndex: number, targetIndex: number): never | any[] {
  if (draggableIndex >= arr.length) throw new Error('draggableIndex must be less than arr.length')
  if (targetIndex >= arr.length) throw new Error('targetIndex must be less than arr.length')
  return arr
}

/**
 * Работает с обычным массивом.  Применять в списках,  так как там у каждого элемента известен его индекс
 * @arr
 * @draggableIndex  - element's index with dragging before targeting element
 * @targetIndex  - element's index  !перед которым вствляется элемент
 * @return - new arr
 */

export function insertItemBeforeTarget<T>(arr: T[], draggableIndex: number, targetIndex: number): T[] {
  checkIndexes(arr, draggableIndex, targetIndex)
  if (draggableIndex === targetIndex) return arr

  const res = [...arr]
  let left: T[] = []
  let right: T[] = []
  const draggableItem = res.splice(draggableIndex, 1)[0]

  if (draggableIndex > targetIndex) {
    left = res.slice(0, targetIndex)
    right = res.slice(targetIndex)
  }

  if (draggableIndex < targetIndex) {
    left = res.slice(0, targetIndex - 1)
    right = res.slice(targetIndex - 1)
  }
  return [...left, draggableItem, ...right]
}

/**
 * Работает с обычным массивом.  Применять в списках,  так как там у каждого элемента известен его индекс
 * @arr
 * @draggableIndex  - element's index with dragging before targeting element
 * @targetIndex  - element's index После которого вствляется элемент
 * @return - new arr
 */

export function insertItemAfterTarget<T>(arr: T[], draggableIndex: number, targetIndex: number): T[] {
  checkIndexes(arr, draggableIndex, targetIndex)
  if (draggableIndex === targetIndex) return arr

  const res = [...arr]
  let left: T[] = []
  let right: T[] = []
  const draggableItem = res.splice(draggableIndex, 1)[0]

  if (draggableIndex > targetIndex) {
    left = res.slice(0, targetIndex + 1)
    right = res.slice(targetIndex + 1)
  }

  if (draggableIndex < targetIndex) {
    left = res.slice(0, targetIndex)
    right = res.slice(targetIndex)
  }

  return [...left, draggableItem, ...right]
}
