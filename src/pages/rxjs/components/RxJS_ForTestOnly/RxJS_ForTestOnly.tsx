import React, { useLayoutEffect, useRef, useEffect } from 'react';
import './RxJS_ForTestOnly.css';
import { useSubscribe } from './hooks/useSubscribe';
import { fromEvent } from 'rxjs';

const RxJSForTestOnly = () => {
  const { data, add } = useSubscribe();
  const divRef = useRef(null);

  return (
    <div className="onlyTestRxJS" ref={divRef}>
      <ul>
        {data.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <button onClick={add}> add new item</button>
      <input type="number" />
    </div>
  );
};

export default RxJSForTestOnly;
