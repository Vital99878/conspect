/**
 * Паттерн Адаптер
 *
 * Назначение: Позволяет объектам с несовместимыми интерфейсами работать вместе.
 */

/**
 * Целевой класс объявляет интерфейс, с которым может работать клиентский код.
 */
export class Target {
  public request(): string {
    return 'Target: The default target\'s behavior.'
  }
}

/**
 * Адаптируемый класс содержит некоторое полезное поведение, но его интерфейс
 * несовместим с существующим клиентским кодом. Адаптируемый класс нуждается в
 * некоторой доработке, прежде чем клиентский код сможет его использовать.
 */
class Adaptee {
  public specificRequest(): string {
    return '.eetpadA eht fo roivaheb laicepS'
  }
}

/**
 * Адаптер делает интерфейс Адаптируемого класса совместимым с целевым
 * интерфейсом.
 */
class Adapter extends Target {
  private adaptee: Adaptee

  constructor(adaptee: Adaptee) {
    super()
    this.adaptee = adaptee
  }

  public request(): string {
    const result = this.adaptee.specificRequest().split('').reverse().join('')
    return `Adapter: (TRANSLATED) ${result}`
  }
}

/**
 * Клиентский код поддерживает все классы, использующие целевой интерфейс.
 */

