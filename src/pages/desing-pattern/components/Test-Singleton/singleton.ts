export class Singleton {
  private static instance: any;
  static createInstance<T>(initialInstance: T): T {
    if (Singleton.instance) {
      console.log(`%cInstance already exist! Please, use getInstance method`, 'color:tomato; font-size: 14px');
      // throw new Error('Instance already exist! Please, use getInstance method')
    }
    if (!Singleton.instance) {
      Singleton.instance = initialInstance;
      console.log(`%cInstance created`, 'color:green; font-size: 14px');
    }
    return Singleton.instance;
  }
  static getInstance() {
    if (Singleton.instance) {
      console.log(`%cInstance got`, 'color:green; font-size: 14px');
      return Singleton.instance;
    }
    if (!Singleton.instance) {
      console.log(`%cInstance does not exist. Please use createInstance method`, 'color:tomato; font-size: 14px');
    }
  }
  static destroyInstance(): void {
    if (!Singleton.instance) {
      console.log(`%cInstance does not exist and cannot be destroyed!`, 'color:tomato; font-size: 14px');
      return;
    }
    if (Singleton.instance) {
      Singleton.instance = null;
      console.log(`%cInstance destroyed`, 'color:green; font-size: 14px');
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}
}
