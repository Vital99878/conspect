/* eslint-disable @typescript-eslint/no-unused-vars */
import { numbers } from '../../../../../commonMockData'
import { binarySearch } from '../../../../../helpers'

type CountedKeys = {
  [k in string]: number
}

export function exercises() {
  // bankomat
  {
    type NeedCupurs = {
      5000: number
      1000: number
      500: number
      100: number
      50: number
    }
    type Nominals = keyof NeedCupurs
    // 1. Реализовать функцию getMoney для банкомата, выдающего купюры.
    // На вход - сумма, на выходе объект с количеством купюр по каждому номиналу.
    // При этом банкомат должен выдать минимальное количество банкнот.
    // Доступные номиналы: 50, 100, 500, 1000, 5000 р

    // Пример: getMoney(6200) // return {5000: 1, 1000: 1, 500: 0, 100: 2, 50: 0}

    // 2. На вход добавляется объект с текущим количеством купюр в банкомате

    // Пример: getMoney(6200, {5000:0, 1000:7, 100:5}) // return {5000: 0, 1000: 6, 100: 2}
    // P.S. не забыть модифицировать объект с номиналами.

    function getMoney(amount: number, limit: NeedCupurs): NeedCupurs {
      const res: NeedCupurs = { '5000': 0, '1000': 0, '500': 0, '100': 0, '50': 0 }
      const noms: Nominals[] = [5000, 1000, 500, 100, 50]

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
    // min max
    {
      // console.log(minMax([1, 2, 3, 4, 5]))
      // console.log(minMax([2334454, 5]))
      // console.log(minMax([5]))
    }
    // const res = getMoney(6200) // return {5000: 1, 1000: 1, 500: 0, 100: 2, 50: 0}
    getMoney(6200, { '5000': 0, '1000': 7, '100': 5, '500': 0, '50': 0 }) // return {5000: 1, 1000: 1, 500: 0, 100: 2, 50: 0}
    // console.log('res: ', res)
  }

  // get first sum
  {
    // first variant with cash.
    // ! if arr have not sorted, at first, arr must sort
    {
      function getSum(nums: number[], sum: number): number[] {
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
      function getSumMap(nums: number[], sum: number): number[] {
        let result: number[] = []
        const map: Map<number, number> = new Map()

        nums.forEach((num) => {
          if (!map.has(num)) map.set(num, num)
          if (map.has(sum - num)) result = [num, map.get(sum - num)!]
        })

        return result
      }
      console.log(getSumMap([1, 2, 3, 4, 6], 48)) // []
      console.log(getSumMap([1, 2, 3, 6, 4], 6)) // [1,3]
    }
    // second variant with pointers
    {
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

    // console.log(isPalindrome('asdf', 'fdsa'))
    // console.log(isPalindrome('asdf', 'dfas'))
    // console.log(isPalindrome('asdf', 'asd'))
  }
}
