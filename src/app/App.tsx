import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { TestPage, RXjsPage, RegistrationPage, CssPage } from '../pages/'
import Navigation, { NavigationItem } from '../components/Navigation/Navigation'
import { pages } from './store/adtiveMenuItemReducer'

const App: React.FC = () => {
  const { home, css, test, rxjs, registration } = pages
  return (
    <Router>
      <div className="App">
        <Navigation>
          <NavigationItem props={home} />
          <NavigationItem props={css} />
          <NavigationItem props={test} />
          <NavigationItem props={rxjs} />
          <NavigationItem props={registration} />
        </Navigation>
        <Switch>
          <Route path={`/${css.path}`} exact component={CssPage} />
          <Route path={`/${test.path}`} exact component={TestPage} />
          <Route path={`/${rxjs.path}`} exact component={RXjsPage} />
          <Route path={`/${registration.path}`} exact component={RegistrationPage} />
          <Route path="/" exact render={() => <h1>Home page</h1>} />
        </Switch>
      </div>
    </Router>
  )
}
export default App
