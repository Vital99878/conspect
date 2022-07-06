import React from 'react'
import './ball..scss'

type Props = {
  position: 0
  // position: PositionPx
}
/**
 * Компонет, который можно перетаскивать по экрану мышью (RxJS)
 */

const BallComponent: React.FC<Props> = ({ position }): JSX.Element => {
  // todo memoize position
  // const cssPosition = usePosition(position)
  return (
    <div className={'ball'} >
      Ball 1
    </div>
  )
}

export default BallComponent
