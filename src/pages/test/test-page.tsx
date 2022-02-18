import React from 'react'
import TestIterableObj from '../../components/Test-IterableObject/TestIterableObj'
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
import ReactDOM from 'react-dom'
// import {root2} from './min-binary-heap-test'


type TestPropsChildren = {
  children?: React.ReactNode[] | React.ReactNode
}

const TestPage: React.FC<TestPropsChildren> = () => {
  // const windowWidth = useWindowWidth()
  // console.log('root2: ', root2)
  return (
    <Layout pageHeading="Test page">
      <div className="test-components">
        {/* {ReactDOM.createPortal(<Modal props={{ show: false }} />, document.getElementById('root') as HTMLLIElement)}*/}
        {/* <TestIterableObj />*/}
        {/* <TestTS />*/}
        {/* <TestPureReact />*/}
        {/* <Todos />*/}
         <TestEmpty />
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
