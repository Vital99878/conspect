export const range = {
  from: 1,
  to: 5,
  [Symbol.iterator]: function (): any {
    return {
      current: this.from,
      last: this.to,
      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ }
        } else {
          return { done: true }
        }
      },
    }
  },
}

for (const number of range) {
  console.log('count: ', number)
}
