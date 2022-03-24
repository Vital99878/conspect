import React, {
  useState,
  useRef,
  useEffect,
  ChangeEventHandler,
  FormEventHandler,
  FormEvent,
  CSSProperties,
} from 'react'
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable'
import { numbers } from '../../commonMockData'
import CharacterInformation from '../../components/hocs/withCharacter/CharacterInformation'
import characterInformation from '../../components/hocs/withCharacter/CharacterInformation'
import { fetchData } from '../../components/hocs/withData/characters'
import { withData } from '../../components/hocs/withData/withData'
import { modalState } from '../../components/Modal/modalState'
import SearchPage from '../../components/SearchPage'
import { insertItemBeforeTarget, insertItemAfterTarget } from '../../helpers'
import { SingletonMethods } from '../desing-pattern/components/Test-Singleton/SingletonMethods'
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
import { reformatPhoneNumber } from '../registraiton/components/registration-form/utils'
import TestLoadingState from '../rxjs/components/Loading/TestLoadingState'
import useBehaviorSubject from '../rxjs/components/subject/hooks'
import { TestEmpty, TestTS, TestPureReact } from './components'
import Modal from '../../components/Modal/Modal'
import ReactDOM from 'react-dom'
// import {root2} from './min-binary-heap-test'
import {} from '../../helpers/changeOrder'

type TestPropsChildren = {
  children?: React.ReactNode[] | React.ReactNode
}

const TestPage: React.FC<TestPropsChildren> = () => {
  const testComponentsRef = useRef(null)
  // const {addTodo} = SingletonMethods.getMethods('todo')

  // insert before test log result
  {
    // console.log(insertItemBefore(numbers, 7, 9))
    // console.log(insertItemBefore(numbers, 8, 0))
    // console.log(insertItemBefore(numbers, 9, 4))
  }
  // insert after test log result
  {
    // console.log('result ', insertItemAfter(numbers, 0, 9))
    // console.log('result ', insertItemAfterTarget(numbers, 9, 3))
    // console.log('result ', insertItemBeforeTarget(numbers, 0, 9))
    // console.log('result ', insertItemBeforeTarget(numbers, 4, 5))
    // console.log(insertItemBefore(numbers, 8, 0))
    // console.log(insertItemBefore(numbers, 9, 4))
  }
  // const toggleModal = () => setIsShouldShow((isShow) => !isShow)
  // const windowWidth = useWindowWidth()
  const { field: isShow, updateField: setIsShow } = useBehaviorSubject(modalState, true)

  return (
    <PageLayout pageHeading="Test page">
      <div className="test-components" ref={testComponentsRef}>
        {/* <SingletonTest/> */}
        {/* <form action="/" method={'post'}></form> */}
        {/* <SearchPage /> */}
        {/* /!* {withData(CharacterInformation, fetchData)}*!/ */}
        {/* <button onClick={() => setIsShow(true)}>show</button> */}
        {/* <button onClick={() => setIsShow(false)}>hide</button> */}
        {/* <button onClick={() => setIsShow(!isShow)}>toggle</button> */}
        {/* {ReactDOM.createPortal(<Modal />, document.getElementById('root') as HTMLLIElement)} */}
        {/* <TestIterableObj />*/}
        {/* <TestTS />*/}
        {/* <TestPureReact />*/}
         <Todos />
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
