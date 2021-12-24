import React from 'react'
import CssFlex from './components/CssFlex/CssFlex'
import CssGrid from './components/CssGrid/CssGrid'
import CssDisplay from './components/CssDisplay/CssDisplay'
import CssPosition from './components/CssPosition/CssPosition'
import CssTags from './components/CssTags/CssTags'

type TestPropsChildren = {
  children?: React.ReactNode[] | React.ReactNode
}

const CssPage: React.FC<TestPropsChildren> = () => {
  return (
    <div className="css-page">
       <CssFlex/>
      <CssGrid/>
      <CssPosition/>
      <CssDisplay/>
      <CssTags/>
    </div>
  )
}

export default CssPage
