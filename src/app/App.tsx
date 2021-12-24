import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TestPage from '../pages/test/test-page'
import Navigation, { NavigationItem } from '../components/Navigation/Navigation'
import RXjsPage from '../pages/rxjs/RXjs-page'
import { pages } from './store/adtiveMenuItemReducer'
import CssPage from '../pages/css-list/css-page'

const App: React.FC = () => {
  const { home, css, ts, test, rxjs } = pages
  return (
    <Router>
      <div className="App">
        <Navigation>
          <NavigationItem props={home} />
          <NavigationItem props={css} />
          <NavigationItem props={test} />
          <NavigationItem props={rxjs} />
        </Navigation>
        <Switch>
          <Route path={`/${css.path}`} exact component={CssPage} />
          <Route path={`/${test.path}`} exact component={TestPage} />
          <Route path={`/${rxjs.path}`} exact component={RXjsPage} />
          <Route path="/" exact render={() => <h1>Home page</h1>} />
        </Switch>
      </div>
    </Router>
  )
}
export default App
