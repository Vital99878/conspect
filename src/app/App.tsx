import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DropdownMenu from '../components/Navigation/components/DropdownMenu/DropdownMenu'
import { TestPage, RXjsPage, RegistrationPage, CssPage, PreparationPage, DesignPatternPage } from '../pages/'
import { CssFlex, CssOther, CssTags, CssPosition, CssDisplay, CssGrid } from '../pages/css/components'
import {
  AdapterTest,
  CommandTest,
  CompositeTest,
  IteratorTest,
  PrototypeTest,
  SingletonTest,
  StateTest,
  BuilderTest,
} from '../pages/desing-pattern/components'

import Navigation from '../components/Navigation/Navigation'
import { NavigationItem } from '../components/Navigation/components'
import DsAndAlgorithms from '../pages/DsAndAlgorithms'
import { pages } from './store/adtiveMenuItemReducer'
import { dropdownSections } from '../components/Navigation/someData'

const App: React.FC = () => {
  const { home, css, test, rxjs, registration, designPatterns, preparation, dsAndAlgorithms } = pages
  return (
    <div className="App">
      <Navigation>
        <DropdownMenu menuItem={css} sections={dropdownSections} />
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
        <Route path={`${css.url}`} exact component={CssPage} />
        <Route path={`${test.url}`} exact component={TestPage} />
        <Route path={`${rxjs.url}`} exact component={RXjsPage} />
        <Route path={`${registration.url}`} exact component={RegistrationPage} />
        <Route path={`${designPatterns.url}`} exact component={DesignPatternPage} />
        <Route path={`${preparation.url}`} exact component={PreparationPage} />
        <Route path={`${dsAndAlgorithms.url}`} exact component={DsAndAlgorithms} />
      </Switch>
      <Switch>
        <Route path={`${css.url}/flex`} component={CssFlex} />
        <Route path={`${css.url}/grid`} component={CssGrid} />
        <Route path={`${css.url}/display`} component={CssDisplay} />
        <Route path={`${css.url}/position`} component={CssPosition} />
        <Route path={`${css.url}/tags`} component={CssTags} />
        <Route path={`${css.url}/other`} component={CssOther} />
      </Switch>
      <Switch>
        <Route path={`${designPatterns.url}/singleton`} component={SingletonTest} />
        <Route path={`${designPatterns.url}/state`} component={StateTest} />
        <Route path={`${designPatterns.url}/builder`} component={BuilderTest} />
        <Route path={`${designPatterns.url}/adapter`} component={AdapterTest} />
        <Route path={`${designPatterns.url}/composite`} component={CompositeTest} />
        <Route path={`${designPatterns.url}/command`} component={CommandTest} />
        <Route path={`${designPatterns.url}/iterator`} component={IteratorTest} />
        <Route path={`${designPatterns.url}/prototype`} component={PrototypeTest} />
      </Switch>
    </div>
  )
}
export default App
