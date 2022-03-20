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
import CharacterInformation from '../../components/hocs/withCharacter/CharacterInformation'
import characterInformation from '../../components/hocs/withCharacter/CharacterInformation'
import { fetchData } from '../../components/hocs/withData/characters'
import { withData } from '../../components/hocs/withData/withData'
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
import { reformatPhoneNumber } from '../registraiton/components/registration-form/utils'
import TestLoadingState from '../rxjs/components/Loading/TestLoadingState'
import useBehaviorSubject from '../rxjs/components/subject/hooks'
import { TestEmpty, TestTS, TestPureReact } from './components'
import Modal from '../../components/Modal/Modal'
import ReactDOM from 'react-dom'
// import {root2} from './min-binary-heap-test'
import {} from '../../helpers/changeOrder'

const inputStyle: CSSProperties = {
  width: '60%',
  textAlign: 'center',
  // padding: '2rem'
}
const formStyle: CSSProperties = {
  display: 'grid',
  placeItems: 'center',
}

type TestPropsChildren = {
  children?: React.ReactNode[] | React.ReactNode
}
const Search: React.FC = () => {
  // todo сохранять историю запросов
  // todo показываеть, что на странице есть поиск!
  // todo debounce

  const [search, setSearch] = useState('')
  const [isShow, setIsShow] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  function show(evt: KeyboardEvent) {
    if (evt.key === 'Escape') {
      setIsShow(false)
      return
    }

    if (evt.key.length > 1) return

    if (inputRef.current) inputRef.current.focus()
    setIsShow(true)
  }

  function typing(evt: React.ChangeEvent<HTMLInputElement>) {
    setSearch(evt.target.value)
  }

  function onSubmit(evt: FormEvent) {
    evt.preventDefault()
    console.log(`Sort by ${search.trim()}`)
    setSearch('')
    setIsShow(false)
  }

  useEffect((): VoidFunction => {
    document.addEventListener('keydown', show)
    return () => document.removeEventListener('keydown', show)
  }, [])

  if (!isShow) return null
  return (
    <form action="" onSubmit={onSubmit} style={formStyle}>
      <input style={inputStyle} value={search} type={'text'} onChange={typing} autoFocus={true} ref={inputRef} />
    </form>
  )
}


const TestPage: React.FC<TestPropsChildren> = () => {
  const testComponentsRef = useRef(null)


  // const toggleModal = () => setIsShouldShow((isShow) => !isShow)
  // const windowWidth = useWindowWidth()
  const { field: isShow, updateField: setIsShow } = useBehaviorSubject(modalState, true)

  return (
    <PageLayout pageHeading="Test page">
      <div className="test-components" ref={testComponentsRef}>
        <form action="/" method={'post'}></form>
        <Search />
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
