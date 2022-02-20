import React from 'react'
import { Person } from '../../../shared/Person.class'

const PreparationToJS: React.FC = () => {
  {
    // console.log(`%cthis block start`, 'color:tomato; font-size: 14px');
    // console.log(`%cthis block finished`, 'color:tomato; font-size: 14px');
  }

  {
    // Closer
    // console.log(`%cCloser block start`, 'color:tomato; font-size: 14px')
    //
    // const createCloser = function() {
    //   let count = 0
    //
    //   function a(): void {
    //     console.log(++count)
    //   }
    //
    //   function b(): void {
    //     console.log(++count)
    //   }
    //
    //   function resetCount(): void {
    //     count = 0
    //   }
    //
    //   return { counter1: a, counter2: b, resetCount }
    // }
    // const { counter1, counter2, resetCount } = createCloser()
    //
    // counter1()
    // counter1()
    // counter2()
    // counter2()
    // resetCount()
    // counter2()
    // counter1()
    //
    // console.log(`%cCloser block finished`, 'color:tomato; font-size: 14px')
  }

  return <div className="test-components">Preparation To JS</div>
}

export default PreparationToJS
