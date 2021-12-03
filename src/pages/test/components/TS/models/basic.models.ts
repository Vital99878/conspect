export type Primitive = string | number | boolean | null
export type Todo = {
  id: string
  label?: {
    name?: string
  }
}
export type StoreTodos = {
  store: Todo[]
}
export type Person = {
  name: string
  age: number
}

export type Dictionary = 'first word' | 'second word' | 'third word'
export type DictionaryOfNumbers = 1 | 2 | 3

type DocKeys = Extract<keyof Document, `query${string}`>

type DictionaryKeys = {
  [key in Dictionary]: number
}

type TStringMethods_1 = keyof Dictionary
type TStringMethods_2 = keyof Person
type TNumbersMethods = keyof DictionaryOfNumbers

const NumbersMethods: TNumbersMethods = 'toExponential'

type PersonKeys = keyof Person // takes keys from Person
type AnyNameOfKey = { [key: string]: PersonKeys }
type NotAnyNameOfKey = { [key in Dictionary]: PersonKeys }
