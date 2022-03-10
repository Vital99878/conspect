import React from 'react'
import './css-page.scss'
import '../../index.scss'
import { NavLink, useHistory, useRouteMatch, Link, Switch, Route } from 'react-router-dom'
import PageLayout from '../../components/Layout/PageLayout'
import {CssFlex, CssGrid, CssDisplay, CssPosition, CssTags, CssOther} from './components/index'

type NavCardProps = {
  title: string
  desc: string
}

const NavCard: React.FC<NavCardProps> = ({ title, desc }) => {
  const { url } = useRouteMatch()
  // console.log('url: ', url)
  // console.log('title: ', title)

  return (
    <NavLink to={`${url}/${title}`} className={'nav-card'}>
      <div> {title}</div>
      <div> {desc}</div>
    </NavLink>
  )
}

type TestPropsChildren = {
  children?: React.ReactNode[] | React.ReactNode
}

const CssPage: React.FC<TestPropsChildren> = () => {
  const { url, path } = useRouteMatch()

  return (
    <PageLayout pageHeading="CSS Topics">
      <div className="css-page">
        <>
          <NavCard title={'flex'} desc={'desc 2'} />
          <NavCard title={'grid'} desc={'desc 2'} />
          <NavCard title={'display'} desc={'desc 2'} />
          <NavCard title={'position'} desc={'desc 2'} />
          <NavCard title={'tags'} desc={'desc 2'} />
          <NavCard title={'other'} desc={'desc 2'} />
        </>
      </div>
    </PageLayout>
  )
}

export default CssPage
