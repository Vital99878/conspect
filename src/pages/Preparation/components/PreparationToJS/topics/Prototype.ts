import { Person } from '../../../../shared/Person.class'

const topicPrototypeChain = () => {
  // class PersonClass
  {
    // console.log(`%cPrototype class start`, 'color:green; font-size: 14px')
    // class PersonClass {
    //   static great1() {
    //     console.log(`Hello, I am Static Method 1 of class`)
    //   }
    //   constructor(public name: string, public age: number) {}
    //   great() {
    //     console.log(`Hello, my name is ${this.name}`)
    //   }
    // }
    // PersonClass.great1()
    // console.log('pPerson class: ', PersonClass)
    //
    // const vital = new PersonClass('Vital', 35)
    // const naz = new PersonClass('Nazira', 35)
    // vital.great()
    // naz.great()
    //
    // console.log(`%cPrototype class end`, 'color:tomato; font-size: 14px')
  }

  // prototype hierarchy
  {
    // consoling all Build-in Global Objects prototypes
    // console.log('String prototype: ', String.prototype)
    // console.log('Number prototype: ', Number.prototype)
    // console.log('Boolean prototype: ', Boolean.prototype)
    // console.log('Symbol prototype: ', Symbol.prototype)
    // console.log('Date prototype: ', Date.prototype)
    // console.log('Object prototype: ', Object.prototype)
    // console.log('Array prototype: ', Array.prototype)

    const StringPrototype = String.prototype
    const NumberPrototype = Number.prototype
    const BooleanPrototype = Boolean.prototype
    const SymbolPrototype = Symbol.prototype
    const DateDaPrototype = Date.prototype
    const ObjectPrototype = Object.prototype
    const ArrayAPrototype = Array.prototype
    const PersonPrototype = Person.prototype
    // const afn = () => console.log('arrow fn')

    // console.log('top prototype: ', Object.getPrototypeOf(String) === Object.getPrototypeOf(Boolean))
    // console.log('top prototype: ', Object.getPrototypeOf(String) === Object.getPrototypeOf(Number))
    // console.log('top prototype: ', Object.getPrototypeOf(String) === Object.getPrototypeOf(Symbol))
    // console.log('top prototype: ', Object.getPrototypeOf(String) === Object.getPrototypeOf(Date))
    // console.log('top prototype: ', Object.getPrototypeOf(String) === Object.getPrototypeOf(Object))
    // console.log('top prototype: ', Object.getPrototypeOf(String) === Object.getPrototypeOf(Array))

    // console.log('String.prototype.__proto__ ', String.prototype)
    // console.log('Number.prototype.__proto__ ', Number.prototype)
    // console.log('Boolean.prototype ', Boolean.prototype)
    // console.log('Symbol.prototype ', Symbol.prototype)
    // console.log('Date.prototype ', Date.prototype)
    // console.log('Error.prototype ', Error.prototype)
    // console.log('Array.prototype ', Array.prototype)
    // console.log('Own Person.prototype ', Person.prototype)
    // console.log('Math: ', Math)
    // console.log('Object.prototype: ', Object.prototype)
    // console.log('afn prototype: ', afn)
    // console.log('afn prototype: ', afn === Function.prototype)

    // console.log('It root prototype first: ', Object.prototype === Number.prototype)
    // console.log('It root prototype: ', Object.prototype === Object.getPrototypeOf(Boolean.prototype))
    // console.log('It root prototype: ', Object.prototype === Object.getPrototypeOf(String.prototype))
    // console.log('It root prototype: ', Object.prototype === Object.getPrototypeOf(Symbol.prototype))
    // console.log('It root prototype: ', Object.prototype === Object.getPrototypeOf(Date.prototype))
    // console.log('It root prototype: ', Object.prototype === Object.getPrototypeOf(Error.prototype))
    // console.log('It root prototype: ', Object.prototype === Object.getPrototypeOf(Promise.prototype))
    // console.log('It root prototype: ', Object.prototype === Object.getPrototypeOf(Array.prototype))
    // console.log('It root prototype: ', Object.prototype === Object.getPrototypeOf(Function.prototype))
    // console.log('It root prototype: ', Object.prototype === Object.getPrototypeOf(Math))
    // console.log('It root prototype last: ', Object.prototype === Person.prototype)

    // console.log('Person.prototype: ', Person.prototype)
    Person.prototype.constructor.prototype.great()
    Person.logClassName()
    Person.staticMethod()
    const me = new Person('Vital', 25, 'ff')
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    // console.log('numbers.__proto__: ', numbers)

    // console.log(me.__proto__ === Person.prototype)
    // console.log(Person.prototype.__proto__ === Object.prototype)
    // console.log(me.__proto__.__proto__ === Object.prototype)
  }
}

export default topicPrototypeChain
