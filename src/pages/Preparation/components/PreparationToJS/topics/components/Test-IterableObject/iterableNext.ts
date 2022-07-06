export interface Iterable<T> {
  [Symbol.iterator](): Iterator<T>;
}
export const myIterablePerson = {
  name: 'Vital',
  age: 30,
  [Symbol.iterator]: function* (): any {
    const values = Object.values(this);
    let i = 0;
    while (values[i]) {
      yield values[i];
      i++;
    }
  },
};

Object.defineProperty(myIterablePerson, 'name', {
  configurable: false,
  value: 'Vital Lihoy',
});
const nameDesc = Object.getOwnPropertyDescriptor(myIterablePerson, 'name');
const keysDesc = Object.getOwnPropertyDescriptors(myIterablePerson);
console.log('nameDesc: ', nameDesc);
console.log('keysDesc: ', keysDesc);
// Object.defineProperty(myIterablePerson, 'name', { enumerable: false, value: myIterablePerson.name })

for (const myIterableElement of myIterablePerson) {
  console.log('iterable key value: ', myIterableElement);
}
