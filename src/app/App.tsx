import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Test from '../components/Test/Test'
import CssPosition from '../components/CssPosition/CssPosition'
// import './App.scss'
import CssDisplay from '../components/CssDisplay/CssDisplay'
import CssTags from '../components/CssTags/CssTags'
import CssFlex from '../components/CssFlex/CssFlex'
import CssGrid from '../components/CssGrid/CssGrid'
import Menu, { MenuItem } from '../components/Menu/Menu'
import TestHooks from '../components/TestPureReact/TestPureReact'
import { RootState } from './store'
import { useSelector } from 'react-redux'
import LayoutBudget from '../components/LayoutBudget/LayoutBudget'
import TestTS from '../components/TestTS/TestTS'
import TestEmptyComponent from '../components/TestEmpty/TestEmpty'
import TodoList from '../components/TodoList/TodoList'

const App: React.FC = () => {
  const [
    home,
    cssDisplay,
    cssPosition,
    cssFlex,
    cssGrid,
    cssTags,
    layoutBudget,
    testComponent,
    testHooks,
    testTypescript,
    testEmptyComponent,
    testTS,
  ] = useSelector((state: RootState) => state.activeMenuItem.menuItems)
  return (
    <Router>
      <div className="App">
        {/* {'Menu tabs' */}
        <>
          <Menu>
            <MenuItem props={home} />
            <MenuItem props={cssDisplay} />
            <MenuItem props={cssPosition} />
            <MenuItem props={cssFlex} />
            <MenuItem props={cssGrid} />
            <MenuItem props={cssTags} />
            <MenuItem props={layoutBudget} />
            <MenuItem props={testComponent} />
            <MenuItem props={testHooks} />
            <MenuItem props={testTypescript} />
            <MenuItem props={testEmptyComponent} />
            <MenuItem props={testTS} />
          </Menu>
          <Switch>
            <Route path={`/${cssDisplay.path}`} exact component={CssDisplay} />
            <Route path={`/${cssPosition.path}`} exact component={CssPosition} />
            <Route path={`/${cssFlex.path}`} exact component={CssFlex} />
            <Route path={`/${cssGrid.path}`} exact component={CssGrid} />
            <Route path={`/${cssTags.path}`} exact component={CssTags} />
            <Route path={`/${layoutBudget.path}`} exact component={LayoutBudget} />
            <Route path={`/${testComponent.path}`} exact component={Test} />
            <Route path={`/${testHooks.path}`} exact component={TestHooks} />
            <Route path={`/${testTS.path}`} exact component={TestTS} />
            <Route path={`/${testEmptyComponent.path}`} exact component={TestEmptyComponent} />
            {/* <Route path="/" exact component={TodoList} /> */}
            <Route path="/" exact render={() => <h1>Home page</h1>} />
          </Switch>
        </>
      </div>
    </Router>
  )
}
export default App
