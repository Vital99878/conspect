import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { TestPage, RXjsPage, RegistrationPage, CssPage, PreparationPage, DesignPatternPage} from '../pages/'
import {CssFlex, CssOther, CssTags, CssPosition, CssDisplay, CssGrid} from '../pages/css/components'
import Navigation, { NavigationItem } from '../components/Navigation/Navigation'
import DsAndAlgorithms from '../pages/DsAndAlgorithms'
import { pages } from './store/adtiveMenuItemReducer'


const App: React.FC = () => {
  const { home, css, test, rxjs, registration, designPatterns, preparation, dsAndAlgorithms } = pages
  return (
      <div className="App">
        <Navigation>
          <NavigationItem props={home} />
          <NavigationItem props={css} />
          <NavigationItem props={test} />
          <NavigationItem props={rxjs} />
          <NavigationItem props={registration} />
          <NavigationItem props={designPatterns} />
          <NavigationItem props={preparation} />
          <NavigationItem props={dsAndAlgorithms} />
        </Navigation>
        <Switch>
          <Route path="/" exact render={() => <h1>Home page</h1>} />
          <Route path={`${css.page}`} exact component={CssPage} />
          <Route path={`${test.page}`} exact component={TestPage} />
          <Route path={`${rxjs.page}`} exact component={RXjsPage} />
          <Route path={`${registration.page}`} exact component={RegistrationPage} />
          <Route path={`${designPatterns.page}`} exact component={DesignPatternPage} />
          <Route path={`${preparation.page}`} exact component={PreparationPage} />
          <Route path={`${dsAndAlgorithms.page}`} exact component={DsAndAlgorithms} />
        </Switch>

        <Switch>
           <Route path={`${css.page}/flex`} component={CssFlex} />
           <Route path={`${css.page}/grid`} component={CssGrid} />
           <Route path={`${css.page}/display`} component={CssDisplay} />
           <Route path={`${css.page}/position`} component={CssPosition} />
           <Route path={`${css.page}/tags`} component={CssTags} />
           <Route path={`${css.page}/other`} component={CssOther} />
        </Switch>
      </div>
  )
}
export default App
