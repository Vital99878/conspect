/**
 * Паттерн Итератор
 *
 * Назначение: Даёт возможность последовательно обходить элементы составных
 * объектов, не раскрывая их внутреннего представления.
 */

export interface Iterator<T> {
  // Возврат текущего элемента.
  current(): T

  // Возврат текущего элемента и переход к следующему элементу.
  next(): T

  // Возврат ключа текущего элемента.
  key(): number

  // Проверяет корректность текущей позиции.
  valid(): boolean

  // Перемотка Итератора к первому элементу.
  rewind(): void
}

// Получить внешний итератор.
interface Aggregator {
  getIterator(): Iterator<string>
}

class AlphabeticalOrderIterator implements Iterator<string> {
  private collection: WordsCollection

  /**
   * Хранит текущее положение обхода. У итератора может быть множество других
   * полей для хранения состояния итерации, особенно когда он должен работать
   * с определённым типом коллекции.
   */
  private position = 0

  /**
   * Эта переменная указывает направление обхода.
   */
  private reverse = false

  constructor(collection: WordsCollection, reverse = false) {
    this.collection = collection
    this.reverse = reverse

    if (reverse) {
      this.position = collection.getLength() - 1
    }
  }

  public rewind() {
    this.position = this.reverse ? this.collection.getLength() - 1 : 0
  }

  public current(): string {
    return this.collection.getItems()[this.position]
  }

  public next(): string {
    const item = this.collection.getItems()[this.position]
    this.position += this.reverse ? -1 : 1
    return item
  }

  public key(): number {
    return this.position
  }

  public valid(): boolean {
    if (this.reverse) {
      return this.position >= 0
    }

    return this.position < this.collection.getLength()
  }
}

class WordsCollection implements Aggregator {
  private items: string[] = []

  public getItems(): string[] {
    return this.items
  }

  public getLength(): number {
    return this.items.length
  }

  public addItem(item: string): void {
    this.items.push(item)
  }

  public getIterator(): Iterator<string> {
    return new AlphabeticalOrderIterator(this)
  }

  public getReverseIterator(): Iterator<string> {
    return new AlphabeticalOrderIterator(this, true)
  }
}

/**
 * Клиентский код может знать или не знать о Конкретном Итераторе или классах
 * Коллекций, в зависимости от уровня косвенности, который вы хотите сохранить в
 * своей программе.
 */
const collection = new WordsCollection()
collection.addItem('First')
collection.addItem('Second')
collection.addItem('Third')

const collectionIterator = collection.getIterator()

console.log('Straight traversal:')
while (collectionIterator.valid()) {
  console.log(collectionIterator.next())
}

console.log('')
console.log('Reverse traversal:')
const reverseIterator = collection.getReverseIterator()
while (reverseIterator.valid()) {
  console.log(reverseIterator.next())
}
