import React, { useEffect, useRef, useState } from 'react';
import Button from '../../briks/Button';
import WithNumber from '../../hoc/withNumber';
import { useAttachStyle } from './components/TestTS/useAttachStyle';
import './test-page.scss';
import DomEvent from '../Preparation/components/PreparationToJS/topics/components/domEvent/domEvent';
import '../../style/components.scss'
import './test-page.scss'


type TestPropsChildren = {
  children?: React.ReactNode[] | React.ReactNode;
};

const TestPage: React.FC<TestPropsChildren> = () => {
  return (
    <div className={'testPage'}>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur dolorum earum ex labore libero modi nobis non numquam pariatur perspiciatis, qui quod, voluptates? A accusamus accusantium amet aspernatur commodi delectus eos error, exercitationem hic, impedit iusto laudantium magni minus molestiae nam nobis numquam omnis perferendis perspiciatis quasi sunt voluptate.</span>
      {/*<DomEvent />*/}
      {/*<Button onClick={() => console.log('')} empty>*/}
      {/*</Button>*/}
        <button className={'button'} disabled={false} autoFocus={false}>Main button</button>
    </div>
  );
};

export default TestPage;
