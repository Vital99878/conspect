import { MenuItemType } from '../../components/Navigation/Navigation'
type MainPages = 'home' | 'rxjs' | 'css' | 'test' | 'ts'

type PagesList = {
  [k in MainPages]: MenuItemType
}

export const pages: PagesList = {
  home: { label: 'Home', path: '/' },
  rxjs: { label: 'RxJS', path: 'rxjs' },
  css: { label: 'CSS', path: 'css' },
  test: { label: 'Tests', path: 'test' },
  ts: { label: 'Typescript', path: 'ts' },
}
