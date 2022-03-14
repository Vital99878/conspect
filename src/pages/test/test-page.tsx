import React, { useState, useRef } from 'react'
import { modalState } from '../../components/Modal/modalState'
import TestIterableObj from '../Preparation/components/PreparationToJS/topics/components/Test-IterableObject/TestIterableObj'
import { useWindowWidth } from '../../hooks/customHooks'
import './test-page.scss'
import PageLayout from '../../components/Layout/PageLayout'
import Todos from '../../components/Todos/Todos'
import SingleFilter from '../../components/singleFilter/SingleFilter'
import MultipleFilter from '../../components/multipleFilter/MultipleFilter'
import SingletonTest from '../desing-pattern/components/Test-Singleton/SingletonTest'
import { useCloser } from '../Preparation/components/PreparationToJS/topics'
import { RequiredInputWrapper } from '../registraiton/components/registration-form/components'
import TestLoadingState from '../rxjs/components/Loading/TestLoadingState'
import useBehaviorSubject from '../rxjs/components/subject/hooks'
import { TestEmpty, TestTS, TestPureReact } from './components'
import Modal from '../../components/Modal/Modal'
import ReactDOM from 'react-dom'
// import {root2} from './min-binary-heap-test'

type TestPropsChildren = {
  children?: React.ReactNode[] | React.ReactNode
}

const TestPage: React.FC<TestPropsChildren> = () => {
  // const toggleModal = () => setIsShouldShow((isShow) => !isShow)
  // const windowWidth = useWindowWidth()
  const { field: isShow, updateField: setIsShow } = useBehaviorSubject(modalState, true)
  return (
    <PageLayout pageHeading="Test page">
      <div className="test-components">
        <button onClick={() => setIsShow(true)}>show</button>
        <button onClick={() => setIsShow(false)}>hide</button>
        <button onClick={() => setIsShow(!isShow)}>toggle</button>
        {ReactDOM.createPortal(<Modal />, document.getElementById('root') as HTMLLIElement)}
        {/* <TestIterableObj />*/}
        {/* <TestTS />*/}
        {/* <TestPureReact />*/}
        {/* <Todos />*/}
        {/* <TestEmpty />*/}
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
