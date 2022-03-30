import { numbers } from '../../../commonMockData'

export class History<T> {
  private history: any[]
  private writePointer = 0
  private readPointer = 0
  private head = 0
  private tail!: number
  private size!: number

  constructor(size = 5) {
    this.size = size
    this.tail = size - 1
    this.history = []
  }

  add(el: T): T {
    this.history[this.writePointer] = el
    this.writePointer = (this.writePointer + 1) % this.size
    this.readPointer = (this.readPointer + 1) % this.size
    return el
  }

  // todo see what to do with pointers
  delete(index: number): void {
    console.log('index: ', index)
    // this.history[index] = undefined
  }

  logNext() {
    if (this.readPointer === this.tail) this.readPointer = this.head
    else this.readPointer = this.readPointer + 1
    console.log(this.history[this.readPointer])
  }

  logPrev() {
    if (this.readPointer === this.head) this.readPointer = this.tail
    else this.readPointer = this.readPointer - 1
    console.log(this.history[this.readPointer])
  }

  getHistory() {
    const left = this.history.slice(0, this.writePointer).reverse()
    const right = this.history.slice(this.writePointer).reverse()
    return [...left, ...right]
  }
  logHistory() {
    console.log(this.history)
  }
}
