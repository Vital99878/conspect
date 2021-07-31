import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../components/Header/Header'
import TodoList from '../components/TodoList/TodoList'
import Test from '../components/Test/Test'
import CssPosition from '../components/CssPosition/CssPosition'
import './App.scss'
import CssDisplay from '../components/CssDisplay/CssDisplay'
import CssTags from '../components/CssTags/CssTags'
import CssFlex from '../components/CssFlex/CssFlex'
import CssGrid from '../components/CssGrid/CssGrid'
import Menu, { MenuItem } from '../components/Menu/Menu'
import Layout from '../layout/Layout'

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        {/* <div>Here will be Navigation for learnig component</div> */}
        {/* <Menu>
          <MenuItem props={{ label: 'cssDisplay' }} />
          <MenuItem props={{ label: 'cssFlex' }} />
          <MenuItem props={{ label: 'cssGrid' }} />
          <MenuItem props={{ label: 'cssPosition' }} />
          <MenuItem props={{ label: 'cssSemanticTags' }} />
        </Menu> */}
        <Switch>
          <Route path="cssDisplay" exact component={CssDisplay} />
          <Route path="/cssPosition" exact component={CssPosition} />
          <Route path="/cssFlex" exact component={CssFlex} />
          <Route path="/cssGrid" exact component={CssGrid} />
        </Switch>
        {/* <CssFlex /> */}
        <CssGrid />
        {/* <Layout /> */}
      </div>
    </Router>
  )
}
export default App
