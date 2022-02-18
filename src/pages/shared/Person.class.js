export class Person {
  // static great() {
  //   console.log(`Hi, I class ${this.name}`)
  // }
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  great() {
    console.log(`Hi, ia am ${this.name}`)
  }
}
