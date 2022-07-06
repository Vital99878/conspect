import { MenuItem, Pages } from '../../components/Navigation/types';

export type MainPages =
  | 'home'
  | 'rxjs'
  | 'css'
  | 'test'
  | 'ts'
  | 'registration'
  | 'designPatterns'
  | 'preparation'
  | 'dsAndAlgorithms';

export type CssPages = 'flex' | 'greed' | 'display' | 'position';

type PagesList = {
  [k in MainPages]: MenuItem<Pages>;
};

export const pages: PagesList = {
  home: { label: 'Home', url: '/' },
  rxjs: { label: 'RxJS', url: '/rxjs' },
  css: { label: 'CSS', url: '/css' },
  test: { label: 'Tests', url: '/test' },
  ts: { label: 'Typescript', url: '/ts' },
  registration: { label: 'Registration', url: '/registration' },
  designPatterns: { label: 'Design patterns', url: '/design-patterns' },
  preparation: { label: 'Preparation to interview', url: '/preparation' },
  dsAndAlgorithms: { label: 'data-structure and algorithms', url: '/data-structure and algorithms' },
};
