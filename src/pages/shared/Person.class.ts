import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable'

type GreetFunction = () => void
export class Person {
  static persons: Person[] = []
  static addPerson(person: Person): void {
    this.persons.push(person)
  }
  static showPersons(): void {
    console.log(this.persons)
  }
  static logClassName(): void {
    console.log(this.name)
  }
  static staticMethod(): void {
    console.log('Peron\'s static Method')
  }
  constructor(public name: string, public age: number) {
    Person.addPerson(this)
  }
  great(): void {
    console.log(`Hi, ia am ${this.name}`)
  }
  logAge(): void {
    console.log(`My age is ${this.age}`)
  }
  logAge_AF(): GreetFunction {
    const af = () => console.log(`My age is ${this.age}`)
    return af
  }
  setAge_AF(): any {
    const af = (age: number) => (this.age = age)
    return af
  }
}

class ITPerson extends Person {
  static addPerson(): void {
    this.persons.shift()
  }
  static logClassName(): void {
    console.log(this.length)
  }
  static staticMethodITPerson(): void {
    console.log('IT Peron\'s static Method')
  }
  constructor(public name: string, public age: number, public it: string) {
    super(name, age) // вызывает конструктор наследуемого класса
    super.great() // обращается напрямую к методам прототипа наследуемого класса
  }
  // great():void {
  //   console.log('reasing great method!')
  // }
  great(): void {
    super.great()
    console.log('reasing great method!')
  }
  greatOriginal(): void {
    super.great()
  }
}

const itPerson = new ITPerson('Jora IT', 20, 'front')
const person = new Person('Ken', 20)
const person_2 = new Person('Ken', 20)

// Person.logClassName()
// ITPerson.logClassName()
// ITPerson.staticMethodITPerson()
// ITPerson.addPerson()
// Person.showPersons()

// itPerson.great()
// console.log('ITPerson: ', ITPerson)
// console.log('ITPerson prototype ', Object.getPrototypeOf(ITPerson))

// Пример того как Стрелочная функция присваивает контекст в момент создания
{
  // // В этом примере мы даём доступ к полю age объекта person в методы других объектов
  // const person = new Person('Name', 35)
  // const obj1 = { logPersonAge: person.logAge_AF(), age: 10 }
  // const obj2 = { logPersonAge: person.logAge_AF(), age: 15 }
  // const obj3 = { setPersonAge: person.setAge_AF(), age: 15 }
  // obj1.logPersonAge()
  // obj3.setPersonAge(15)
  // obj2.logPersonAge()
}
