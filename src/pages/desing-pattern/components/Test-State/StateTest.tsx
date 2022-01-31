import React from 'react'
import '../../../../index.scss'
import { Context, ConcreteState_A, ConcreteState_B } from './state'

export const StateTest = () => {
  const context = new Context(new ConcreteState_A())

  return (
    <div className="StateTest">
      <div className={'my-buttons'}>
        <button onClick={() => console.log('')}>Create object witt state A</button>
        <button onClick={() => context.transitionTo(new ConcreteState_B())}>Change state  to B</button>
        <button onClick={() => context.transitionTo(new ConcreteState_A())}>Change state  to A</button>
        <button onClick={() => context.request1()}>Request 1 from object</button>
        <button onClick={() => context.request2()}>Request 2 from object</button>
      </div>
    </div>
  )
}

export default StateTest
