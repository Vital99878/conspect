/**
 * Паттерн Адаптер
 *
 * Назначение: Позволяет объектам с несовместимыми интерфейсами работать вместе.
 */
// interface Target {
//   request(): void
// }

export class Target {
  public request(): void {
    console.log(`%cTarget: The default target\'s behavior.`, 'color:green; font-size: 14px');
  }
}

export class TargetB {
  public specificRequest(): void {
    console.log(`%cTarget: The adapted target\'s behavior.`, 'color:green; font-size: 14px');
  }
}

export class Adapter implements Target {
  private adaptee: TargetB;

  constructor(adaptee: TargetB) {
    this.adaptee = adaptee;
  }

  public request(): void {
    // some logic to adapt data
    this.adaptee.specificRequest()
  }
}

