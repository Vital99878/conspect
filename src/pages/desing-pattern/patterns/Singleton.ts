export class Counter {
  static instance: Counter
  count = 0
  constructor() {
    if (typeof Counter.instance === 'object') {
      return Counter.instance
    }
    Counter.instance = this
    return Counter.instance
  }

  getCounter() {
    return this.count
  }

  incCounter() {
    this.count++
  }
}
