import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import DropdownMenu from '../components/Navigation/components/DropdownMenu/DropdownMenu';
import { CssPage, DesignPatternPage, PreparationPage, RXjsPage, RegistrationPage, Search } from '../pages/';
import { CssDisplay, CssFlex, CssGrid, CssOther, CssPosition, CssTags } from '../pages/css/components';
import {
  AbstractFactoryTest,
  AdapterTest,
  BuilderTest,
  CommandTest,
  CompositeTest,
  IteratorTest,
  SingletonTest,
  StateTest,
} from '../desing-pattern/components';

import Navigation from '../components/Navigation/Navigation';
import { NavItem } from '../components/Navigation/components';
import DsAndAlgorithms from '../pages/DsAndAlgorithms';
import { pages } from './store/adtiveMenuItemReducer';
import { dropdownSections } from '../components/Navigation/someData';
import ButtonsAndLinks from '../pages/buttons-and-links';
import CommandPanel from '../components/CommandPanel';

const App: React.FC = () => {
  const { home, css, test, rxjs, registration, designPatterns, preparation, dsAndAlgorithms, components } = pages;
  return (
    <div className="App">
      <CommandPanel />
      <Navigation>
        <DropdownMenu menuItem={css} sections={dropdownSections} />
        <NavItem props={home} />
        <NavItem props={css} />
        <NavItem props={test} />
        <NavItem props={rxjs} />
        <NavItem props={registration} />
        <NavItem props={designPatterns} />
        <NavItem props={dsAndAlgorithms} />
        <NavItem props={components} />
      </Navigation>
      <Breadcrumbs />
      <Switch>
        <Route path="/" exact render={() => <h1>Home page</h1>} />
        <Route path={`${css.url}`} exact component={CssPage} />
        <Route path={`${test.url}`} exact component={Search} />
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
        <Route path={`${components.url}`} component={ButtonsAndLinks} />
      </Switch>
      <Switch>
        <Route path={`${designPatterns.url}/singleton`} component={SingletonTest} />
        <Route path={`${designPatterns.url}/state`} component={StateTest} />
        <Route path={`${designPatterns.url}/builder`} component={BuilderTest} />
        <Route path={`${designPatterns.url}/adapter`} component={AdapterTest} />
        <Route path={`${designPatterns.url}/composite`} component={CompositeTest} />
        <Route path={`${designPatterns.url}/command`} component={CommandTest} />
        <Route path={`${designPatterns.url}/iterator`} component={IteratorTest} />
        <Route path={`${designPatterns.url}/prototype`} component={AbstractFactoryTest} />
        <Route path={`${designPatterns.url}/abstractFactory`} component={AbstractFactoryTest} />
      </Switch>
    </div>
  );
};
export default App;
