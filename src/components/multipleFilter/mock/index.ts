import useObservableValue from '../../../pages/rxjs/components/subject/hooks'
import { BehaviorSubject } from 'rxjs'

const initialFilter = {
  first: false,
  second: false,
  third: false,
}

export const mock = [
  {
    label: '1',
    categories: ['first', 'second'],
  },
  {
    label: '6',
    categories: ['first', 'third'],
  },
  {
    label: '2',
    categories: ['second'],
  },

  {
    label: '3',
    categories: ['second', 'third'],
  },

  {
    label: '4',
    categories: ['first', 'third'],
  },
  {
    label: '5',
    categories: ['first', 'third'],
  },
]

export const filter$ = new BehaviorSubject(initialFilter)
