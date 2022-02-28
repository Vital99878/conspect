/**
 * Паттерн Наблюдатель
 *
 * Назначение: Создаёт механизм подписки, позволяющий одним объектам следить и
 * реагировать на события, происходящие в других объектах.
 *
 * Обратите внимание, что существует множество различных терминов с похожими
 * значениями, связанных с этим паттерном. Просто помните, что Субъекта также
 * называют Издателем, а Наблюдателя часто называют Подписчиком и наоборот.
 * Также глаголы «наблюдать», «слушать» или «отслеживать» обычно означают одно и
 * то же.
 */

/**
 * Интферфейс издателя объявляет набор методов для управлениями подписчиками.
 */
interface Subject {
  // Присоединяет наблюдателя к издателю.
  attach(observer: Observer): void

  // Отсоединяет наблюдателя от издателя.
  detach(observer: Observer): void

  // Уведомляет всех наблюдателей о событии.
  notify(): void
}

/**
 * Интерфейс Наблюдателя объявляет метод уведомления, который издатели
 * используют для оповещения своих подписчиков.
 */
interface Observer {
  // Получить обновление от субъекта.
  update(subjectState: number): void
}

/**
 * Издатель владеет некоторым важным состоянием и оповещает наблюдателей о его
 * изменениях.
 */
export class Publisher implements Subject {
  /**
   * @type {number} Для удобства в этой переменной хранится состояние
   * Издателя, необходимое всем подписчикам.
   */
  public state = 0

  /**
   * @type {Observer[]} Список подписчиков. В реальной жизни список
   * подписчиков может храниться в более подробном виде (классифицируется по
   * типу события и т.д.)
   */
  private observers: Observer[] = []

  /**
   * Методы управления подпиской.
   */

  public attach(observer: Observer): void {
    const isExist = this.observers.includes(observer)
    if (isExist) {
      return console.log('Subject: Observer has been attached already.')
    }

    console.log('Subject: Attached an observer.')
    this.observers.push(observer)
  }

  public detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer)
    if (observerIndex === -1) {
      return console.log('Subject: Nonexistent observer.')
    }

    this.observers.splice(observerIndex, 1)
    console.log('Subject: Detached an observer.')
  }

  /**
   * Запуск обновления в каждом подписчике.
   */
  public notify(): void {
    console.log('Subject: Notifying observers...')
    for (const observer of this.observers) {
      console.log('this: ', this.state)
      observer.update(this.state)
    }
  }

  /**
   * Обычно логика подписки – только часть того, что делает Издатель. Издатели
   * часто содержат некоторую важную бизнес-логику, которая запускает метод
   * уведомления всякий раз, когда должно произойти что-то важное (или после
   * этого).
   */
  public someBusinessLogic(): void {
    console.log('\nSubject: I\'m doing something important.')
    this.state += 1

    console.log(`Subject: My state has just changed to: ${this.state}`)
    this.notify()
  }
}

/**
 * Конкретные Наблюдатели реагируют на обновления, выпущенные Издателем, к
 * которому они прикреплены.
 */
export class ConcreteObserverA implements Observer {
  public stateA = 10
  public update(subjectState: number): void {
    this.stateA += subjectState
    console.log('this.stateA: ', this.stateA)
    // console.log(`%c${subject.state} A`, 'color:tomato; font-size: 14px');
  }
}

export class ConcreteObserverB implements Observer {
  public update(subjectState: number): void {
    console.log(`%c${subjectState} B`, 'color:tomato; font-size: 14px')
  }
}

/**
 * Клиентский код.
 */
