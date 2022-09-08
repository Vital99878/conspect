/**
 * Паттерн Состояние
 *
 * Назначение: Позволяет объектам менять поведение в зависимости от своего
 * состояния. Извне создаётся впечатление, что изменился класс объекта.
 */

/**
 * Базовый класс Состояния объявляет методы, которые должны реализовать все
 * Конкретные Состояния, а также предоставляет обратную ссылку на объект
 * Контекст, связанный с Состоянием. Эта обратная ссылка может использоваться
 * Состояниями для передачи Контекста другому Состоянию.
 */
export abstract class State {
  protected context!: Context;

  constructor(public name: string) {}

  public setContext(context: Context): void {
    this.context = context;
  }

  public abstract handle1(): void;

  public abstract handle2(): void;
}

/**
 * Контекст определяет интерфейс, представляющий интерес для клиентов. Он также
 * хранит ссылку на экземпляр подкласса Состояния, который отображает текущее
 * состояние Контекста.
 */
export class Context {
  /**
   * @type {State} Ссылка на текущее состояние Контекста.
   */
  public state: State;
  public setState(state: State): void {
    console.log(`%cSet state to S${state.name}`, 'color:green; font-size: 14px');
    this.state = state;
    this.state.setContext(this);
  }

  constructor(state: State) {
    this.state = state;
  }

  /**
   * Контекст делегирует часть своего поведения текущему объекту Состояния.
   */
  public request1(): void {
    this.state.handle1();
  }

  public request2(): void {
    this.state.handle2();
  }
}

/**
 * Конкретные Состояния реализуют различные модели поведения, связанные с
 * состоянием Контекста.
 */
export class ConcreteState_A extends State {
  public handle1(): void {
    console.log(`%cConcrete State A handles request 1.`, 'color:green; font-size: 14px');
  }

  public handle2(): void {
    console.log(`%cConcrete State A handles request 2.`, 'color:green; font-size: 14px');
  }
}

export class ConcreteState_B extends State {
  public handle1(): void {
    console.log(`%cConcrete State B handles request 1.`, 'color:green; font-size: 14px');
  }

  public handle2(): void {
    console.log(`%cConcrete State B handles request 2.`, 'color:green; font-size: 14px');
  }
}

/**
 * Клиентский код.
 */
// const context = new Context(new ConcreteState_A());
// context.request1();
// context.request2();
