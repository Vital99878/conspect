import React, { FC, useEffect } from 'react';
import './RXjs.module.scss';
import { SingletonState } from '../../desing-pattern/components/Test-Singleton/singletonState';
import { useSingletonState } from '../../desing-pattern/components/Test-Singleton/useSingletonState';
import { useCloser } from '../Preparation/components/PreparationToJS/topics';
import { TestEmpty } from '../test/components';
import SubTest from './components/subject';
import BallComponent from './components/ball';
import PageLayout from '../../components/Layout/PageLayout';
import Loading from './components/Loading/Loading';
import TestLoadingState from './components/Loading/TestLoadingState';

const RXjsPage: FC = () => {
  return (
    <PageLayout pageHeading="RxJS Page">
      <div className="rxjs">
        <Loading />
        <TestLoadingState />
        <SubTest />
        <BallComponent position={{ left: '0px', right: '0px' }} />
        <BallComponent position={{ left: '0px', right: '0px' }} />
      </div>
    </PageLayout>
  );
};

export default RXjsPage;
