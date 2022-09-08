import React from 'react';
import '../../../style/index.scss';
import { Command, ComplexCommand, Invoker, Receiver, SimpleCommand } from './command_2';

export const CommandTest: React.FC = () => {
  // example 1
  const invoker = new Invoker();
  const receiver = new Receiver();
  invoker.setOnStart(new SimpleCommand('Say Hi!'));
  invoker.setOnFinish(new ComplexCommand(receiver, 'Send email', 'Save report'));

  return (
    <div className="AdapterTest">
      <h2>Command pattern</h2>
      <div className={'my-buttons'}>
        <button onClick={() => invoker.doSomethingImportant()}>Iphone</button>
      </div>
    </div>
  );
};

export default CommandTest;
