import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TestPage from '../pages/test/test-page'
import CssDisplay from '../pages/css-list/CssDisplay/CssDisplay'
import Navigation, { NavigationItem } from '../components/Navigation/Navigation'
import { RootState } from './store/store'
import { useSelector } from 'react-redux'
import TestEmpty from '../pages/test/components/TestEmpty/TestEmpty'
import RXjsPage from '../pages/rxjs/RXjs-page'
import {initialNavigation} from './store/adtiveMenuItemReducer';

const App: React.FC = () => {
  // const {Home, Css, Test, RXjs} = useSelector((state: RootState) => state.navList)
  const {Home, Css, Test, RXjs} = initialNavigation
  return (
    <Router>
      <div className="App">
        <>
          <Navigation>
            <NavigationItem props={Home} />
            <NavigationItem props={Css} />
            <NavigationItem props={Test} />
            <NavigationItem props={RXjs} />
          </Navigation>
          <Switch>
            {/* css routes */}
              <Route path={`/${Css.path}`} exact component={CssDisplay} />
            {/* test routes */}
              <Route path={`/${Test.path}`} exact component={TestPage} />
              <Route path={`/${Test.path}`} exact component={TestEmpty} />
            {/* other routes */}
            <Route path={`/${RXjs.path}`} exact component={RXjsPage} />
            <Route path="/" exact render={() => <h1>Home page</h1>} />
          </Switch>
        </>
      </div>
    </Router>
  )
}
export default App
