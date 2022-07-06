/**
 * Binary search in sorted array
 * @arr  - sorted array type string [] or number[]
 * @item  - item looking for
 * @return - index of the found item
 */
export function binarySearch<T>(arr: T[], item: T): number {
  let minPointer = 0;
  let maxPointer = arr.length;
  let middlePointer = Math.floor((minPointer + maxPointer) / 2);

  while (true) {
    if (arr[middlePointer] === item) break;
    if (minPointer === maxPointer) {
      middlePointer = -1;
      break;
    }
    if (arr[middlePointer] < item) minPointer = ++middlePointer;
    if (arr[middlePointer] > item) maxPointer = --middlePointer;
  }

  return middlePointer;
}
