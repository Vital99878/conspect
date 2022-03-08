export class SingletonState {
  private static instance: any = [10, 15, 20]
  static createInstance<T>(store: T[]): T[] {
    if (SingletonState.instance) {
      console.log(`%cInstance already exist! Please, use getInstance method`, 'color:tomato; font-size: 14px')
    }
    if (!SingletonState.instance) {
      SingletonState.instance = store
      console.log(`%cInstance created`, 'color:green; font-size: 14px')
    }
    return SingletonState.instance
  }
  static getInstance<T>(): T[] {
    console.log('this.getInstance(): ')
    return SingletonState.instance
  }
  static updateState<T>(): void {
    const newItem = Math.floor(Math.random()*100)
    const updated = [...SingletonState.instance, newItem]
    SingletonState.destroyInstance()
    SingletonState.createInstance(updated)
    console.log('SingletonState.instance: ', SingletonState.instance)
  }
  static destroyInstance(): void {
    if (!SingletonState.instance) {
      console.log(`%cInstance does not exist and cannot be destroyed!`, 'color:tomato; font-size: 14px')
      return
    }
    if (SingletonState.instance) {
      SingletonState.instance = null
      console.log(`%cInstance destroyed`, 'color:green; font-size: 14px')
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}
}
