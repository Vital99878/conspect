'use strict'
exports.__esModule = true
exports.TestStaticField = void 0
var TestStaticField = /** @class */ (function () {
  function TestStaticField() {}
  TestStaticField.logData = function () {
    console.log('some data')
  }
  TestStaticField.logAge = function (age) {
    console.log(age)
  }
  return TestStaticField
})()
exports.TestStaticField = TestStaticField
var fieldsForFilter = ['name', 'prototype', 'length']
var classStaticFields = Object.getOwnPropertyNames(TestStaticField).filter(function (field) {
  return !fieldsForFilter.includes(field)
})
console.log(classStaticFields)
