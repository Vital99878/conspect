import { Person, Dictionary, StoreTodos, Todo } from './basic.models'
type Colors = {
  red: string
  green: string
  yellow: number
}

type Condition = number

type FilteredColorsValue = {
  [K in keyof Colors]: Colors[K] extends number ? Colors[K] : never
}

type DocsFilteredKeys = {
  [K in keyof Document]: Document[K] extends `query${Uppercase<string>}` ? K : never
}

type DocQueryMethodsKeys = Extract<keyof Document, `query${Uppercase<string>}`>
