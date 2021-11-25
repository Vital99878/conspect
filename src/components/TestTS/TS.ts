const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
type DocKeys = Extract<keyof Document, `query${string}`>
type Doc = keyof Document

export type Person = { name: string; age: number }
type PersonKeys = keyof Person

type Dictionary = 'first' | 'second' | 'third'
type AnyNameOfKey = { [key: string]: PersonKeys }
type NotAnyNameOfKey = { [key in Dictionary]: PersonKeys }

export const o: AnyNameOfKey = { anyV: 'name' }
export const oo: NotAnyNameOfKey = { first: 'name', second: 'age', third: 'age' }

class Data {
  static myName = 'name'
}
