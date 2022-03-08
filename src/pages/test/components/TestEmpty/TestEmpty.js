import React, { useEffect, useReducer, useMemo } from 'react'
import './TestEmpty.css'
import { useCloser } from '../../../Preparation/components/PreparationToJS/topics'

const TestEmpty = () => {
  const { count, inc, dec, res } = useCloser(15)

  {
    // const obj = {
    //   name: 'me Name is obj',
    //   hi () {
    //     console.log(this.name)
    //   },
    //   bindToName: function () {
    //     return (name) => {
    //       this.name = name
    //     }
    //   },
    // }
    // obj.hi()
    //
    // function testBind (age) {
    //   this.age = age
    // }
    //
    // const bnFn = obj.bindToName()
    // const af = () => obj.hi()
    // setTimeout(af, 1500)
    // bnFn('new name form bind')
    // console.log('obj: ', obj)
  }

  {
    // const calculator = {
    //   a: null,
    //   b: null,
    //   read(a, b) {
    //     this.a = a
    //     this.b = b
    //   },
    //   sum() {
    //     return this.a + this.b
    //   },
    //   mull() {
    //     return this.a * this.b
    //   },
    // }
    // calculator.read(3, 4)
    // console.log(calculator.sum())
    // console.log(calculator.mull())
  }

  // Object.is
  {
    // console.log(Object.is('foo', 'foo')) // true
    // console.log(Object.is(window, window)) // true
    //
    // console.log(Object.is('foo', 'bar')) // false
    // console.log(Object.is([], [])) // false

    const test = { a: 1 }
    const test2 = { a: 1 }

    console.log(Object.is(test, test2)) // true

    console.log(Object.is(null, null)) // true

    // Специальные случаи
    console.log(Object.is(0, -0)) // false
    console.log(Object.is(-0, -0)) // true
    console.log(Object.is(NaN, 0 / 0)) // true
  }

  return (
    <div className="testEmpty">
      <h2>Test everything</h2>
      <h2>{count}</h2>
      <button onClick={inc}>inc</button>
      <button onClick={dec}>dec</button>
      <button onClick={res}>reset</button>
      <button onClick={() => setTimeout(af, 250)}>setTime</button>
      {/* <button onClick={bnFn}>createBindFn</button>*/}
    </div>
  )
}

export default TestEmpty
