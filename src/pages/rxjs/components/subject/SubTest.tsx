import React, { ChangeEvent } from 'react'
import './Subject..scss'
import useSubject from './hooks'
import { observableValue } from './observableValue'
import { BehaviorSubject } from 'rxjs'

/**
 * Компонет для тестирования Observable value
 */

const SubTest = (): JSX.Element => {
  const [field, updateField] = useSubject(observableValue, '')
  const observable$ = new BehaviorSubject(true)
  const asObservable$ = observable$.asObservable()

  {
    // observable$.subscribe((value) => console.log('value: ', value))
    // asObservable$.subscribe((value) => console.log('as value: ', value + ' test!'))
    // observable$.next(false)
    // observable$.next(false)
  }

  return (
    <div className="subject">
      <input onChange={(evt: ChangeEvent<HTMLInputElement>) => updateField(evt.target.value)} />
      <button onClick={() => updateField('button click')}>subject</button>
      <p>{field}</p>
    </div>
  )
}

export default SubTest
