import React from 'react'
import './test-page.scss'
import PageLayout from '../../components/Layout/PageLayout'
import SearchPage from '../../components/SearchPage'
import { TodoType, TodoStatus } from '../../components/Todos/models/index.model'
import Todos from '../../components/Todos/Todos'
import { initialTodos } from '../../components/Todos/hooks/todosSingleton'
import { TestOrderPoint } from './components'

type TestPropsChildren = {
  children?: React.ReactNode[] | React.ReactNode
}

const TestPage: React.FC<TestPropsChildren> = () => {
  return (
    <PageLayout pageHeading="Test page">
      <div className="test-components">
        <SearchPage/>
      </div>
    </PageLayout>
  )
}

export default TestPage
