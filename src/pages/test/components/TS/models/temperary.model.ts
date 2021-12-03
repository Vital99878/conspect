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
