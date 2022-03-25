import React from 'react'
import './ball..scss'
import { usePosition, PositionPx } from './usePosition'

type Props = {
  position: PositionPx
}
/**
 * Компонет, который можно перетаскивать по экрану мышью (RxJS)
 */

const BallComponent: React.FC<Props> = ({ position }): JSX.Element => {
  // todo memoize position
  const cssPosition = usePosition(position)
  return (
    <div className={'ball'} style={cssPosition}>
      Ball 1
    </div>
  )
}

export default BallComponent
