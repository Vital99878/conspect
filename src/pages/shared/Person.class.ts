export class Person {
  static logClassName(): void {
    console.log(this.name)
  }
  static sm2() : void {
    console.log('sm 2')
  }
  constructor(public name: string, public age: number) { }
  great() : void {
    console.log(`Hi, ia am ${this.name}`)
  }
  logAge() : void {
    console.log(`My age is ${this.age}`)
  }
}
