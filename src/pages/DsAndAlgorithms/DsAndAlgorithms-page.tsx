import React from 'react'
import './DsAndAlgorithms-page.scss'
import PageLayout from '../../components/Layout/PageLayout'
import { Algorithms, DataStrutures } from './components'

const DsAndAlgorithmsPage: React.FC = () => {
  return (
    <PageLayout pageHeading="page-DsAndAlgorithms">
      <main className="page-DsAndAlgorithms">
        {/* <DataStrutures />*/}
         <Algorithms />
      </main>
    </PageLayout>
  )
}
export default DsAndAlgorithmsPage
