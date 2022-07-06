import React from 'react';
import '../../../../index.scss';
import { Director, ConcreteBuilder1 } from './builder_2';

export const BuilderTest = () => {
  const director = new Director();
  const builder = new ConcreteBuilder1();
  director.setBuilder(builder);

  console.log('Standard basic product:');
  director.buildMinimalViableProduct();
  console.log(builder.getProduct());

  console.log('Standard full featured product:');
  director.buildFullFeaturedProduct();
  console.log(builder.getProduct());

  // Помните, что паттерн Строитель можно использовать без класса Директор.
  console.log('Custom product:');
  builder.producePartA();
  builder.producePartC();
  const res = builder.getProduct();
  console.log('res: ', res);

  return (
    <div className="BuilderTest">
      <div className={'my-buttons'}>
        <button onClick={() => console.log('')}>Set state Done</button>
        <button onClick={() => console.log('')}>Set state to Doing</button>
        <button onClick={() => console.log('')}>Request 1 from object</button>
        <button onClick={() => console.log('')}>Request 2 from object</button>
      </div>
    </div>
  );
};

export default BuilderTest;
