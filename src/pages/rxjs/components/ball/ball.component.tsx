import React from 'react'
import './ball..scss'
import { usePosition } from './usePosition'

/**
 * Компонет, который можно перетаскивать по экрану мышью (RxJS)
 */

const BallComponent = (): JSX.Element => {
  return (
    <div className="ball" style={usePosition()}>
      ball
    </div>
  )
}

export default BallComponent
