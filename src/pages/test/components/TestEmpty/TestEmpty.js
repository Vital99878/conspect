import React from 'react'
import './TestEmpty.css'
import { Person } from '../../../shared/Person.class'

const TestEmpty = () => {
  {
    // console.log(`%cPrototype class start`, 'color:green; font-size: 14px')
    // class PersonClass {
    //   static great1() {
    //     console.log(`Hello, I am Static Method 1 of class`)
    //   }
    //   constructor(name, age) {
    //     this.name = name
    //     this.age = age
    //   }
    //   great() {
    //     console.log(`Hello, my name is ${this.name}`)
    //   }
    // }
    // PersonClass.great2 = function() {
    //   console.log(`Hello, I am Static Method 2 of class`)
    // }
    // PersonClass.great1()
    // PersonClass.great2()
    //
    // console.log('pPerson class: ', PersonClass)
    //
    // const vital = new PersonClass('Vital', 35)
    // const naz = new PersonClass('Nazira', 35)
    // vital.great()
    // naz.great()
    // console.log(`%cPrototype class end`, 'color:tomato; font-size: 14px')
  }

  {
    // console.log(`%cPrototype FN start`, 'color:green; font-size: 14px')
    // function PersonFn(name, age) {
    //   this.name = name
    //   this.age = age
    //   return { name, age }
    // }
    // PersonFn.great = function() {
    //   console.log(`Hello, I am Static Method`)
    // }
    // PersonFn.great.prototype = function() {
    //   console.log(`Hello, I am ${this.name} Instance method`)
    // }
    // PersonFn.great()
    //
    // const vitalFn = new PersonFn('Vital', 35)
    // const nazFn = new PersonFn('Nazira', 35)
    // console.log(`%cPrototype FN end`, 'color:tomato; font-size: 14px')
  }

  {
    // consoling all Build-in Global Objects prototypes
    // console.log('String prototype: ', String.prototype)
    // console.log('Number prototype: ', Number.prototype)
    // console.log('Boolean prototype: ', Boolean.prototype)
    // console.log('Symbol prototype: ', Symbol.prototype)
    // console.log('Date prototype: ', Date.prototype)
    // console.log('Object prototype: ', Object.prototype)
    // console.log('Array prototype: ', Array.prototype)

    const StringP = String.prototype.prototype
    const NumberP = Number.prototype.prototype
    const BooleaP = Boolean.prototype.prototype
    const SymbolP = Symbol.prototype.prototype
    const DateDaP = Date.prototype.prototype
    const ObjectP = Object.prototype.prototype
    const ArrayAP = Array.prototype.prototype
    const PersonP = Person.prototype
    const afn = () => console.log('arrow fn')

    // console.log('top prototype: ', String.prototype.prototype === Boolean.prototype.prototype)
    // console.log('top prototype: ', String.prototype.prototype === Number.prototype.prototype)
    // console.log('top prototype: ', String.prototype.prototype === Symbol.prototype.prototype)
    // console.log('top prototype: ', String.prototype.prototype === Date.prototype.prototype)
    // console.log('top prototype: ', String.prototype.prototype === Object.prototype.prototype)
    // console.log('top prototype: ', String.prototype.prototype === Array.prototype.prototype)

    // console.log('String.prototype.__proto__ ', String.prototype.__proto__)
    // console.log('Number.prototype.__proto__ ', Number.prototype.__proto__)
    // console.log('Boolean.prototype.__proto__ ', Boolean.prototype.__proto__)
    // console.log('Symbol.prototype.__proto__ ', Symbol.prototype.__proto__)
    // console.log('Date.prototype.__proto__ ', Date.prototype.__proto__)
    // console.log('Error.prototype.__proto__ ', Error.prototype.__proto__)
    // console.log('Array.prototype.__proto__ ', Array.prototype.__proto__)
    // console.log('Own Person.prototype.__proto__ ', Person.prototype.__proto__)
    // console.log('Math.__proto__: ', Math.__proto__)
    // console.log('Object.prototype: ', Object.prototype)
    // console.log('afn prototype: ', afn.__proto__)
    // console.log('afn prototype: ', afn.__proto__ === Function.prototype)

    // console.log('It root prototype first: ', Object.prototype === Number.prototype.__proto__)
    // console.log('It root prototype: ', Object.prototype === Boolean.prototype.__proto__)
    // console.log('It root prototype: ', Object.prototype === String.prototype.__proto__)
    // console.log('It root prototype: ', Object.prototype === Symbol.prototype.__proto__)
    // console.log('It root prototype: ', Object.prototype === Date.prototype.__proto__)
    // console.log('It root prototype: ', Object.prototype === Error.prototype.__proto__)
    // console.log('It root prototype: ', Object.prototype === Promise.prototype.__proto__)
    // console.log('It root prototype: ', Object.prototype === Array.prototype.__proto__)
    // console.log('It root prototype: ', Object.prototype === Function.prototype.__proto__)
    // console.log('It root prototype: ', Object.prototype === Math.__proto__)
    // console.log('It root prototype last: ', Object.prototype === Person.prototype.__proto__)

    const me = new Person('Vital', 25)
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    console.log(me.__proto__ === Person.prototype)
    console.log(Person.prototype.__proto__ === Object.prototype)
    console.log(me.__proto__.__proto__ === Object.prototype)
  }

  return (
    <div className="testEmpty">
      <h2>Test everything</h2>
    </div>
  )
}

export default TestEmpty
