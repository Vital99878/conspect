import React, { useEffect } from 'react'
import './Loading.scss'
import { LOADING_STATUS } from '../../../../enums'
import { loading$ } from './utils/mock/loadingState'
import useSubject from '../subject/hooks'
import { observableValue } from '../subject/observableValue'

const Loading = (): JSX.Element | null => {
  const { field: loading } = useSubject(loading$)
  const { field: text, updateField } = useSubject(observableValue)

  useEffect(() => {
    console.log('text: ', text)
  }, [text])

  if (loading === LOADING_STATUS.SUCCESS) {
    return (
      <div className={'loading'}>
        <div>SUCCESS</div>
        <div>{text + ' some string'}</div>
        <button onClick={() => updateField('titititi')}></button>
      </div>
    )
  }
  if (loading === LOADING_STATUS.FAILED) {
    return (
      <div className={'loading'}>
        <div>FAILED</div>
        <div>{text}</div>
      </div>
    )
  }
  if (loading === LOADING_STATUS.PENDING) {
    return <div className={'loading'}>PENDING ...</div>
  }
  return null
}

export default Loading
