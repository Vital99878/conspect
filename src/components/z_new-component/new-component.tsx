import React from 'react';
import './new-component.scss';

type Props = {
  prop?: string;
  children: React.ReactElement;
};

const NewComponent: React.FC<Props> = ({}) => {
  return <div className={'new-component'}>new component</div>;
};

export default NewComponent;
