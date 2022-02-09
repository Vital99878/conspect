import React from 'react'
import { useWindowWidth } from '../../hooks/customHooks'
import './test-page.scss'
import Layout from '../../components/Layout/Layout'
import Todos from '../../components/Todos/Todos'
import SingleFilter from '../../components/singleFilter/SingleFilter'
import MultipleFilter from '../../components/multipleFilter/MultipleFilter'
import { RequiredInputWrapper } from '../registraiton/components/registration-form/components'
import TestLoadingState from '../rxjs/components/Loading/TestLoadingState'
import { TestEmpty, TestTS } from './components'
import Modal from '../../components/Modal/Modal'
import ReactDOM from 'react-dom';

type TestPropsChildren = {
  children?: React.ReactNode[] | React.ReactNode
}

const TestPage: React.FC<TestPropsChildren> = () => {
  // const windowWidth = useWindowWidth()
  return (
    <Layout pageHeading="Test page">
      <div className="test-components">
          {ReactDOM.createPortal(<Modal props={{ show: false }} />, document.getElementById('root') as HTMLLIElement)}
        {/* <TestTS />*/}
        {/* <TestEmpty />*/}
        {/* <TestPureReact />*/}
         <Todos />
      </div>
      {/* <SingleFilter />*/}
      {/* <MultipleFilter />*/}
      {/* <RequiredInputWrapper>*/}
      {/*    <SingleFilter />*/}
      {/* </RequiredInputWrapper>*/}
      {/* <TestLoadingState />*/}
    </Layout>
  )
}

export default TestPage
