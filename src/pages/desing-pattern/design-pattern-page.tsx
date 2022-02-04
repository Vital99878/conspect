import React from 'react'
import Layout from '../../components/Layout/Layout'
import BuilderTest from './components/Test-Builder/BuilderTest'
import SingletonTest from './components/Test-Singleton/SingletonTest'
import StateTest from './components/Test-State/StateTest'

const DesignPatternPage: React.FC = () => {
  return (
    <Layout pageHeading="Design patterns">
      <main className="designPattern-page">
        {/* <SingletonTest />*/}
        {/* <StateTest/>*/}
        <BuilderTest/>
      </main>
    </Layout>
  )
}

export default DesignPatternPage
