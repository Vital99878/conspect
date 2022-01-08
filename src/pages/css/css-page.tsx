import React from 'react'
import Layout from '../../components/Layout/Layout'
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
    <Layout pageHeading="CSS Page">
      <div className="css-page">
        <CssOther />
        {/* <CssFlex />*/}
        {/* <CssGrid />*/}
        {/* <CssPosition />*/}
        {/* <CssDisplay />*/}
        {/* <CssTags />*/}
      </div>
    </Layout>
  )
}

export default CssPage
