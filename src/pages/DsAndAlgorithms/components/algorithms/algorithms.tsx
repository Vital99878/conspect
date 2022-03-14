import React from 'react'
import './algorithms.scss'
import { numbers } from '../../../../commonMockData'
import { binarySearch } from '../../../../helpers'
import { mergeAndSort } from './mergeAndSort'
import {quickSort} from './quikSort'

const Algorithms = () => {
  {
    // console.log(mergeAndSort([5, 8, 15, 11, 3, 4, 69, 3]))
    // const sorted = quickSort([5, 8, 3, 4, 69, 3])
    // console.log('sorted: ', sorted)
    // console.log(binarySearch(sorted, 5))
  }
  return <div className="Algorithms">Algorithms</div>
}

export default Algorithms
