import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TestPage from '../pages/test/test-page'
import CssPosition from '../pages/css-list/CssPosition/CssPosition'
import CssDisplay from '../pages/css-list/CssDisplay/CssDisplay'
import CssTags from '../pages/css-list/CssTags/CssTags'
import CssFlex from '../pages/css-list/CssFlex/CssFlex'
import CssGrid from '../pages/css-list/CssGrid/CssGrid'
import Navigation, { NavigationItem } from '../components/Navigation/Navigation'
import TestHooks from '../pages/test/components/TestPureReact/TestPureReact'
import { RootState } from './store/store'
import { useSelector } from 'react-redux'
import TestTS from '../pages/test/components/TestTS/TestTS'
import TestEmpty from '../pages/test/components/TestEmpty/TestEmpty'
import RXjsPage from '../pages/rxjs/RXjs-page'

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
    testRxjs,
  ] = useSelector((state: RootState) => state.activeMenuItem.menuItems)
  return (
    <Router>
      <div className="App">
        {/* {'Menu tabs' */}
        <>
          <Navigation>
            <NavigationItem props={home} />
            <NavigationItem props={cssDisplay} />
            <NavigationItem props={cssPosition} />
            <NavigationItem props={cssFlex} />
            <NavigationItem props={cssGrid} />
            <NavigationItem props={cssTags} />
            <NavigationItem props={layoutBudget} />
            <NavigationItem props={testComponent} />
            <NavigationItem props={testHooks} />
            <NavigationItem props={testTypescript} />
            <NavigationItem props={testEmptyComponent} />
            <NavigationItem props={testTS} />
            <NavigationItem props={testRxjs} />
          </Navigation>
          <Switch>
            <Route path={`/${cssDisplay.path}`} exact component={CssDisplay} />
            <Route path={`/${cssPosition.path}`} exact component={CssPosition} />
            <Route path={`/${cssFlex.path}`} exact component={CssFlex} />
            <Route path={`/${cssGrid.path}`} exact component={CssGrid} />
            <Route path={`/${cssTags.path}`} exact component={CssTags} />
            <Route path={`/${testComponent.path}`} exact component={TestPage} />
            <Route path={`/${testHooks.path}`} exact component={TestHooks} />
            <Route path={`/${testTS.path}`} exact component={TestTS} />
            <Route path={`/${testEmptyComponent.path}`} exact component={TestEmpty} />
            <Route path={`/${testRxjs.path}`} exact component={RXjsPage} />
            {/* <Route path="/" exact component={TodoList} /> */}
            <Route path="/" exact render={() => <h1>Home page</h1>} />
          </Switch>
        </>
      </div>
    </Router>
  )
}
export default App
