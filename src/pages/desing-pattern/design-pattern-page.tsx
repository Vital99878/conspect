import React from 'react'
import PageLayout from '../../components/Layout/PageLayout'
import AdapterTest from './components/Test-Adapter/AdapterTest'
import BuilderTest from './components/Test-Builder/BuilderTest'
import CommandTest from './components/Test-Command/CommandTest'
import CompositeTest from './components/Test-Composite/CompositeTest'
import IteratorTest from './components/Test-Iterator/IteratorTest'
import SingletonTest from './components/Test-Singleton/SingletonTest'
import StateTest from './components/Test-State/StateTest'

const DesignPatternPage: React.FC = () => {
  return (
    <PageLayout pageHeading="Design patterns">
      <main className="designPattern-page">
        {/* <SingletonTest />*/}
        {/* <SingletonTest />*/}
        {/* <StateTest/>*/}
        {/* <BuilderTest/>*/}
        {/* <AdapterTest/>*/}
        {/* <CompositeTest/>*/}
        {/* <CommandTest />*/}
        <IteratorTest />
      </main>
    </PageLayout>
  )
}

export default DesignPatternPage
