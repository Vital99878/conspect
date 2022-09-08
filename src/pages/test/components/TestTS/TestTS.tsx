import { type } from 'os';
import React, { ChangeEvent, ReactElement, useEffect, useRef, useState } from 'react';
import './TestTS.css';
import { R_2, TodoType } from '../../../../components/Todos/models/index.model';
import RXjsPage from '../../../rxjs';
import { useAttachStyle } from './useAttachStyle';
import { observableValue } from '../../../rxjs/components/subject/observableValue';
import useSubject from '../../../rxjs/components/subject/hooks';
import { useSingletonState } from '../../../../desing-pattern/components/Test-Singleton/useSingletonState';

const SingletonStateComponent: React.FC = () => {
  const { instanceRef, updateInstanceRef } = useSingletonState();
  // console.log('render')
  return (
    <div className="test-typescript">
      <ul>
        {instanceRef.map((number) => {
          return <li key={number}>{number}</li>;
        })}
      </ul>
      <button onClick={updateInstanceRef}>add new number</button>
    </div>
  );
};

const TestTS: React.FC = () => {
  // keyof, typeof
  {
    type PersonTest = { name: string; age: number };
    const o: PersonTest = { name: 'Vital', age: 35 };
    const keys: keyof PersonTest = 'age';
  }

  const [field, updateField] = useSubject(observableValue, 'initial');
  const refElement = useRef(document.createElement('div'));
  function logAge(constructor: any, property: string, desc: PropertyDescriptor) {
    // console.log('property: ', { property, desc })
  }

  class Person {
    name = 'Vital';
    constructor(private year: number) {}
    @logAge
    get age() {
      return new Date().getFullYear() - this.year;
    }
    set age(value: number) {
      this.year = new Date().getFullYear() - value;
    }
    showName_() {
      console.log(this.name);
    }
    get showName() {
      const nn = this.showName_.bind(this);
      return nn;
    }
  }
  const p = new Person(1986);

  useEffect(() => {
    if (refElement.current) {
      refElement.current.addEventListener('click', p.showName);
      refElement.current.addEventListener('click', p.showName_);
    }
  }, []);

  p.age = 25;

  return (
    <div className="test-typescript">
      <SingletonStateComponent />
      <RXjsPage />
      <div ref={refElement} className="box">
        {field}
      </div>
      <input onChange={(evt: ChangeEvent<HTMLInputElement>) => updateField(evt.target.value)} />
    </div>
  );
};

export default TestTS;
