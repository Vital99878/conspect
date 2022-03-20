import { numbers } from '../../../../../commonMockData'
import { binarySearch } from '../../../../../helpers/binarySearch'
type CountedKeys = {
  [k in string]: number
}

export function exercises() {
  // bankomat
  {
    type Nominals = {
      5000: number
      1000: number
      500: number
      100: number
      50: number
    }
    type Nom = keyof Nominals
    // 1. Реализовать функцию getMoney для банкомата, выдающего купюры.
    // На вход - сумма, на выходе объект с количеством купюр по каждому номиналу.
    // При этом банкомат должен выдать минимальное количество банкнот.
    // Доступные номиналы: 50, 100, 500, 1000, 5000 р

    // Пример: getMoney(6200) // return {5000: 1, 1000: 1, 500: 0, 100: 2, 50: 0}

    // 2. На вход добавляется объект с текущим количеством купюр в банкомате

    // Пример: getMoney(6200, {5000:0, 1000:7, 100:5}) // return {5000: 0, 1000: 6, 100: 2}
    // P.S. не забыть модифицировать объект с номиналами.

    function getMoney(amount: number, limit: Nominals): Nominals {
      const res: Nominals = { '5000': 0, '1000': 0, '500': 0, '100': 0, '50': 0 }
      const noms: Nom[] = [5000, 1000, 500, 100, 50]
      noms.forEach((nom) => {
        let needCupurs = Math.floor(amount / nom)
        if (!limit[nom]) needCupurs = 0
        if (limit[nom]) {
          needCupurs = needCupurs > limit[nom] ? limit[nom] : needCupurs
        }
        res[nom] = needCupurs
        amount = amount - nom * needCupurs
      })

      return res
    }
    // const res = getMoney(6200) // return {5000: 1, 1000: 1, 500: 0, 100: 2, 50: 0}
    const res = getMoney(6200, { '5000': 0, '1000': 7, '100': 5, '500': 0, '50': 0 }) // return {5000: 1, 1000: 1, 500: 0, 100: 2, 50: 0}
    console.log('res: ', res)
    // console.log(5000 % 1200)
  }

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

  // Anogramm
  {
    /**
     * 1. Считает сколько раз повторяется каждая буква  в строке
     * 2. Counts how many times each ch repeats in the string
     * @param string - string
     * @return CountedKeys - { ch : number }
     */

    function countKeys(string: string): CountedKeys {
      const result: CountedKeys = {}
      for (const key of string) {
        key in result ? result[key]++ : (result[key] = 0)
      }
      return result
    }

    function isPalindrome(string1: string, string2: string): boolean {
      if (string1.length !== string2.length) return false
      const countedCh1 = countKeys(string1).toString()
      const countedCh2 = countKeys(string2).toString()
      return Object.is(countedCh1, countedCh2)
    }

    // console.log(isPalindrome('asdf', 'fdsa'))
    // console.log(isPalindrome('asdf', 'dfas'))
    // console.log(isPalindrome('asdf', 'asd'))
  }
}
