import React from 'react';
import '../../../style/index.scss';
import { Nissan, Toyota } from '../Test-AbstractFactory/carFactory';

export const AbstractFactoryTest: React.FC = () => {
  const toyota = new Toyota();
  const nissan = new Nissan();

  const mark = toyota.createSedan();
  const laurel = nissan.createSedan();

  mark.createBy();
  laurel.createBy();
  return <div className="abstractFactory">abstract Factory</div>;
};

export default AbstractFactoryTest;
