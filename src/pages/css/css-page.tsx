import React from 'react'
import PageLayout from '../../components/Layout/PageLayout'
import CssFlex from './components/CssFlex/CssFlex'
import CssGrid from './components/CssGrid/CssGrid'
import CssDisplay from './components/CssDisplay/CssDisplay'
import CssPosition from './components/CssPosition/CssPosition'
import CssTags from './components/CssTags/CssTags'
import CssOther from './components/CssOther/CssOther'

type TestPropsChildren = {
  children?: React.ReactNode[] | React.ReactNode
}

const CssPage: React.FC<TestPropsChildren> = () => {
  return (
    <PageLayout pageHeading="CSS Page">
      <div className="css-page">
        <CssOther />
        {/* <CssFlex />*/}
        {/* <CssGrid />*/}
        {/* <CssPosition />*/}
        {/* <CssDisplay />*/}
        {/* <CssTags />*/}
      </div>
    </PageLayout>
  )
}

export default CssPage
