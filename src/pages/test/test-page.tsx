import React from 'react'
import { useWindowWidth } from '../../hooks/customHooks'
import './test-page.scss'
import Layout from '../../components/Layout/Layout'
import { TestTS, TestPureReact, TestEmpty } from './components'
import Todos from '../../components/Todos/Todos'
import SingleFilter from '../../components/singleFilter/SingleFilter'

type TestPropsChildren = {
  children?: React.ReactNode[] | React.ReactNode
}

const TestPage: React.FC<TestPropsChildren> = () => {
  const windowWidth = useWindowWidth()
  return (
    <Layout pageHeading="Test page">
      <div className="test-components">
        <SingleFilter />
        {/* <Todos />*/}
        {/* <TestTS />*/}
        {/* <TestEmpty />*/}
        {/* <TestPureReact />*/}
      </div>
    </Layout>
  )
}

export default TestPage
