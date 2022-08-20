import React, { useEffect, useRef, useState } from 'react';
import Button from '../../briks/Button';
import WithNumber from '../../hoc/withNumber';
import { useAttachStyle } from './components/TestTS/useAttachStyle';
import './test-page.scss';

function SomeComponent() {
  return <div>Some Component</div>;
}

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
    <div>
      <WithNumber title={'title'} step={1} Comp={SomeComponent} />
      <WithNumber title={'title 2'} step={2} Comp={SomeComponent} />
      <Button onClick={() => console.log('')} empty >

      </Button>
    </div>
  );
};

export default TestPage;
