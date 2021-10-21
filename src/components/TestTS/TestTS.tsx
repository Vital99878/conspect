import React, {useState, ReactElement, useRef} from 'react'
import { oo } from './TS'
import './TestTS.css'
import {useAttachStyle} from './useAttachStyle';

const TestTS: React.FC = () => {
    const refElement = useRef(document.createElement('div'))
    const s = useAttachStyle(refElement.current)
    return (
    <div className="test-typescript" >
      <div ref={refElement} className="box">Box</div>
        <div style={s}>Attached el</div>
    </div>
  )
}

export default TestTS
