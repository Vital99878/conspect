import React, { FC, useEffect } from 'react'
import './RXjs.module.scss'
import { SingletonState } from '../desing-pattern/components/Test-Singleton/singletonState'
import { useSingletonState } from '../desing-pattern/components/Test-Singleton/useSingletonState'
import { useCloser } from '../Preparation/components/PreparationToJS/topics'
import { TestEmpty } from '../test/components'
import SubTest from './components/subject'
import BallComponent from './components/ball'
import PageLayout from '../../components/Layout/PageLayout'
import Loading from './components/Loading/Loading'
import TestLoadingState from './components/Loading/TestLoadingState'

const RXjsPage: FC = () => {
  const { instanceRef, updateInstanceRef } = useSingletonState()
  const { count } = useCloser()
  useEffect(() => {
    console.log('update use Effect')
  }, [instanceRef.length >=0])
  return (
    <PageLayout pageHeading="RxJS Page">
      <div className="rxjs">
        <ul>
          {count}
          {instanceRef.map((number) => {
            return <li key={number}>{number}</li>
          })}
        </ul>
        <button onClick={updateInstanceRef}>add new number</button>
        <Loading />
        <TestLoadingState />
        {/* <BallComponent />*/}
        <SubTest />
      </div>
    </PageLayout>
  )
}

export default RXjsPage
