export class TestStaticField {
  static logData(): void {
    console.log('some data')
  }
  static logAge(): void {
    console.log('age')
  }
}

const fieldsForFilter = ['name', 'prototype', 'length']
const classStaticFields = Object.getOwnPropertyNames(TestStaticField).filter(
  (field) => !fieldsForFilter.includes(field)
)

type TClassStaticMethods = {
  logData: () => void
  logAge: () => void
}
type TClassStaticMethodsNames = 'logData' | 'logAge'

function useStaticField(clazz: TClassStaticMethods, staticMethodName: TClassStaticMethodsNames): void {
  clazz[staticMethodName]()
}

useStaticField(TestStaticField, 'logData')
