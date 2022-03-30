import React from 'react'
import './Loading.scss'
import { LOADING_STATUS } from '../../../../enums'
import { loading$ } from './utils/mock/loadingState'
import useSubject from '../subject/hooks'

const Loading: React.FC = () => {
  const [loading] = useSubject(loading$, LOADING_STATUS.FAILED)

  if (loading === LOADING_STATUS.SUCCESS) {
    return <div className={'loading'}>SUCCESS</div>
  }

  if (loading === LOADING_STATUS.FAILED) {
    return <div className={'loading'}>Failed </div>
  }

  if (loading === LOADING_STATUS.PENDING) {
    return <div className={'loading'}>Loading ...</div>
  }

  return null
}

export default Loading
