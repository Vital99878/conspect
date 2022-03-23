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

  // test history loop
  {
    function history(arr: number[], last: number, size: number): number[] {
      const left = numbers.slice(last).reverse()
      const right = numbers.slice(0, last).reverse()
      return [...left, ...right]
    }

    // console.log(history(numbers, 8, numbers.length - 1))
  }
  // const toggleModal = () => setIsShouldShow((isShow) => !isShow)
  // const windowWidth = useWindowWidth()
  const { field: isShow, updateField: setIsShow } = useBehaviorSubject(modalState, true)

  return (
    <PageLayout pageHeading="Test page">
      <div className="test-components" ref={testComponentsRef}>
        <form action="/" method={'post'}></form>
        <SearchPage />
        {/* {withData(CharacterInformation, fetchData)}*/}
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
