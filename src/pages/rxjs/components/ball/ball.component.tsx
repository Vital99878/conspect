import React from 'react'
import './ball..scss'
import { usePosition } from './usePosition'

const BallComponent = (): JSX.Element => {
  return <div className="ball" style={usePosition()} />
}

export default BallComponent
