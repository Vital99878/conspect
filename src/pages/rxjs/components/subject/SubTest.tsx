import React, { ChangeEvent } from 'react'
import './Subject..scss'
import useSubject from './hooks'
import { observableValue } from './observableValue'

/**
 * Компонет для тестирования Observable value
 */

const SubTest = (): JSX.Element => {
  const { field, updateField } = useSubject(observableValue, 'initial')
  return (
    <div className="subject">
      <input onChange={(evt: ChangeEvent<HTMLInputElement>) => updateField(evt.target.value)} />
      <button onClick={() => updateField('button click')}>subject</button>
      <p>{field}</p>
    </div>
  )
}

export default SubTest
