export function quickSort(arr: number[]): number[] {
  if (arr.length < 2) return arr

  const pivot = arr[0]
  const left: number[] = []
  const right: number[] = []

  for (let i = 1; i < arr.length; i++) pivot > arr[i] ? left.push(arr[i]) : right.push(arr[i])

  return [...quickSort(left), pivot, ...quickSort(right)]
}
