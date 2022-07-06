export function quickSort(arr: number[]): number[] {
  if (arr.length < 2) return arr;

  const pivot = arr[0];
  const left: number[] = [];
  const right: number[] = [];

  for (let i = 1; i < arr.length; i++) pivot > arr[i] ? left.push(arr[i]) : right.push(arr[i]);

  return [...quickSort(left), pivot, ...quickSort(right)];
}

type WithOrder = {
  order: number;
};
export function quickSortObj<T extends WithOrder>(arr: T[]): T[] {
  if (arr.length < 2) return arr;

  const pivot = arr[0];
  const left: T[] = [];
  const right: T[] = [];

  for (let i = 1; i < arr.length; i++) pivot['order'] > arr[i]['order'] ? left.push(arr[i]) : right.push(arr[i]);

  return [...quickSortObj(left), pivot, ...quickSortObj(right)];
}
