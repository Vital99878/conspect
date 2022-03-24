import { TodoType, TodoStatus } from '../../../../components/Todos/models/index.model'

// type M = {
//   name: string,
//   methods: object
// }

export class SingletonMethods {
  private static instance: any
  static getMethods(name: string) {
    if (!SingletonMethods.instance) return

    return this.instance[name]
  }
  static setMethods(name: string, methods: any) {
    SingletonMethods.instance = {}
    SingletonMethods.instance[name] = methods
  }
  static destroyMethods(name: string): void {
    if (!SingletonMethods.instance) {
      console.log(`%cInstance does not exist and cannot be destroyed!`, 'color:tomato; font-size: 14px')
      return
    }
    if (SingletonMethods.instance[name]) {
      SingletonMethods.instance = null
      console.log(`%cMethods destroyed`, 'color:green; font-size: 14px')
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}
}
