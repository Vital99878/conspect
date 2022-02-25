import { numbers } from '../../../../../commonMockData'
import { binarySearch } from '../../../../../helpers/binarySearch'

export function exercises() {
  // get first sum
  {
    // first variant with cash.
    // ! if arr have not sorted, at first, arr must sort
    {
      const getSum = function (nums: number[], sum: number): number[] {
        const result: number[] = []
        const cash: number[] = []

        nums.forEach((num, index) => {
          const secondNum = sum - num
          if (index === 0) {
            cash.push(num)
            return
          }
          if (cash.includes(secondNum)) result.push(num, secondNum)
        })

        return result
      }
      // console.log(getSum([1, 2, 3, 4, 6], 48)) // []
      // console.log(getSum([1, 2, 3, 6, 4], 4)) // [1,3]
    }
    // second variant with pointers
    {
      const getSum = function (nums: number[], sum: number): number[] {
        const sortedNums = nums.sort((a, b) => a - b)
        const result: number[] = []
        let leftPointer = 0
        let rightPointer = nums.length - 1

        while (leftPointer < rightPointer) {
          const leftNum = sortedNums[leftPointer]
          const rightNum = sortedNums[rightPointer]
          if (leftNum + rightNum === sum) {
            result.push(leftNum, rightNum)
            break
          }
          if (leftPointer === rightPointer) break
          if (leftNum + rightNum < sum) ++leftPointer
          if (leftNum + rightNum > sum) --rightPointer
        }

        return result
      }
      // console.log(getSum([5, 1, 6, 2, 4, 3, 5], 10)) // [4, 6]
      // console.log(getSum([5, 1, 6, 2, 3, 5], 10)) // [5,5]
    }
  }

  // get first warmer dat
  {
    // console.log(firstWarnerDay([1, 2, 3, 1, 5, 4, 8]))
  }
}
