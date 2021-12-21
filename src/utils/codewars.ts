export function arrayDiff(a: number[], b: number[]): number[] {
  return a.filter((num) => !b.includes(num))
}

export class Challenge {
  static solution(number: number) {
    if (number <= 0) return 0

    let result = 0
    for (let i = 0; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) result += i
    }
    return result
  }
}

export function sumOfIntervals(intervals: [number, number][]): number {
  const deleteIntersection = (sortedFlattenIntervals: number[]): number[] => {
    const updatedIntervals: number[] = []
    sortedFlattenIntervals.map((item, index) => {
      if (index === 0) updatedIntervals.unshift(sortedFlattenIntervals[index])
      if (index === sortedFlattenIntervals.length - 1) updatedIntervals.push(sortedFlattenIntervals[index])
      if (item <= sortedFlattenIntervals[index + 1] && item >= sortedFlattenIntervals[index - 1]) {
        updatedIntervals.push(item)
      }
    })
    return updatedIntervals
  }
  const countIntervals = (clearIntervals: number[]): number => {
    console.log('clearIntervals: ', clearIntervals)
    let res = 0
    for (let i = 1; i <= clearIntervals.length - 1; i = i + 2) {
      res += clearIntervals[i] - clearIntervals[i - 1]
    }
    return res
  }

  const sortedFlattenIntervals = intervals.sort((a: [number, number], b: [number, number]) => a[0] - b[0]).flat()
  const clearIntervals = deleteIntersection(sortedFlattenIntervals)
  return countIntervals(clearIntervals)
}
