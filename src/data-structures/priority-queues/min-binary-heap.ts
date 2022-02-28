import * as utils from '../utils'

/*******************************************************************************
 * A min binary heap implements the Priority Queue ADT. It has constant access
 * to the min element of the heap, with logarithmic insertions and deletions.
 *
 * add(element) - O(logn)
 * poll() - O(logn)
 * peek() - O(1)
 *
 * For more info, refer to https://en.wikipedia.org/wiki/Binary_heap
 ******************************************************************************/
class MinBinaryHeap<T> {
  // a dynamic array to hold our elements
  private heap: T[]
  private compare: utils.CompareFunction<T>

  private heapify(): void {
    if (this.heap.length === 0) return

    let i = Math.max(0, Math.floor(this.size() / 2) - 1)
    for (; i >= 0; i--) {
      this.sink(i)
    }
  }

  /*****************************************************************************
   HELPERS
   *****************************************************************************/
  /**
   * Sinks element with index until heap invariant is satisfied - O(log(n))
   * O(log(n)) because in the worst case we sink the element down the entire
   * height of the tree
   * 1. Вычисляем индексы левого и правого дочерних элементов.  Затем смотрим какой из этих элементов меньше.
   * 2. Если индекс левого дочернего элемента >= длиннее массива, значит у нашего элемента нет дочерних элементов. Завершаем погружение.
   * Если элемент меньше чем наименьший дочерний элемент - также завершаем погружение
   * 3. Если наименьший дочерний элемент больше родительство, то swap
   * 4. Так как у элемента теперь могут быть новые вечерние элементы, то проделываем всё заново
   * @param {number} index  родительского элемента
   * @returns {void}
   */
  private sink(index: number): void {
    // eslint-disable-next-line
    while (true) {
      // get index of children

      const leftChildIndex = this.getLeftChildIndex(index)
      const rightChildIndex = this.getRightChildIndex(index)

      // find the smallest childIndex
      let smallestChildIndex = leftChildIndex
      const rightChildIsSmallerThanLeft =
        rightChildIndex < this.size() && this.less(rightChildIndex, leftChildIndex)
      if (rightChildIsSmallerThanLeft) smallestChildIndex = rightChildIndex

      // if the children indices are out of bounds or the current element is
      // less than the child, stop looping and break
      const indexOutOfBounds = leftChildIndex >= this.size()
      const isElementLessThanSmallestChild = this.less(index, smallestChildIndex)
      if (indexOutOfBounds || isElementLessThanSmallestChild) break

      // otherwise swap
      this.swap(smallestChildIndex, index) // O(1)
      index = smallestChildIndex // set index to child index, and we repeat loop
    }
  }

  /**
   * Swims an element with index k until heap invariant is satisfied - O(log(n))
   * O(log(n)) because in the worst case we swim the element up the entire tree
   * @param {number} k
   * @returns {void}
   */
  private swim(k: number): void {
    let parentIndex = this.getParentIndex(k)

    // as long as k is positive and this.heap[k] < this.heap[parentIndex]
    while (k > 0 && this.less(k, parentIndex)) {
      this.swap(parentIndex, k)

      k = parentIndex
      parentIndex = this.getParentIndex(k)
    }
  }

  // O(1)
  private swap(i: number, j: number): void {
    const temp = this.heap[i]

    this.heap[i] = this.heap[j]
    this.heap[j] = temp
  }

  /**
   * Removes element at provided index by swapping it with last element, and
   * heapifying the swapped element by sinking/swimming it - O(log(n)).
   *
   * O(log(n)) because in worst case we swink/swim element throughout the entire tree
   * @param {number} indexToRemove
   * @returns {T}
   */
  private removeAt(indexToRemove: number): T {
    const indexOfLastElement = this.size() - 1
    // save the removed element so we can return it after heapifying
    const removedElement = this.heap[indexToRemove]

    // swap the removed element with the last element
    this.swap(indexToRemove, indexOfLastElement)
    // delete the removed element!
    this.heap.pop()

    if (this.heap.length === 0) return removedElement

    // if last element is being removed, no need to heapify (sink/swim)
    const lastElementIsBeingRemoved = indexToRemove === indexOfLastElement - 1
    if (lastElementIsBeingRemoved) return removedElement

    // try sinking
    const indexToBeHeapified = indexToRemove
    const elementToBeHeapified = this.heap[indexToBeHeapified]
    this.sink(indexToBeHeapified)

    // if sinking did not work try swimming
    if (this.heap[indexToBeHeapified] === elementToBeHeapified) {
      this.swim(indexToBeHeapified)
    }

    // return saved value from before
    return removedElement
  }

  // O(1)
  private getLeftChildIndex(parentIndex: number): number {
    return parentIndex * 2 + 1
  }
  // O(1)
  private getRightChildIndex(parentIndex: number): number {
    return parentIndex * 2 + 2
  }
  // O(1)
  private getParentIndex(childIndex: number): number {
    return Math.floor((childIndex - 1) / 2)
  }

  /**
   * Returns true if a is less than b, false otherwise
   * @param {number} a
   * @param {number} b
   */
  private less(a: number, b: number) {
    return this.compare(this.heap[a], this.heap[b]) < 0
  }

  constructor(elements?: Iterable<T>, compareFunction?: utils.CompareFunction<T>) {
    this.heap = []
    this.compare = compareFunction || utils.defaultCompare

    // if the client provides elements, heapify them
    if (elements) {
      this.heap = Array.from(elements)
      this.heapify()
    }
  }

  // Even though we are looping through n/2 elements and calling sink which is O(logn),
  // this method is still bounded by O(n), not O(nlogn). The reason being is because
  // we start at the second last row of the tree. Not sinking the last row of the tree
  // already removes half the work.
  // See more info on Floyd's heap construction here: https://en.wikipedia.org/wiki/Heapsort#Variations

  /*****************************************************************************
                                  INSPECTION
  *****************************************************************************/
  /**
   * Returns the size of the heap - O(1)
   * @returns {number}
   */
  size(): number {
    return this.heap.length
  }

  /**
   * Returns true if the heap is empty, false otherwise - O(1)
   * @returns {boolean}
   */
  isEmpty(): boolean {
    return this.size() == 0
  }

  /*****************************************************************************
                                  INSERTION/DELETION
  *****************************************************************************/
  /**
   * Adds an element to the heap, while maintaing the heap invariant - O(log(n))
   * @param {T} element
   * @returns {void}
   */
  add(element: T): void {
    this.heap.push(element)
    const indexOfLastElement = this.size() - 1
    this.swim(indexOfLastElement)
  }

  /**
   * Removes element if it exists. Returns true if success, false otherwise - O(n)
   * @param {T} element
   * @returns {boolean}
   */
  remove(element: T): boolean {
    // O(n), linear scan to find elementIndex
    const elementIndex = this.heap.findIndex((h: T) => this.compare(element, h) === 0)

    if (elementIndex === -1) return false

    this.removeAt(elementIndex) // O(log(n))
    return true
  }

  /**
   * Removes and returns top most element of heap - O(log(n))
   * @returns {T}
   */
  removeRoot(): T | null {
    if (this.isEmpty()) return null

    return this.removeAt(0) // O(log(n))
  }

  /**
   * Clears the heap - O(1)
   * @returns {void}
   */
  clear(): void {
    this.heap.length = 0
  }

  /*****************************************************************************
                                  ACCESSING
  *****************************************************************************/
  /**
   * Peeks at the top most element in the heap - O(1)
   * @returns {T}
   */
  peekRoot(): T | null {
    if (this.isEmpty()) return null

    return this.heap[0]
  }

  /*****************************************************************************
                                  SEARCHING
  *****************************************************************************/
  /**
   * Returns true if element is in heap, false otherwise - O(n)
   * @param {T} element
   * @returns {boolean}
   */
  contains(element: T): boolean {
    return this.heap.includes(element)
  }
}

export default MinBinaryHeap
// const n = [4, 1, 2, 3, 4, 56]
// const n2 = [8, 7, 6, 5, 4]
// const heap = new MinBinaryHeap(n2)
// console.log('heap: ', heap)
