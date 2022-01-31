import React from 'react'
import Layout from '../../components/Layout/Layout'
import SingletonTest from './components/Test-Singleton/SingletonTest'

const DesignPatternPage: React.FC = () => {
  return (
    <Layout pageHeading="Design patterns">
      <main className="designPattern-page">
        <SingletonTest />
      </main>
    </Layout>
  )
}

export default DesignPatternPage
