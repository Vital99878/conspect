import React, { useState, SetStateAction, Dispatch } from 'react'
import PageLayout from '../../../../components/Layout/PageLayout'
import { DragAndDropData } from '../../../../components/Todos/components/utils'
import { DropPosition } from '../../../../components/Todos/models/index.model'
import './TestOrderPoint.scss'
import { insertItemBeforeTarget, insertItemAfterTarget } from '../../../../helpers'

type Item = {
  label: string
}
type ItemProps = {
  item: Item
  itemIndex: number
  itemMapPosition: number
  setOrderMap: Dispatch<SetStateAction<number[]>>
}

type MP = {
  itemIndex: null
  itemMapPosition: number
}

const items: Item[] = [
  { label: 'item 1' },
  { label: 'item 2' },
  { label: 'item 3' },
  { label: 'item 4' },
  { label: 'item 5' },
]

const ordersMap = {
  first: [4, 2, 1, 0, 3],
  second: [1, 0, 4, 3, 2],
}

const Item: React.FC<ItemProps> = ({ item, itemIndex, itemMapPosition, setOrderMap }) => {
  function calcElDropPosition(evt: React.DragEvent<HTMLLIElement>): DropPosition {
    const replaceableTodoEl = evt.target as HTMLLIElement
    const box = replaceableTodoEl.getBoundingClientRect()
    const halfHeight = box.height / 2
    return evt.clientY <= box.y + halfHeight ? DropPosition.before : DropPosition.after
  }

  function dragStart() {
    DragAndDropData.setDraggableIndex(itemMapPosition)
  }

  function dragOver(evt: React.DragEvent<HTMLLIElement>) {
    evt.preventDefault()
    const dropPos = calcElDropPosition(evt)

    DragAndDropData.setPos(dropPos)
    DragAndDropData.setTargetIndex(itemMapPosition)
  }

  function dragLeave() {
    DragAndDropData.setTargetIndex(-1)
  }

  function dragEnd() {
    const { draggableIndex, targetIndex, pos } = DragAndDropData.getInstance()

    if (draggableIndex < 0 || targetIndex < 0) return DragAndDropData.clearInstance()

    if (DropPosition.before === pos) {
      setOrderMap((posMap) => insertItemBeforeTarget(posMap, draggableIndex, targetIndex))
    }

    if (DropPosition.after === pos) {
      setOrderMap((posMap) => insertItemAfterTarget(posMap, draggableIndex, targetIndex))
    }

    DragAndDropData.clearInstance()
  }

  return (
    <li
      key={item.label}
      draggable={true}
      onDragStart={dragStart}
      onDragOver={dragOver}
      onDragEnd={dragEnd}
      onDragLeave={dragLeave}
    >
      {`${item.label} - index=${itemIndex}, order=${itemMapPosition}`}
    </li>
  )
}

const TestOrderPoint: React.FC = () => {
  const [orderMap, setOrderMap] = useState([4, 2, 1, 0, 3])
  console.log('orderMap: ', orderMap)

  return (
    <PageLayout pageHeading="List with pointers">
      <ul className={'list'}>
        {orderMap.map((order, index) => {
          const item = items[order]
          return (
            <Item item={item} itemIndex={order} itemMapPosition={index} key={item.label} setOrderMap={setOrderMap} />
          )
        })}
      </ul>
    </PageLayout>
  )
}

export default TestOrderPoint
