import React, { useState, ReactElement, useRef } from 'react'
import './TestTS.css'
import {tTest} from './models/function.model';
import { useAttachStyle } from '../../../../hooks/useAttachStyle'

const TestTS: React.FC = () => {
    tTest(155)
    tTest('100')
  return (
    <div className="test-typescript">
        Type script
    </div>
  )
}

export default TestTS
