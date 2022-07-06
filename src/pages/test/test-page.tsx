import React, { useRef, useEffect, useState, CSSProperties } from 'react';
import './test-page.scss';
import { Simulate } from 'react-dom/test-utils';
import { numbers } from '../../commonMockData';

import PageLayout from '../../components/Layout/PageLayout';
import SearchPage from '../../components/SearchPage';
import { TodoType, TodoStatus } from '../../components/Todos/models/index.model';
import Todos from '../../components/Todos/Todos';
import { initialTodos } from '../../components/Todos/hooks/todosSingleton';
import { TestOrderPoint } from './components';
import { useAttachStyle } from './components/TestTS/useAttachStyle';
import contextMenu = Simulate.contextMenu;

type TestPropsChildren = {
  children?: React.ReactNode[] | React.ReactNode;
};

function TestUseAttachHook() {
  const targetElRef = useRef<HTMLDivElement>(null);

  const attached = useAttachStyle(targetElRef, ['top', 'left']);
  const attached2 = useAttachStyle(targetElRef, ['top', 'right']);
  const attached3 = useAttachStyle(targetElRef, ['bottom', 'left']);
  const attached4 = useAttachStyle(targetElRef, ['bottom', 'right']);

  return (
    <div className={'wrapper'} style={{ width: '80%' }}>
      <div className={'target'} ref={targetElRef}>
        Target
      </div>
      <div className={'attached'} style={attached}>
        Top Left
      </div>
      <div className={'attached'} style={attached2}>
        Top Right
      </div>
      <div className={'attached'} style={attached3}>
        Left Bottom
      </div>
      <div className={'attached'} style={attached4}>
        Right Bottom
      </div>
      <div className={'big'}>Big</div>
    </div>
  );
}

const TestPage: React.FC<TestPropsChildren> = () => {
  const [data, setData] = useState('');
  const obj = useRef(data);
  const objj = useRef(data);
  const objjj = useRef(data);

  useEffect(() => {
    if (obj.current !== data) {
      console.log('render update obj');
      obj.current = data;
    }
  });

  useEffect(() => {
    console.log('render first');
  }, []);

  function onChangeName() {
    setData((name) => name + 'a');
  }

  return (
    <PageLayout pageHeading="Test page">
      <button onClick={onChangeName}>change name</button>
    </PageLayout>
  );
};

export default TestPage;
