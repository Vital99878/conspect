import React from 'react'
import './Layout.scss'

type LayoutProps = {
  pageHeading?: string
  children: React.ReactElement<any>
  Footer?: React.Component | React.ReactElement | null
  Header?: React.Component | React.ReactElement | null
}

/**
 * Layout для страницы. Оборачивает компонент. Нужен для того, что не засорять логику страницы повторяющимся элементами
 */

const Layout: React.FC<LayoutProps> = ({ children, pageHeading = '', Footer = null, Header = null }) => {
  const PageHeading = pageHeading ? <h1>{pageHeading}</h1> : null

  return (
    <>
      {Header}
      {PageHeading}
      {children}
      {Footer}
    </>
  )
}

export default Layout
