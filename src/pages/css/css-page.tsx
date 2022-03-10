import React from 'react'
import './css-page.scss'
import '../../index.scss'
import PageLayout from '../../components/Layout/PageLayout'
import NavCard from '../../components/Navigation/components/NavCard/NavCard'

type TestPropsChildren = {
  children?: React.ReactNode[] | React.ReactNode
}

const CssPage: React.FC<TestPropsChildren> = () => {
  return (
    <PageLayout pageHeading="CSS Topics">
      <div className="css-page">
        <NavCard title={'flex'} desc={'desc 2'} />
        <NavCard title={'grid'} desc={'desc 2'} />
        <NavCard title={'display'} desc={'desc 2'} />
        <NavCard title={'position'} desc={'desc 2'} />
        <NavCard title={'tags'} desc={'desc 2'} />
        <NavCard title={'other'} desc={'desc 2'} />
      </div>
    </PageLayout>
  )
}

export default CssPage
