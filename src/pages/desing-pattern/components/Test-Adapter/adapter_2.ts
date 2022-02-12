/**
 * Паттерн Адаптер
 *
 * Назначение: Позволяет объектам с несовместимыми интерфейсами работать вместе.
 */
// interface Target {
//   request(): void
// }

export class TargetA {
  public requestA(): void {
    console.log(`%cTarget: The default Target A request.`, 'color:green; font-size: 14px')
  }
}

export class TargetB {
  public requestB(): void {
    console.log(`%cTarget: The default Target B request.`, 'color:green; font-size: 14px')
  }
}

export class Adapter_AtoB implements TargetA {
  private adaptee: TargetB

  constructor(adaptee: TargetB) {
    this.adaptee = adaptee
  }

  public requestA(): void {
    // some logic to adapt data
    console.log(`%cTarget: The Target A request adapted to Target B request.`, 'color:tomato; font-size: 14px')
    this.adaptee.requestB()
  }
}
