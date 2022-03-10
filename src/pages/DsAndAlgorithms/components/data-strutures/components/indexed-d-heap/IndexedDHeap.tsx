import React from 'react'
import './IndexedDHeap.scss'
import { MinIndexedDHeap } from '../../../../../../data-structures/priority-queues'

/**
 * @description
 */
const IndexedDHeap = () => {
  const values: { [k in string]: number } = {}
  const heap = new MinIndexedDHeap<number>(3)

  function add(key: number, value: number) {
    values[key] = value
    heap.add(key, value)
  }

  add(17, 40)
  add(52, 300)
  add(1, 30)
  add(1, 30)
  add(15, 50)
  add(1, 20)
  add(5, 60)

  // console.log('heap.heap: ', heap.heap)
  // console.log('heap.pm: ', heap.pm)

  const heapList = (
    <ul className={'heap'}>
      {heap.heap.map((item, index) => {
        return (
          <li key={item}>
            <div>{`value: ${values[item]}`}</div>
            <div>{`heap pos: ${index}`}</div>
            <div>{`index: ${item}`}</div>
          </li>
        )
      })}
    </ul>
  )
  const pmList = (
    <>
      <div>Position index in heap</div>
      <ul className={'pm'}>
        {Object.entries(heap.pm).map(([indexOfValue, posInHeap]) => {
          return (
            <li key={posInHeap}>
              <div>{`index ${indexOfValue} in heap on ${posInHeap} position`}</div>
              <div>{`value: ${values[indexOfValue]}`}</div>
            </li>
          )
        })}
      </ul>
    </>
  )
  const valuesList = (
    <ul className={'pm'}>
      {Object.values(values).map((item) => {
        return <li key={item}>{item}</li>
      })}
    </ul>
  )

  return (
    <div className="data-structures">
      {heapList}
      {pmList}
    </div>
  )
}

export default IndexedDHeap
