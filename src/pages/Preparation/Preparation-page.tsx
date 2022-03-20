import React from 'react'
import './Preparation-page.scss'
import PageLayout from '../../components/Layout/PageLayout'
import { PreparationToJS, PreparationToReact, PreparationToTS } from './components'

const PreparationPage: React.FC = () => {
  return (
    <PageLayout pageHeading="page-Preparation">
      <main className="page-Preparation">
         <PreparationToJS />
        {/* <PreparationToReact />*/}
        {/* <PreparationToTS />*/}
      </main>
    </PageLayout>
  )
}
export default PreparationPage
