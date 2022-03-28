import React from 'react'
import './Loading.scss'
import { LOADING_STATUS } from '../../../../enums'
import { loading$ } from './utils/mock/loadingState'
import useSubject from '../subject/hooks'

const Loading: React.FC = () => {
  const [loading] = useSubject(loading$, LOADING_STATUS.SUCCESS)

  if (loading === LOADING_STATUS.SUCCESS) {
    return (
      <div className={'loading'}>
        <div>SUCCESS</div>
      </div>
    )
  }

  if (loading === LOADING_STATUS.FAILED) {
    return (
      <div className={'loading'}>
        <div>FAILED</div>
      </div>
    )
  }

  if (loading === LOADING_STATUS.PENDING) {
    return <div className={'loading'}>Loading ...</div>
  }

  return null
}

export default Loading
