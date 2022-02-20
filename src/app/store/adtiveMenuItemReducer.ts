import { MenuItemType } from '../../components/Navigation/Navigation'

type MainPages = 'home' | 'rxjs' | 'css' | 'test' | 'ts' | 'registration' | 'designPatterns' | 'preparation'

type PagesList = {
  [k in MainPages]: MenuItemType
}

export const pages: PagesList = {
  home: { label: 'Home', path: '/' },
  rxjs: { label: 'RxJS', path: 'rxjs' },
  css: { label: 'CSS', path: 'css' },
  test: { label: 'Tests', path: 'test' },
  ts: { label: 'Typescript', path: 'ts' },
  registration: { label: 'Registration', path: 'registration' },
  designPatterns: { label: 'Design patterns', path: 'design-patterns' },
  preparation: { label: 'Preparation to interview', path: 'preparation' },
}
