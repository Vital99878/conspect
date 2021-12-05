import { Person, Dictionary, StoreTodos, Todo } from './basic.models'

export const storeTodos: StoreTodos = {
  store: [{ id: 'id', label: { name: 'with label' } }, { id: 'id' }],
}

// & - intersection
function addMaleFor(person: Person, male: 'man' | 'woman'): Person & { male: 'man' | 'woman' } {
  return { ...person, male: male }
}

const myUnknown: unknown = 15
// console.log(myUnknown* 10)

type HasId = { id: string }
type Dict<T> = { [id: string]: T }

function dictListWithIe<T extends HasId>(list: T[]): Dict<T> {
  const toReturn: Dict<T> = {}
  list.forEach((item) => {
    toReturn[item.id] = item
  })
  return toReturn
}

console.log(
  dictListWithIe([
    { id: '1', name: 'name_1' },
    { id: '2', name: 'name_2' },
  ])
)

class Fruit {
  static className = 'i am Fruit'

  constructor(public name: string, public mass: number, public color: string) {}
  logName(): void {
    console.log(this.name)
  }
}

const apple: Fruit = {
  name: 'apple',
  color: 'red',
  mass: 1,
  logName() {
    console.log(this.name)
  },
}

// namespace

function fn(): void {
  console.log('namedapce fn')
}
type T = keyof Document
console.log(fn())
