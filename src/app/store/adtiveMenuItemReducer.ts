import { MenuItemType } from '../../components/Navigation/Navigation'

type MainPages =
  | 'home'
  | 'rxjs'
  | 'css'
  | 'test'
  | 'ts'
  | 'registration'
  | 'designPatterns'
  | 'preparation'
  | 'dsAndAlgorithms'

type PagesList = {
  [k in MainPages]: MenuItemType
}

export const pages: PagesList = {
  home: { label: 'Home', page: '/' },
  rxjs: { label: 'RxJS', page: '/rxjs' },
  css: { label: 'CSS', page: '/css' },
  test: { label: 'Tests', page: '/test' },
  ts: { label: 'Typescript', page: '/ts' },
  registration: { label: 'Registration', page: '/registration' },
  designPatterns: { label: 'Design patterns', page: '/design-patterns' },
  preparation: { label: 'Preparation to interview', page: '/preparation' },
  dsAndAlgorithms: { label: 'data-structure and algorithms', page: '/data-structure and algorithms' },
}
