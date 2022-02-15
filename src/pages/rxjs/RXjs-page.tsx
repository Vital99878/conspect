import React, { FC } from 'react'
import './RXjs.module.scss'
import { SingletonState } from '../desing-pattern/components/Test-Singleton/singletonState'
import { useSingletonState } from '../desing-pattern/components/Test-Singleton/useSingletonState'
import SubTest from './components/subject'
import BallComponent from './components/ball'
import Layout from '../../components/Layout/Layout'
import Loading from './components/Loading/Loading'
import TestLoadingState from './components/Loading/TestLoadingState'

const RXjsPage: FC = () => {
  const {instanceRef} = useSingletonState()
  console.log('i rxjs: ', instanceRef)
  return (
    <Layout pageHeading="RxJS Page">
      <div className="rxjs">
        <ul>
          {instanceRef.map((number) => {
            return <li key={number}>{number}</li>
          })}
        </ul>
        <Loading />
        <TestLoadingState />
        {/* <BallComponent />*/}
        <SubTest />
      </div>
    </Layout>
  )
}

export default RXjsPage
