import { Person, Dictionary, StoreTodos, Todo } from './basic.models'

type Fruits = 'apple' | 'cherry'
type Apple = Pick<Person, 'age'>
type Fruit<Label> = {
  mass: number
  label: Label
}

type AppleOrCherry = {
  [key: string]: Fruits
}
const apple: AppleOrCherry = {
  fruits: 'apple',
}

type Mapped = {
  [FruitKey in Fruits]: Fruit<FruitKey>
}

const fruitList: Mapped = {
  apple: {
    label: 'apple',
    mass: 1,
  },
  cherry: {
    label: 'cherry',
    mass: 1,
  },
}

const cherry: Fruit<'cherry'> = {
  label: 'cherry',
  mass: 5,
}
