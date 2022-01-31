import React from 'react'
import Layout from '../../components/Layout/Layout'
import SingletonTest from './components/Test-Singleton/SingletonTest'
import StateTest from './components/Test-State/StateTest'

const DesignPatternPage: React.FC = () => {
  return (
    <Layout pageHeading="Design patterns">
      <main className="designPattern-page">
        <SingletonTest />
        <StateTest/>
      </main>
    </Layout>
  )
}

export default DesignPatternPage
