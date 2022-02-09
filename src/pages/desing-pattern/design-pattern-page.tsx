import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdapterTest from './components/Test-Adapter/AdapterTest'
import BuilderTest from './components/Test-Builder/BuilderTest'
import SingletonTest from './components/Test-Singleton/SingletonTest'
import StateTest from './components/Test-State/StateTest'

const DesignPatternPage: React.FC = () => {
  return (
    <Layout pageHeading="Design patterns">
      <main className="designPattern-page">
        {/* <SingletonTest />*/}
        {/* <StateTest/>*/}
        {/* <BuilderTest/>*/}
        <AdapterTest/>
      </main>
    </Layout>
  )
}

export default DesignPatternPage
