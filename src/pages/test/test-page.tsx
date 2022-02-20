import React from 'react'
import TestIterableObj from '../../components/Test-IterableObject/TestIterableObj'
import { useWindowWidth } from '../../hooks/customHooks'
import './test-page.scss'
import PageLayout from '../../components/Layout/PageLayout'
import Todos from '../../components/Todos/Todos'
import SingleFilter from '../../components/singleFilter/SingleFilter'
import MultipleFilter from '../../components/multipleFilter/MultipleFilter'
import { useCloser } from '../Preparation/components/PreparationToJS/topics'
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
  const { n } = useCloser()
  return (
    <PageLayout pageHeading="Test page">
      <div className="test-components">
        {/* {ReactDOM.createPortal(<Modal props={{ show: false }} />, document.getElementById('root') as HTMLLIElement)}*/}
        {/* <TestIterableObj />*/}
        {/* <TestTS />*/}
        {/* <TestPureReact />*/}
        {/* <Todos />*/}
        <TestEmpty count={n} />
      </div>
      {/* <SingleFilter />*/}
      {/* <MultipleFilter />*/}
      {/* <RequiredInputWrapper>*/}
      {/*    <SingleFilter />*/}
      {/* </RequiredInputWrapper>*/}
      {/* <TestLoadingState />*/}
    </PageLayout>
  )
}

export default TestPage
