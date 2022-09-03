import React, { useEffect, useRef, useState } from 'react';
import Button from '../../briks/Button';
import WithNumber from '../../hoc/withNumber';
import { useAttachStyle } from './components/TestTS/useAttachStyle';
import './test-page.scss';
import DomEvent from '../Preparation/components/PreparationToJS/topics/components/domEvent/domEvent';
import '../../style/components.scss'

type TestPropsChildren = {
  children?: React.ReactNode[] | React.ReactNode;
};

const TestPage: React.FC<TestPropsChildren> = () => {
  return (
    <div>
      {/*<DomEvent />*/}
      {/*<Button onClick={() => console.log('')} empty>*/}
      {/*</Button>*/}
        <button className={'button'} disabled={true} autoFocus={false}>Main button</button>
    </div>
  );
};

export default TestPage;
