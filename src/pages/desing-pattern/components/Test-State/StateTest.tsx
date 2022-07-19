import React from 'react';
import '../../../../style/index.scss';
import { Context, Doing, Done } from './state_2';

export const STateTest = () => {
  const stateDone = new Done('state Done');
  const stateDoing = new Doing('state Doing');
  const objWithState = new Context(stateDone);

  return (
    <div className="StateTest">
      <div className={'my-buttons'}>
        <button onClick={() => objWithState.setState(stateDone)}>Set state Done</button>
        <button onClick={() => objWithState.setState(stateDoing)}>Set state to Doing</button>
        <button onClick={() => objWithState.method_1()}>Request 1 from object</button>
        <button onClick={() => objWithState.method_2()}>Request 2 from object</button>
      </div>
    </div>
  );
};

export default STateTest;
