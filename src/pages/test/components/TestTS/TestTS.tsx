import React, { useState, ReactElement, useRef, ChangeEvent } from 'react'
import { oo } from './TS'
import './TestTS.css'
import { useAttachStyle } from './useAttachStyle'
import { observableValue } from '../../../rxjs/components/subject/observableValue'
import useSubject from '../../../rxjs/components/subject/hooks'

const TestTS: React.FC = () => {
  const { field, updateField } = useSubject(observableValue, 'initial')
  const refElement = useRef(document.createElement('div'))
  const s = useAttachStyle(refElement.current, ['left', 'top'])

  return (
    <div className="test-typescript">
      <div ref={refElement} className="box">
        {field}
      </div>
      <div style={s}>Attached el</div>
      <input onChange={(evt: ChangeEvent<HTMLInputElement>) => updateField(evt.target.value)} />
    </div>
  )
}

export default TestTS
