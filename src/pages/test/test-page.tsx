import React from 'react'
import { useWindowWidth } from '../../hooks/customHooks'
import './test-page.scss'
import Layout from '../../components/Layout/Layout'
import Todos from '../../components/Todos/Todos'
import SingleFilter from '../../components/singleFilter/SingleFilter'
import MultipleFilter from '../../components/multipleFilter/MultipleFilter'
import { RequiredInputWrapper } from '../registraiton/components/registration-form/components'

type TestPropsChildren = {
  children?: React.ReactNode[] | React.ReactNode
}

const TestPage: React.FC<TestPropsChildren> = () => {
  // const windowWidth = useWindowWidth()
  return (
    <Layout pageHeading="Test page">
      <div className="test-components">
        {/* <SingleFilter />*/}
        {/* <MultipleFilter />*/}
        <Todos />
        {/* <RequiredInputWrapper>*/}
        {/*    <SingleFilter />*/}
        {/* </RequiredInputWrapper>*/}
        {/* <TestTS />*/}
        {/* <TestEmpty />*/}
        {/* <TestPureReact />*/}
      </div>
    </Layout>
  )
}

export default TestPage
