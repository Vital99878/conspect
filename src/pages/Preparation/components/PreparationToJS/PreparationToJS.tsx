import React from 'react'
import { multicast } from 'rxjs/operators'
import { numbers, person, objWithSymbol } from '../../../../commonMockData'
// import { Person } from '../../../shared/Person.class'
import { topicPrototypeChain, useCloser, eventLoop, topicPromise } from './topics'
import DomEvent from './topics/components/domEvent/domEvent'
import topicCookie from './topics/Cookie'
import topicEventLoop from './topics/eventLoop'
// import DomEvent from './topics/components/domEvent'
import { exercises } from './topics/exercises'

const PreparationToJS: React.FC = () => {
  // Loops : classic for, for of, for in, forEach
  {
    // console.log(`%cLoops block start`, 'color:darkgreen; font-size: 16px')
    //
    // classic loop

    // classic for
    {
      // let i; let j;
      // loop1:
      //   for (i = 0; i < 3; i++) { // Первый цикл, обозначенный меткой "loop1"
      //     loop2:
      //       for (j = 0; j < 3; j++) { // Второй цикл, обозначенный меткой "loop2"
      //         if (i === 1 && j === 1) {
      //           continue loop1; // завершит внутренний loop2 и перейдет к следующей итерации loop1
      //         }
      //         console.log('i = ' + i + ', j = ' + j);
      //       }
      //   }
    }

    // // for of
    // {
    //   // only Array, Map, Set, fnGenerator and obj with iterator
    //   const uniqNumbers = new Set(numbers)
    //   const map = new Map()
    //   map.set('numbers', numbers)
    //   map.set('person class', Person)
    //
    //   for (const num of numbers) {
    //     // console.log('num: ', num)
    //   }
    //   for (const num of uniqNumbers) {
    //     // console.log('num: ', num)
    //   }
    //   for (const item of map) {
    //     // returns item = [key, value]
    //     console.log('map item: ', item)
    //   }
    //
    //   // бежит по массиву, который получается из резултатов fnGenerator
    //   const fibonacci = function* () {
    //     // функция-генератор
    //     let [prev, curr] = [0, 1]
    //     for (;;) {
    //       [prev, curr] = [curr, prev + curr]
    //       yield curr
    //     }
    //   }
    //   for (const n of fibonacci()) {
    //     // ограничивает последовательность на 1000
    //     if (n > 1000) break
    //     // console.log(n)
    //   }
    // }
    //
    // // for in
    // Object.defineProperty(person, 'name', { enumerable: false, value: 'Vit' }) // hide key for loop
    //
    // for (const key in person) {
    //   // need type-guard for iterable obj
    //   if (key in person) console.log('person obj key: ', key)
    // }
    //
    // // forEach
    // // don't work with 'continue' and 'break' commands.
    // // numbers.forEach((num) => console.log('num: ', num))
    //
    // console.log(`%cLoops block finished`, 'color:tomato; font-size: 12px')
  }

  // Closer
  {
    // const { counter1 } = useCloser()
    // counter1()
  }

  // ?? = variable is not null/undefined.
  {
    // const test1 = 0
    // const test2 = 'test2'
    // console.log(test1 ?? test2 ) // 0
    // console.log(true || null || 'string')
    // console.log('string' || null || 'string')
    // if ('string' || null || 'string') {
    //   console.log('fdfd')
    // }
  }

  // topics
  {
    // topicPrototypeChain()
    // topicEventLoop()
    // topicCookie()
    // exercises()
  }

  // temporary
  {
  }

  return (
    <div className="test-components">
      <DomEvent />
    </div>
  )
}

export default PreparationToJS
