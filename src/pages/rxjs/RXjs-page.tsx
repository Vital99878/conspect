import React, { FC } from 'react'
import './RXjs.module.scss'
import SubTest from './components/subject'
import BallComponent from './components/ball'
import Layout from '../../components/Layout/Layout'
import Loading from './components/Loading/Loading'
import TestLoadingState from './components/Loading/TestLoadingState'

const RXjsPage: FC = () => {
  return (
    <Layout pageHeading="RxJS Page">
      <div className="rxjs">
        <Loading />
        <TestLoadingState />
        <SubTest />
        {/* <BallComponent />*/}
        <SubTest />
      </div>
    </Layout>
  )
}

export default RXjsPage
