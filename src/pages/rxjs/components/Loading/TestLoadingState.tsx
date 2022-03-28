import React from 'react'
import './Loading.scss'
import { loading$ } from './utils/mock/loadingState'
import { LOADING_STATUS } from '../../../../enums'
import useBehaviorSubject from '../subject/hooks'

const TestLoadingState = () => {
  const [, updateField] = useBehaviorSubject(loading$, LOADING_STATUS.FAILED)

  return (
    <div className={'loading-buttons'}>
      <button onClick={() => updateField(LOADING_STATUS.SUCCESS)}>Change to SUCCESS</button>
      <button onClick={() => updateField(LOADING_STATUS.PENDING)}>Change PENDING</button>
      <button onClick={() => updateField(LOADING_STATUS.FAILED)}>Change Failed</button>
    </div>
  )
}

export default TestLoadingState
