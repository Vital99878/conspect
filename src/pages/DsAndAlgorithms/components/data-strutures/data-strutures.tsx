import React from 'react'
import './data-strutures.scss'
import { MinIndexedDHeap } from '../../../../data-structures/priority-queues'
const DataStructures = () => {
  const heap = new MinIndexedDHeap(2)
  heap.add(30, 3)
  heap.add(3, 3)
  heap.add(2, 1)
  heap.add(1, 5)

  const heapList = (
    <ul>
      {heap.heap.map((item) => {
        return <li key={item}>{item}</li>
      })}
    </ul>
  )
  return <div className="data-structures">{heapList}</div>
}

export default DataStructures
