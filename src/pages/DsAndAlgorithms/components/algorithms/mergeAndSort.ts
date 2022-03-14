// Todo need type and cb for compare
function merge<T extends number>(leftHalf: T[], rightHalf: T[]): T[] {
  const result: T[] = []
  while (leftHalf.length && rightHalf.length) {
    const min = leftHalf[0] > rightHalf[0] ? (rightHalf.shift() as T) : (leftHalf.shift() as T)
    result.push(min)
  }
  while (leftHalf.length) result.push(leftHalf.shift() as T)
  while (rightHalf.length) result.push(rightHalf.shift() as T)
  return result
}
export function mergeAndSort<T extends number>(arr: T[]): number[] {
  if (arr.length === 1) return arr
  const divider = arr.length / 2
  const leftHalf = arr.slice(0, divider)
  const rightHalf = arr.slice(divider)
  const leftSorted = mergeAndSort(leftHalf)
  const rightSorted = mergeAndSort(rightHalf)
  return merge(leftSorted, rightSorted)
}
