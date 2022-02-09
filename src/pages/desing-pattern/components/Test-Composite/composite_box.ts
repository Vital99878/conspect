/**
 * Паттерн Компоновщик
 *
 * Назначение: Позволяет сгруппировать объекты в древовидную структуру, а затем
 * работать с ними так, как будто это единичный объект.
 */

/**
 * Базовый класс Компонент объявляет общие операции как для простых, так и для
 * сложных объектов структуры.
 */
abstract class Box {
  abstract price: number

  protected parent!: Box

  public setParent(parent: Box | null) {
    if (parent) this.parent = parent
  }

  public getParent(): Box {
    return this.parent
  }

  public abstract add(component: Box): void

  public abstract remove(component: Box): void

  public abstract isComposite(): boolean

  public abstract cost(): number
}

export class MainBox extends Box {
  price: number
  constructor(price: number) {
    super()
    this.price = price
  }
  protected children: Box[] = []

  public add(component: Box): void {
    this.children.push(component)
  }

  public remove(component: Box): void {
    const componentIndex = this.children.indexOf(component)
    this.children.splice(componentIndex, 1)

    component.setParent(null)
  }

  public isComposite(): boolean {
    return true
  }

  public cost(): number {
    if (!this.children.length) return this.price
    const results = []
    for (const child of this.children) {
      results.push(child.cost())
    }
    return results.reduce((acc, number) => acc + number, 0) + this.price
  }
}
