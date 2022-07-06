export abstract class State {
  constructor(public name: string) {}

  public abstract method_1(): void;

  public abstract method_1(): void;
}

/**
 * Контекст определяет интерфейс, представляющий интерес для клиентов. Он также
 * хранит ссылку на экземпляр подкласса Состояния, который отображает текущее
 * состояние Контекста.
 */
export class Context {
  private state: State;
  public setState(state: State): void {
    console.log(`%cSet state to S${state.name}`, 'color:green; font-size: 14px');
    this.state = state;
  }

  constructor(state: State) {
    this.state = state;
  }

  public method_1(): void {
    this.state.method_1();
  }

  public method_2(): void {
    this.state.method_1();
  }
}

/**
 * Конкретные Состояния реализуют различные модели поведения, связанные с
 * состоянием Контекста.
 */
export class Done extends State {
  public method_1(): void {
    console.log(`%cConcrete State Done handles request 1.`, 'color:green; font-size: 14px');
  }

  public method_2(): void {
    console.log(`%cConcrete State Done handles request 2.`, 'color:green; font-size: 14px');
  }
}

export class Doing extends State {
  public method_1(): void {
    console.log(`%cConcrete State Doing handles request 1.`, 'color:green; font-size: 14px');
  }

  public method_2(): void {
    console.log(`%cConcrete State Doing handles request 2.`, 'color:green; font-size: 14px');
  }
}

/**
 * Клиентский код.
 */
// const context = new Context(new ConcreteState_A());
// context.request1();
// context.request2();
