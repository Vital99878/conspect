import React, { useRef, useEffect, useState, CSSProperties } from 'react'
import './test-page.scss'
import PageLayout from '../../components/Layout/PageLayout'
import SearchPage from '../../components/SearchPage'
import { TodoType, TodoStatus } from '../../components/Todos/models/index.model'
import Todos from '../../components/Todos/Todos'
import { initialTodos } from '../../components/Todos/hooks/todosSingleton'
import { TestOrderPoint } from './components'
import { useAttachStyle } from './components/TestTS/useAttachStyle'

type TestPropsChildren = {
  children?: React.ReactNode[] | React.ReactNode
}

const TestPage: React.FC<TestPropsChildren> = () => {
  const targetElRef = useRef<HTMLDivElement>(null)

  const attached = useAttachStyle(targetElRef, ['top', 'left'])
  const attached2 = useAttachStyle(targetElRef, ['top', 'right'])
  const attached3 = useAttachStyle(targetElRef, ['bottom', 'left'])
  const attached4 = useAttachStyle(targetElRef, ['bottom', 'right'])

  return (
    <PageLayout pageHeading="Test page">
      <div className="test-components" >
        <div className={'target'} ref={targetElRef}>Target</div>
        <div className={'attached'} style={attached}>
          Top Left
        </div>
        <div className={'attached'} style={attached2}>
          Top Right
        </div>
        <div className={'attached'} style={attached3}>
          Left Bottom
        </div>
        <div className={'attached'} style={attached4}>
          Right Bottom
        </div>
        <div className={'big'}>Big</div>
        {/*<SearchPage />*/}
      </div>
    </PageLayout>
  )
}

export default TestPage
