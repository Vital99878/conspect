import { BehaviorSubject } from 'rxjs'

export const items = [
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

export const initialFilter = {
  first: false,
  second: false,
  third: false,
}

export const filter$ = new BehaviorSubject(initialFilter)
